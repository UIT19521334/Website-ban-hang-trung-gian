import express from "express";

import {
  create,
  getAll,
  update,
  deleteById,
  check,
} from "../controller/follow.js";

const router = express.Router();

router.post("/follow/create", create);
router.post("/follow/check", check);

router.get("/follow/getAll", getAll);

router.put("/follow/:id", update);

router.delete("/follow/:id", deleteById);

export default router;
