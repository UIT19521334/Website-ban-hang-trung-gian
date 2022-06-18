import express from "express";
import {
  getById,
  getAll,
  update,
  updatePassword,
  getOrder,
  getSale,
  getFollow,
} from "../controller/user.js";

const router = express.Router();

// router.get("/:id", getById);

router.get("/user/getAll", getAll);

router.get("/user/:id", getById);

router.get("/user/order/:id", getOrder);
router.get("/user/sale/:id", getSale);
router.get("/user/follow/:id", getFollow);

router.put("/user/:id", update);

router.put("/user/changepassword/:id", updatePassword);

export default router;
