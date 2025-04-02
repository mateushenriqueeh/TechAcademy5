import express from "express";
import UserModel from "../models/UserModel";

const router = express();

router.get("/users", async (req, res) => {
  const users = await UserModel.findAll();
  res.send(users);
});

export default router;
