import express from "express";
import { getAll } from "../controller/analytic.js";

const router = express.Router();

router.get("/analytic/getAll", getAll);

export default router;
