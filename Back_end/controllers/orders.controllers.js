import Order from "../models/orders.model.js";


//This function used to post user orders to the database
export const createOrder = async (req, res) => {
  try {

    const { customerId, preferanceId } = req.body; 

    const newOrder = new Order({
      customerId,
      preferanceId,
    });

    const savedOrder = await newOrder.save();

    res.status(201).json(savedOrder);

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
          // Filter out documents with count < 2
          count: { $gte: 2 }, 
        },
      },
    ]);

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

    const responseData = {
      orders: orders,
      orders2: orders2,
    };

    res.status(200).json(responseData);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "Error finding most popular product",
      error: error.message,
    });
  }
};
