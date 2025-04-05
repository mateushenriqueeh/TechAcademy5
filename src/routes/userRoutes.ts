import express, { Router } from "express";
import UserModel from "../models/UserModel";
import { getAll, getUserById, createUser } from "../controller/userController";

const router = express.Router();

router.get("/users", getAll);
router.get("/users/:id", getUserById);
router.post("/users", createUser);

export default router;
