import express from "express";
import { createOrder, getOrder } from "../controllers/orders.controllers.js";

const router = express.Router();

router.get("/:id", getOrder);
router.post("/", createOrder);

export default router;
