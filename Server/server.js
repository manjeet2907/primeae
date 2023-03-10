import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./Config/db.js";
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");

import errorMiddleware from "./middlewares/errors.js";
// All Routes Import
import product from "./Routes/productRoute.js";
import user from "./Routes/userRoute.js";
import order from "./Routes/orderRoute.js";
import payment from "./Routes/paymentRoute.js";

// app configs goes here
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware goes here
// --to accept data from Server
app.use(express.json());
// --error Middlewares
app.use(errorMiddleware);
// --cors Middleware
// const corsOptions = {
//   origin: "https://chatapp-frontend-mbfr.onrender.com",
//   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
// };

// app.use(cors(corsOptions));
app.use(cors());

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

// DB Config
connectDb();

// Api  EndPoints
// app.use("/api/v1", product);
app.use("/api/v1", user);
// app.use("/api/v1", order);
// app.use("/api/v1", payment);

// --------------------------deployment------------------------------

// --------------------------deployment------------------------------

// Listener
const server = app.listen(PORT, () =>
  console.log(`listening to local host: ${PORT}`)
);

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
