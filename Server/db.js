const Sequelize = require("sequelize");

const db = new Sequelize({
  database: "postgres",
  username: "postgres",
  password: "superuser",
  host: "localhost",
  dialect: "postgres",
  port: "5433",
});

module.exports = db;
