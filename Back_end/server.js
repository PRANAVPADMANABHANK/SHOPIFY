import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";


const app = express();

//configure the .env
dotenv.config();

//database connection
mongoose.set("strictQuery", true);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB!");
  } catch (error) {
    console.log(error);
  }
};

//port connection
app.listen(process.env.PORT, () => {
    connect();
    console.log("Backend server is running!");
  });
  
