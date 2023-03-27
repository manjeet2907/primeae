import React, { useEffect, useRef } from "react";
import { BiCreditCard, BiCalendarEvent } from "react-icons/bi";
import { MdVpnKey } from "react-icons/md";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../axios";
import { clearErrors, createOrder } from "../../store/actions/orderAction";

const Paymentcard = () => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  const payBtn = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const stripe = useStripe();
  const elements = useElements();
  const { error } = useSelector((state) => state.newOrder);

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);

  const paymentData = {
    amount: Math.round(orderInfo.totalPrice * 100),
  };

  const order = {
    shippingInfo,
    orderItems: cartItems,
    itemsPrice: orderInfo.subtotal,
    taxPrice: orderInfo.tax,
    shippingPrice: orderInfo.shippingCharges,
    totalPrice: orderInfo.totalPrice,
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    payBtn.current.disabled = true;
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/payment/process",
        paymentData,
        config
      );

      const client_secret = data.client_secret;

      if (!stripe || !elements) return;

      const result = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardNumberElement),
          billing_details: {
            name: user.name,
            email: user.email,
            address: {
              line1: shippingInfo.address,
              city: shippingInfo.city,
              state: shippingInfo.state,
              postal_code: shippingInfo.pinCode,
              country: shippingInfo.country,
            },
          },
        },
      });

      if (result.error) {
        payBtn.current.disabled = false;

        toast.error(result.error.message);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          order.paymentInfo = {
            id: result.paymentIntent.id,
            status: result.paymentIntent.status,
          };

          dispatch(createOrder(order));

          navigate("/success");
        } else {
          toast.error("There's some issue while processing payment ");
        }
      }
    } catch (error) {
      payBtn.current.disabled = false;
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error]);
  return (
    <form className='paymentcard' onSubmit={(e) => submitHandler(e)}>
      <p>Card Info</p>
      <div className='cardInputs'>
        <div className='reacticons'>
          <BiCreditCard /> <span>Card No.</span>
        </div>
        <CardNumberElement className='paymentInput' />
      </div>
      <div className='cardInputs'>
        <div className='reacticons'>
          <BiCalendarEvent /> <span>Expiry DD/MM</span>
        </div>

        <CardExpiryElement className='paymentInput' />
      </div>
      <div className='cardInputs'>
        <div className='reacticons'>
          <MdVpnKey /> <span>CVC</span>
        </div>

        <CardCvcElement className='paymentInput' />
      </div>

      <input
        type='submit'
        value={`Pay - ₹${orderInfo && orderInfo.totalPrice}`}
        ref={payBtn}
        className='paymentFormBtn'
      />
    </form>
  );
};

export default Paymentcard;
