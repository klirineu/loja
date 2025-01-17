const Categoria = require("../models/Categoria");
const Produto = require("../models/Produto");

module.exports = {
  async index(req, res) {
    try {
      //const {cat_id} = req.params

      const categorias = await Categoria.findAll({
        include: [
          {
            model: Produto,
            as: "produtos"
          }
        ]
      });

      return res.json(categorias);
    } catch (err) {
      return res.status(400).json({
        error: err
      });
    }
  },

  async find(req, res) {
    try {
      const { name } = req.params;

      const categoria = await Categoria.findOne({
        where: {
          name
        },
        include: [
          {
            model: Produto,
            as: "produtos"
          }
        ]
      });

      return res.json(categoria);
    } catch (error) {
      res.status(400).json({ error });
    }
  },

  async store(req, res) {
    try {
      const { name } = req.body;

      const categoria = await Categoria.findOne({
        where: {
          name
        }
      });

      if (!categoria) {
        categoria = await Categoria.create({
          name
        });

        return res.json(categoria);
      }

      return res.json(categoria);
    } catch (err) {
      return res.status(400).json({
        error: err
      });
    }
  }
};
