import { Request, Response } from "express";
import UserModel from "../models/UserModel";

// método que busca todos
export const getAll = async (req: Request, res: Response) => {
  const users = await UserModel.findAll();
  res.send(users);
};

// método que busca por id
export const getUserById = async (
  req: Request<{ id: number }>,
  res: Response
) => {
  const user = await UserModel.findByPk(req.params.id);

  return res.json(user);
};

// método que criar usuario

// método que cria um novo usuário
export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "Values required" });
    }

    const user = await UserModel.create({ name, email, password });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json("Erro interno no servidor " + error);
  }
};

// método que atualiza um usuario

export const updateUser = async (
  req: Request<{ id: number }>,
  res: Response
) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "Values required" });
    }
    const user = await UserModel.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "user not found" });
    }

    user.name = name;
    user.email = email;
    user.password = password;

    await user.save();
    res.status(201).json(updateUser);
  } catch (error) {
    res.status(500).json("Erro interno do servidor" + error);
  }
};

// método que deleta
export const deleteUserById = async (
  req: Request<{ id: number }>,
  res: Response
) => {
  try {
    const user = await UserModel.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "user not found" });
    }

    await user.destroy();

    res.status(204).send();
  } catch (error) {
    res.status(500).json("Erro interno no servidor" + error);
  }
};
