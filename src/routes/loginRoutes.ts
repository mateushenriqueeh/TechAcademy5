import express, { Router } from "express";
import { loginUser } from "../controller/loginController";

const router = express.Router();

router.post("/login", loginUser);

export default router;
