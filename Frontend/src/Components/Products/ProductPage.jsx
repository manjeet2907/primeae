import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { MetaData } from "../../Layouts";
import {
  clearErrors,
  getProductDetails,
  newReview,
} from "../../store/actions/productAction";
import { NEW_REVIEW_RESET } from "../../store/constants/productConstants";
import { Loader } from "../Client";
import Rating from "@mui/material/Rating";
import ReviewCard from "./ReviewCard";

import { useParams } from "react-router-dom";
import { addItemsToCart } from "../../store/actions/cartAction";
import { AiFillStar } from "react-icons/ai";
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const ProductPage = () => {
  const dispatch = useDispatch();
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);

  useEffect(() => {
    setNav1(slider1Ref.current);
    setNav2(slider2Ref.current);
  }, []);

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );
  const { brands } = useSelector((state) => state.allBrands);

  const displayBrand = (brandId) => {
    const brand = brands?.find((brand) => brand._id === brandId);
    return brand ? brand.name : <div className='loadText'></div>;
  };

  const { id } = useParams();
  const { success, error: reviewError } = useSelector(
    (state) => state.newReview
  );

  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const increaseQuantity = () => {
    if (product.Stock <= quantity) return;

    const qty = quantity + 1;
    setQuantity(qty);
  };
  const decreaseQuantity = () => {
    if (1 >= quantity) return;

    const qty = quantity - 1;
    setQuantity(qty);
  };

  const addToCartHandler = () => {
    dispatch(addItemsToCart(id, quantity));
    toast.success("Item Added To Cart");
  };

  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const reviewSubmitHandler = () => {
    const myForm = new FormData();

    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("productId", id);

    dispatch(newReview(myForm));

    setOpen(false);
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (reviewError) {
      toast.error(reviewError);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("Review Submitted Successfully");
      dispatch({ type: NEW_REVIEW_RESET });
    }
    dispatch(getProductDetails(id));
  }, [dispatch, error, reviewError, success, id]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={`${product.name} -- ECOMMERCE`} />
          <div className='productPage'>
            <div className='productpage_carousel'>
              <Slider
                asNavFor={nav2}
                ref={slider1Ref}
                className='main_carousel'>
                {product.images &&
                  product.images.map((item, i) => (
                    <img key={i} src={item.url} alt={`${i} Slide`} />
                  ))}
              </Slider>
              <Slider
                asNavFor={nav1}
                ref={slider2Ref}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
                className='sec_carousel'>
                {product.images &&
                  product.images.map((item, i) => (
                    <img key={i} src={item.url} alt={`${i} Slide`} />
                  ))}
              </Slider>
            </div>
            <div className='productpage_details'>
              <div className='detailsBlock-1'>
                {displayBrand(product.brand) && (
                  <p>displayBrand(product.brand)</p>
                )}
                <h2>{product.name}</h2>
                <p>Product # {product._id}</p>
              </div>
              <div className='detailsBlock-2'>
                <div className='ratingcount'>
                  <AiFillStar />
                </div>
                <span className='detailsBlock-2-span'>
                  ({product.numOfReviews} Reviews)
                </span>
              </div>
              <div className='detailsBlock-3'>
                <h3>{`AED ${product.price}`}</h3>
                <div className='detailsBlock-3-1'>
                  <div className='detailsBlock-3-1-1'>
                    <button onClick={decreaseQuantity}>-</button>
                    <input readOnly type='number' value={quantity} />
                    <button onClick={increaseQuantity}>+</button>
                  </div>
                  <button
                    disabled={product.Stock < 1 ? true : false}
                    onClick={addToCartHandler}>
                    Add to Cart
                  </button>
                </div>

                <span>
                  <p>Status: </p>
                  <p className={product.Stock < 1 ? "redColor" : "greenColor"}>
                    {product.Stock < 1 ? "OutOfStock" : "InStock"}
                  </p>
                </span>
              </div>

              <div className='detailsBlock-4'>
                <p>Description : </p>
                <p>{product.description}</p>
              </div>

              <button onClick={submitReviewToggle} className='submitReview'>
                Submit Review
              </button>
            </div>
          </div>

          <div className='reviewSection'>
            <h3 className='reviewsHeading'>REVIEWS</h3>
            <div
              className='dialog'
              aria-labelledby='simple-dialog-title'
              open={open}
              onClose={submitReviewToggle}>
              <div className='dialog_title'>Submit Review</div>
              <div className='submitDialog'>
                <Rating
                  onChange={(e) => setRating(e.target.value)}
                  value={rating}
                  size='large'
                  className='ratingstars'
                />

                <textarea
                  className='submitDialogTextArea'
                  cols='30'
                  rows='5'
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}></textarea>
              </div>

              <div className='dialogue_action'>
                <button onClick={submitReviewToggle} color='secondary'>
                  Cancel
                </button>
                <button onClick={reviewSubmitHandler} color='primary'>
                  Submit
                </button>
              </div>
            </div>

            {product.reviews && product.reviews[0] ? (
              <div className='reviews'>
                {product.reviews &&
                  product.reviews.map((review) => (
                    <ReviewCard key={review._id} review={review} />
                  ))}
              </div>
            ) : (
              <p className='noReviews'>No Reviews Yet</p>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default ProductPage;
