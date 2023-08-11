import express from "express";
import { createCustomerPreferance } from "../controllers/customerPreferance.controllers.js";


const router = express.Router();

router.post("/", createCustomerPreferance);

export default router;
