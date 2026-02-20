import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, trim: true, lowercase: true, unique: true },
    status: { type: String, enum: ["subscribed", "unsubscribed"], default: "subscribed" },
    welcomeSentAt: { type: Date }
  },
  { timestamps: true }
);

export default mongoose.model("Subscriber", subscriberSchema);
