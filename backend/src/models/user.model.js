import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    googleSub: { type: String, required: true, unique: true },
    email: { type: String, required: true, lowercase: true, trim: true, unique: true },
    name: { type: String, trim: true },
    picture: { type: String, trim: true },
    role: { type: String, enum: ["free", "premium"], default: "free" }
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
