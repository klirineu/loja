const express = require("express");
const app = express();
app.use(express.json());

const server = require("http").Server(app);

require("./database");

const cors = require("cors");
const path = require("path");
const Routes = require("./routes");

app.use(cors());

app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));

app.use(Routes);

server.listen(3333);
