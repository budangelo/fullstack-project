import { Router } from "express";
import Subscriber from "../models/subscriber.model.js";
import { sendWelcomeEmail } from "../services/mailer.js";

const router = Router()
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)

router.post("/newsletter/subscribe", async (req, res) => {
  try {
    const email = (req.body.email || "").trim().toLowerCase()
    if (!email || !isValidEmail(email)) {
      return res.status(400).json({ error: "valid email is required" })
    }
    let subscriber = await Subscriber.findOne({ email })
    const isNew = !subscriber;
    if (!subscriber) {
      subscriber = await Subscriber.create({ email })
    } else {
      if (subscriber.status === "unsubscribed") {
        subscriber.status = "subscribed"
      }
    }
    if (!subscriber.welcomeSentAt) {
      await sendWelcomeEmail(email);
      subscriber.welcomeSentAt = new Date()
      await subscriber.save()
    }
    return res.status(isNew ? 201 : 200).json({ status: "subscribed" })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: "internal server error" })
  }
});

export default router;
