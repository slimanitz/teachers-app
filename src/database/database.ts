import { Sequelize } from "sequelize-typescript";

export const sequelizeConnection = new Sequelize("mydb", "root", "password", {
  host: "localhost",
  dialect: "postgres",
  models: [__dirname + "/models"],
});
