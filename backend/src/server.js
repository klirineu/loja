const express = require('express')
const app = express()
app.use(express.json())

const server = require('http').Server(app)

require("./database")

const Routes = require('./routes')

app.use(Routes)

server.listen(3333)