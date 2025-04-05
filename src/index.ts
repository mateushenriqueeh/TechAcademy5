import express from "express";
import sequelize from "./config/database";
import userRoutes from "./routes/userRoutes";

const app = express();
const port = 3000;

app.get("/", (res, req) => {
  req.send("Hello World");
});

app.use(express.json());
app.use(userRoutes);

// sync database
sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Datababse sincronizado com sucesso");
  })
  .catch((error) => {
    console.log("Erro ao conectar o banco de dados");
  });

app.listen(port, () => {
  console.log("Servidor rodando na porta", port);
});
