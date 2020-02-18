const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const Categoria = require("../models/Categoria")
const Produto = require("../models/Produto")

const connection = new Sequelize(dbConfig)

Categoria.init(connection)
Produto.init(connection)

Categoria.associate(connection.models)
Produto.associate(connection.models)

module.exports = connection