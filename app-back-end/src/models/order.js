import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    asker_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", //seller
      required: true,
    },
    taker_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", //buyer
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    order_type: {
      //bid or place or buy now
      type: String,
      required: true,
    },
    active: {
      //pending
      type: String,
      required: true,
    },
    sold: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
