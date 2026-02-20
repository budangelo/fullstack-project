import jwt from "jsonwebtoken";

const requireAuth = (req, res, next) => {
  const auth = req.headers.authorization || "";
  const [type, token] = auth.split(" ")
  if (type !== "Bearer" || !token) {
    return res.status(401).json({ error: "missing token" });
  }
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    return next();
  } catch {
    return res.status(401).json({ error: "invalid token" });
  }
};

export {requireAuth}
