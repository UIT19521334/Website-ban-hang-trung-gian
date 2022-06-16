import express from "express";
import { getAll, update, create } from "../controller/rule.js";

const router = express.Router();

router.get("/rule/getAll", getAll);

router.put("/rule/:id", update);

router.post("/rule/create", create);

export default router;
