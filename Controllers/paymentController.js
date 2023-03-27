import asyncHandler from "express-async-handler";
import Stripe from "stripe";

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const processPayment = asyncHandler(async (req, res, next) => {
  const myPayment = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "AED",
    metadata: {
      company: "Prime AE",
    },
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res
    .status(200)
    .json({ success: true, client_secret: myPayment.client_secret });
});

const sendStripeApiKey = asyncHandler(async (req, res, next) => {
  res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY });
});

export { processPayment, sendStripeApiKey };
