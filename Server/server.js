import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./Config/db.js";

// app configs goes here
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware goes here
// to accept data from Server
app.use(express.json());

// const corsOptions = {
//   origin: "https://chatapp-frontend-mbfr.onrender.com",
//   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
// };

// app.use(cors(corsOptions));
app.use(cors());

// DB Config
connectDb();

// Api  EndPoints

// --------------------------deployment------------------------------

// --------------------------deployment------------------------------

// Listener
app.listen(PORT, () => console.log(`listening to local host: ${PORT}`));
