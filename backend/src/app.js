import express from "express";
import cors from "cors";
import healthRouter from "./routes/health.routes.js";
import feedbackRouter from "./routes/feedback.routes.js";
import newsletterRouter from "./routes/newsletter.routes.js";
import authRouter from "./routes/auth.routes.js";
import privateRouter from "./routes/private.routes.js";
import pillsRouter from "./routes/pill.route.js";
import excelRouter from "./routes/excel.routes.js";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN,
    credentials: true
  })
)
app.use(healthRouter)
app.use(feedbackRouter)
app.use(newsletterRouter)
app.use(authRouter)
app.use(privateRouter)
app.use(pillsRouter)
app.use(excelRouter)







export default app;
