import express from "express";
import { getAll, update, create } from "../controller/rule.js";

const router = express.Router();

router.get("/rule/getAll", getAll);

router.post("/rule/create", create);

router.put("/rule/:id", update);

export default router;
