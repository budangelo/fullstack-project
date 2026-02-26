import { Router } from "express";
import path from "path";
import { fileURLToPath } from "url";
import { requireAuth } from "../middlewares/requireAuth.js";

const router = Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const excelDir = path.resolve(__dirname, "../../assets/excel");

router.get("/private/excel/patrimonio", requireAuth, (req, res) => {
  const filePath = path.join(excelDir, "patrimonio.xlsx");
  res.download(filePath, "patrimonio.xlsx", (err) => {
    if (err && !res.headersSent) {
      return res.status(404).json({ error: "file not found" });
    }
  });
});

router.get("/private/excel/stipendio", requireAuth, (req, res) => {
  const filePath = path.join(excelDir, "stipendio.xlsx");
  res.download(filePath, "stipendio.xlsx", (err) => {
    if (err && !res.headersSent) {
      return res.status(404).json({ error: "file not found" });
    }
  });
});

export default router;
