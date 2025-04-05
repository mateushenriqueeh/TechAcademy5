import { Request, Response } from "express";
import UserModel from "../models/UserModel";

// método que busca todos
export const getAll = async (req: Request, res: Response) => {
  const users = await UserModel.findAll();
  res.send(users);
};

export const getUserById = async (
  req: Request<{ id: number }>,
  res: Response
) => {
  const user = await UserModel.findByPk(req.params.id);

  return res.json(user);
};

export const createUser = async (req: Request, res: Response) => {
  const { name } = req.body;

  try {
    if (!name || name === "") {
      return res
        .status(400)
        .json({ error: "Propriedade nome não pode ser nula" });
    }

    const user = await UserModel.create({ name });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json("Erro interno do servidor" + error);
  }
};
