const User = require("../models/User");
const jwt = require("jsonwebtoken");

module.exports = {
  async index(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      user.password = undefined;

      return res.json(user);
    } catch (error) {
      res.status(400).json({ error });
    }
  },
  async store(req, res) {
    try {
      const { name, email, password } = req.body;

      if (
        await User.findOne({
          where: {
            name
          }
        })
      )
        return res.status(400).json({
          error: "Usuário já existe"
        });

      const user = await User.create({
        name,
        email,
        password
      });

      user.password = undefined;

      const token = jwt.sign(
        {
          id: user.id
        },
        "#@Klirineu_100%+acao",
        {
          expiresIn: 86400
        }
      );

      return res.json({
        user,
        token
      });
    } catch (err) {
      res.status(400).json({
        error: err
      });
    }
  },

  async update(req, res) {
    try {
      const user_id = req.userId;
      const { name, email, password, number, cpf } = req.body;

      const user = await User.findByPk(user_id);

      if (!user) {
        return res.status(400).json({
          error: "Usuário não existe"
        });
      }

      await user.update(
        {
          name,
          email,
          password,
          number,
          cpf
        },
        {
          where: {
            id: user_id
          }
        }
      );

      return res.json(user);
    } catch (err) {
      res.status(400).json({
        error: err
      });
    }
  },

  async delete(req, res) {
    const user_id = req.userId;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({
        error: "Usuário não existe"
      });
    }

    await user.destroy();

    return res.json();
  }
};
