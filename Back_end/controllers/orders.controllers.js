import Order from "../models/orders.model.js";

export const createOrder = async (req, res) => {
  try {
    const { customerId, preferanceId } = req.body; // Assuming you're sending these details in the request body

    // Create a new order instance using the Order model
    const newOrder = new Order({
      customerId,
      preferanceId,
    });

    // Save the new order to the database
    const savedOrder = await newOrder.save();

    res.status(201).json(savedOrder); // Return the saved order as the response
  } catch (error) {
    res.status(500).json({ message: "Order creation failed", error: error.message });
  }
};
