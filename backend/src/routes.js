const express = require('express')

const CategoriaController = require('./controllers/CategoriaController')
const ProdutoController = require('./controllers/ProdutoController')

const Routes = express.Router()

Routes.get('/categorias', CategoriaController.index)
Routes.post('/categorias', CategoriaController.store)

Routes.get('/produtos', ProdutoController.index)
Routes.post('/produtos', ProdutoController.store)

module.exports = Routes