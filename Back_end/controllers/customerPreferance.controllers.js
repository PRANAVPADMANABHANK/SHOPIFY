import Preferance from "../models/customerPreferance.model.js";

export const createCustomerPreferance = async (req, res) => {
  try {
    const { preferanceId, productId } = req.body; // Assuming you're sending these details in the request body

    // Create a new customer preference instance using the Preferance model
    const newCustomerPreferance = new Preferance({
      preferanceId,
      productId,
    });

    // Save the new customer preference to the database
    const savedCustomerPreferance = await newCustomerPreferance.save();

    res.status(201).json(savedCustomerPreferance); // Return the saved customer preference as the response
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Customer preference creation failed",
        error: error.message,
      });
  }
};
