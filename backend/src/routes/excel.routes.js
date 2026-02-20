import { Router } from "express";
import path from "path";
import { fileURLToPath } from "url";
import { requireAuth } from "../middlewares/requireAuth.js";

const router = Router()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const excelDir = path.resolve(__dirname, "../../../assets/excel")

router.get("/private/excel/patrimonio", requireAuth, (req, res) => {
  const filePath = path.join(excelDir, "patrimonio.xlsx")
  return res.download(filePath, "patrimonio.xlsx")
})
router.get("/private/excel/stipendio", requireAuth, (req, res) => {
  const filePath = path.join(excelDir, "stipendio.xlsx")
  return res.download(filePath, "stipendio.xlsx")
})

export default router;
