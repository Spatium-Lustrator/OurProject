const certificate_router = require("./routes/certificate.routes");
const auth_router = require("./routes/auth.routes");
const institute_router = require("./routes/institute.routes");
const express = require("express");
const sequelize = require("./db");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
const PORT = "4000";

app.use(cors());
app.use(express.json());
app.use("/api", certificate_router);
app.use("/auth", auth_router);
app.use("/institute", institute_router);
app.use(cookieParser());

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("успешное подклюение к бд");
    app.listen(PORT, () => console.log("сервер работает"));
  } catch (error) {
    console.log("ошибка: " + error);
  }
};

start();
