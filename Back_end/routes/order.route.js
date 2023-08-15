import express from "express";
import {
  createOrder,
  getOrder,
  getAllCustomers,
} from "../controllers/orders.controllers.js";

const router = express.Router();

router.get("/allCustomers", getAllCustomers);
router.get("/:id", getOrder);
router.post("/", createOrder);

export default router;
