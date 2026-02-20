import mongoose from "mongoose";

const pillSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true, maxlength: 120 },
    summary: { type: String, required: true, trim: true, maxlength: 600 },
    category: { type: String, trim: true, maxlength: 60 },
    isPublic: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export default mongoose.model("Pill", pillSchema);
