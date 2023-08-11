import express from "express";
import { createProduct } from "../controllers/products.controllers.js";


const router = express.Router();

router.post("/", createProduct);

export default router;
