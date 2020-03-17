const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
  async index(req, res) {
    const user = await User.findByPk(req.userId);

    //user.password = undefined;

    return res.json(user);
  },
  async store(req, res) {
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
  },

  async update(req, res) {
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

    user.password = undefined;

    return res.json(user);
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
