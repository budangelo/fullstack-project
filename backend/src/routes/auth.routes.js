import { Router } from "express";
import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";
import User from "../models/user.model.js";
import { requireAuth } from "../middlewares/requireAuth.js";

const router = Router();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

router.post("/auth/google", async (req, res) => {
  try {
    const { idToken } = req.body
    if (!idToken) {
      return res.status(400).json({ error: "idToken is required" })
    }
    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID
    })
    const payload = ticket.getPayload()
    const googleSub = payload.sub
    const email = (payload.email || "").toLowerCase()
    const name = payload.name || ""
    const picture = payload.picture || ""
    if (!googleSub || !email) {
      return res.status(400).json({ error: "invalid google token" })
    }
    const user = await User.findOneAndUpdate(
      { googleSub },
      { googleSub, email, name, picture },
      { new: true, upsert: true }
    )
    const token = jwt.sign(
      { userId: user._id.toString(), role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || "7d" }
    )
    return res.json({
      token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        picture: user.picture,
        role: user.role
      }
    });
  } catch (err) {
    console.error(err);
    return res.status(401).json({ error: "unauthorized" });
  }
})
router.get("/auth/me", requireAuth, async (req, res) => {
  const user = await User.findById(req.user.userId).select("email name picture role")
  if (!user) return res.status(404).json({ error: "user not found" });
  return res.json({ user })
})

export default router;
