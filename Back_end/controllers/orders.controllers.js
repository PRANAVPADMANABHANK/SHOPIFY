import Order from "../models/orders.model.js";
import User from "../models/orders.model.js";
import Preferance from "../models/customerPreferance.model.js";

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
    res
      .status(500)
      .json({ message: "Order creation failed", error: error.message });
  }
};

export const getOrder = async (req, res) => {
  let cusId = req.params.id;

  try {
    // Find all orders of the specified customer
    const orders = await Order.aggregate([
      {
        $match: { customerId: cusId },
      },
      {
        $lookup: {
          from: "preferances",
          localField: "preferanceId",
          foreignField: "preferanceId",
          as: "preferanceData",
        },
      },
      {
        $unwind: "$preferanceData",
      },
      {
        $unwind: "$preferanceData.productId",
      },
      {
        $lookup: {
          from: "products",
          let: { productId: "$preferanceData.productId" },
          pipeline: [
            {
              $match: {
                $expr: { $eq: ["$productId", "$$productId"] },
              },
            },
          ],
          as: "popularProducts",
        },
      },
      {
        $group: {
          _id: "$preferanceData.productId",
          count: { $sum: 1 },
          popularProducts: { $first: "$popularProducts" },
        },
      },
      {
        $addFields: {
          "popularProducts.count": "$count",
        },
      },
      {
        $match: {
          count: { $gte: 2 }, // Filter out documents with count < 2
        },
      },
    ]);
    console.log(orders, "orders");

    const orders2 = await Order.aggregate([
      {
        $match: { customerId: cusId },
      },
      {
        $lookup: {
          from: "preferances",
          localField: "preferanceId",
          foreignField: "preferanceId",
          as: "preferanceData",
        },
      },
      {
        $unwind: "$preferanceData",
      },
      {
        $unwind: "$preferanceData.productId",
      },
      {
        $lookup: {
          from: "products",
          let: { productId: "$preferanceData.productId" },
          pipeline: [
            {
              $match: {
                $expr: { $eq: ["$productId", "$$productId"] },
              },
            },
          ],
          as: "popularProducts",
        },
      },
      {
        $group: {
          _id: "$preferanceData.productId",
          count: { $sum: 1 },
          popularProducts: { $first: "$popularProducts" },
        },
      },
      {
        $addFields: {
          "popularProducts.count": "$count",
        },
      },
    ]);

    console.log(orders2, "orders2");

    const responseData = {
      orders: orders,
      orders2: orders2,
    };

    console.log(responseData, "responseData");
    res.status(200).json(responseData);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "Error finding most popular product",
      error: error.message,
    });
  }
};

export const getAllCustomers = async (req, res) => {
  console.log("hhhh");
  try {
    const productIdsToCheck = [1, 2, 3, 4, 5];

    const usersWithMatchingPreferences = await User.find({
      customerId: { $in: ["user1", "user2", "user3", "user4", "user5"] },
    });

    // Send the response back to the client
    res.status(200).json(usersWithMatchingPreferences);
  } catch (error) {
    console.error("Error checking user preferences:", error);
  }
};
