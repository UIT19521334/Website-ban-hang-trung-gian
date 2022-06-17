import mongoose from "mongoose";

const ruleSchema = new mongoose.Schema(
  {
    fee: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Rule = mongoose.model("Rule", ruleSchema);

export default Rule;
