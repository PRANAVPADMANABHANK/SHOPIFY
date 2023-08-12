import express from "express";
import { createOrder, getOrder, getAllCustomers, getInexpensive } from "../controllers/orders.controllers.js";


const router = express.Router();

router.post("/", createOrder);
router.get("/:id",getOrder);
router.get("/allCustomers",getAllCustomers)
router.get("/inexpensive",getInexpensive)


export default router;