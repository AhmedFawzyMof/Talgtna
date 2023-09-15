const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use("/favicon.ico", express.static("frontend/static/img/favicon.ico"));

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

const IndexRoute = require("./router/index.router");
const ComponyRoute = require("./router/compony.router");

app.use("/", IndexRoute);
app.use("/compony", ComponyRoute);

app.listen(5500);
