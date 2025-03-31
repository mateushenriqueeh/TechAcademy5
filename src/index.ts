import express from "express";
import sequelize from "./config/database";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Banco de dados conectado");
  })
  .catch((error) => {
    console.log("Erro ao conectar o Banco");
  });

app.listen(port, () => {
  console.log("Servidor rodando na porta", port);
});
