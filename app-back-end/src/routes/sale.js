import express from "express";
import {
  create,
  getAll,
  update,
  deleteById,
  getByProductId,
} from "../controller/sale.js";

const router = express.Router();

router.post("/sale/create", create);

router.get("/sale/getAll", getAll);

router.put("/sale/:id", update);

router.delete("/sale/:id", deleteById);
router.get("/sale/:id", getByProductId);

export default router;
