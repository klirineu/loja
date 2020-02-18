const Produto = require("../models/Produto")
const Categoria = require("../models/Categoria")

module.exports = {
  async index(req, res) {
    const produtos = await Produto.findAll()

    return res.json(produtos)
  },

  async store(req, res) {
    try {
      const {
        title,
        img,
        price,
        company,
        info,
        inCart,
        total,
        cat_id
      } = req.body

      const categoria = Categoria.findByPk(cat_id)

      if (!Categoria) return res.json({
        error: "Categoria não existe"
      })

      const produto = await Produto.create({
        title,
        img,
        price,
        company,
        info,
        inCart,
        total,
        cat_id
      })

      return res.json(produto)
    } catch (err) {
      return res.status(400).json({
        error: err
      })
    }
  }
}