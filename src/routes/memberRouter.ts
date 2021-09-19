import { Router } from "express";
import { auth1 } from "../controllers/auth";
const router = Router();

router.get("/", auth1, (req, res) => {
  res.render("membership");
});

export default router;
