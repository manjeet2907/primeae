import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./Config/db.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import cloudinary from "cloudinary";

import path from "path";

import errorMiddleware from "./middlewares/errors.js";
// --cors Middleware

// app configs goes here
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware goes here
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOptions));
// --to accept data from Server
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

// All Routes Import
import product from "./Routes/productRoutes.js";
import user from "./Routes/userRoutes.js";
import order from "./Routes/orderRoutes.js";
import payment from "./Routes/paymentRoutes.js";
import brand from "./Routes/brandRoutes.js";
import category from "./Routes/categoryRoutes.js";

// Api  EndPoints
app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);
app.use("/api/v1", brand);
app.use("/api/v1", category);

// --error Middlewares
app.use(errorMiddleware);

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

// DB Config
connectDb();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
// --------------------------deployment------------------------------

app.use(express.static(path.join(__dirname, "./Frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./Frontend/build/index.html"));
});
// --------------------------deployment------------------------------
//rest api
// app.get("/", (req, res) => {
//   res.send("<h1>Welcome to Mobile ecommerce app</h1>");
// });
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
