import mongoose from "mongoose";
const { Schema } = mongoose;

// order Schema
const OrderSchema = new Schema(
  {
    customerId: {
      type: String,
      required: true,
    },
    preferanceId: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Order", OrderSchema);
