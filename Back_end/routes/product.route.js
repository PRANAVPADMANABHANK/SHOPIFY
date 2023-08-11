import express from "express";
import { createProduct, getProduct } from "../controllers/products.controllers.js";


const router = express.Router();

router.post("/", createProduct);
router.get("/",getProduct)

export default router;
