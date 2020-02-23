const express = require("express");

const UserController = require("./controllers/UserController");
const AuthController = require("./controllers/AuthController");
const CategoriaController = require("./controllers/CategoriaController");
const ProdutoController = require("./controllers/ProdutoController");

const Routes = express.Router();

Routes.post("/users", UserController.store);
Routes.post("/users/authenticate", AuthController.authenticate);

Routes.get("/categorias", CategoriaController.index);
Routes.post("/categorias", CategoriaController.store);

Routes.get("/produtos", ProdutoController.index);
Routes.post("/produtos", ProdutoController.store);

module.exports = Routes;
