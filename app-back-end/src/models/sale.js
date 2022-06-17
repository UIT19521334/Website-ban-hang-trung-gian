import mongoose from "mongoose";

const saleSchema = new mongoose.Schema(
  {
    asker_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order", //seller
      required: true,
    },
    taker_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order", //buyer
      required: true,
    },
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    fee: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Sale = mongoose.model("Sale", saleSchema);

export default Sale;
