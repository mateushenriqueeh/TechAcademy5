import { Sequelize } from "sequelize";

const sequelize = new Sequelize("techacademy5", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;
