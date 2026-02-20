import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true, minlength: 2, maxlength: 30 },
    email: { type: String, trim: true, lowercase: true, maxlength: 35 },
    message: { type: String, required: true, trim: true, minlength: 5, maxlength: 200 },
    rating: { type: Number, min: 1, max: 5 }
  },
  { timestamps: true }
);

export default mongoose.model("Feedback", feedbackSchema);
