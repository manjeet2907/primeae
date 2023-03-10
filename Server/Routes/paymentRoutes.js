import express from "express";

import {
  processPayment,
  sendStripeApiKey,
} from "../Controllers/paymentController.js";

const router = express.Router();
const { isAuthenticatedUser } = require("../middlewares/authentication.js");

router.route("/payment/process").post(isAuthenticatedUser, processPayment);

router.route("/stripeapikey").get(isAuthenticatedUser, sendStripeApiKey);

export default router;
