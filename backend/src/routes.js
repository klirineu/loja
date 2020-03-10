const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");

const UserController = require("./controllers/UserController");
const AuthController = require("./controllers/AuthController");
const CategoriaController = require("./controllers/CategoriaController");
const ProdutoController = require("./controllers/ProdutoController");

const authMiddleware = require("./middlewares/authenticate");

const Routes = express.Router();
const upload = multer(uploadConfig);

Routes.post("/users", UserController.store);
Routes.post("/users/authenticate", AuthController.authenticate);

Routes.get("/categorias", CategoriaController.index);
Routes.get("/categoria/:name", CategoriaController.find);
Routes.post("/categorias", CategoriaController.store);

Routes.get("/produtos", ProdutoController.index);
Routes.post("/produtos", upload.single("img"), ProdutoController.store);

Routes.use(authMiddleware);
Routes.get("/users", UserController.index);
Routes.put("/users", UserController.update);

module.exports = Routes;
