import Product from "../models/products.model.js"; // Import your Product model

export const createProduct = async (req, res) => {
  try {
    const { productId, productName, price, image } = req.body; // Assuming you're sending these details in the request body

    // Create a new product instance using the Product model
    const newProduct = new Product({
      productId,
      productName,
      price,
      image,
    });

    // Save the new product to the database
    const savedProduct = await newProduct.save();

    res.status(201).json(savedProduct);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Product creation failed", error: error.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    // Retrieve all products from the database
    const products = await Product.find();

    res.status(200).json(products); // Return the list of products as the response
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching products", error: error.message });
  }
};
