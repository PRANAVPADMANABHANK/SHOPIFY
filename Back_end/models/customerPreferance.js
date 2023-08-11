import mongoose from "mongoose";
const { Schema } = mongoose;

// customerPreferance Schema
const customerPreferanceSchema = new Schema(
  {
    preferanceId: {
      type: String,
      required: true,
    },
    productId: {
      type: [Number],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", customerPreferanceSchema);
