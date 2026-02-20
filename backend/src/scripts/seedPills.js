import "dotenv/config";
import mongoose from "mongoose";
import Pill from "../models/pill.model.js";

const run = async () => {
  await mongoose.connect(process.env.MONGODB_URI)

  await Pill.deleteMany({});
  const pills = Array.from({ length: 20 }).map((_, i) => ({
    title: `Pillola ${i + 1}`,
    summary: `Contenuto demo per la pillola ${i + 1}.`,
    category: i < 10 ? "Base" : "Avanzato",
    isPublic: i < 10
  }))

  await Pill.insertMany(pills)

  console.log("Seed completed:", pills.length)
  await mongoose.disconnect()
}
run().catch(async (err) => {
  console.error(err)
  try {
    await mongoose.disconnect()
  } catch {}
  process.exit(1)
});
