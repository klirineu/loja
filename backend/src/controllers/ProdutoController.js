const Produto = require("../models/Produto");
const Categoria = require("../models/Categoria");

module.exports = {
  async index(req, res) {
    const [name] = req.params;

    const produtos = await Produto.findOne({
      where: {
        name
      }
    });

    return res.json(produtos);
  },

  async store(req, res) {
    try {
      const { filename } = req.file;
      const { title, price, company, info, inCart, total, cat_id } = req.body;

      const categoria = Categoria.findByPk(cat_id);

      if (!Categoria)
        return res.json({
          error: "Categoria não existe"
        });

      const produto = await Produto.create({
        title,
        img: filename,
        price,
        company,
        info,
        inCart,
        total,
        cat_id
      });

      return res.json(produto);
    } catch (err) {
      return res.status(400).json({
        error: err
      });
    }
  }
};
