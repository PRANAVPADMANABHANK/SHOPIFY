import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRoute from "./routes/product.route.js";
import customerRoute from "./routes/customerPreferance.route.js";
import orderRoute from "./routes/order.route.js";
import cors from "cors";

const app = express();

//-------------------------------------------------configure the .env
dotenv.config();

//-------------------------------------------------database connection

//implementing database connection
mongoose.set("strictQuery", true);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB!");
  } catch (error) {
    console.log(error);
  }
};

//-------------------------------------------------middleware

 //"origin" => represents we are connecting frontend to backend using cors library.
 app.use(cors({ origin: "http://localhost:3000" }));
 //this will allow to pass any json from the client side
 app.use(express.json()); 

//-------------------------------------------------endpoints

//endpoint for product route
app.use("/api/products", productRoute);
//endpoint for customer route
app.use("/api/preferances", customerRoute);
//endpoint for order route
app.use("/api/orders", orderRoute);

//------------------------------------------------port connection

//backend server running port
app.listen(process.env.PORT, () => {
  connect();
  console.log("Backend server is running!");
});
