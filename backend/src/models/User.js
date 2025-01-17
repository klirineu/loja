const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: {
              args: [4, 30],
              msg: "Esse campo deve ter entre 4 e 30 caracteres"
            },
            notEmpty: {
              msg: "Esse campo não pode ser vazio"
            }
          }
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            isEmail: {
              msg: "Esse campo tem que ser um email valido"
            },
            notEmpty: {
              msg: "Esse campo não pode ser vazio"
            }
          }
        },
        cpf: {
          type: DataTypes.INTEGER
        },
        number: {
          type: DataTypes.INTEGER
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Esse campo não pode ser vazio"
            },
            len: {
              args: [6],
              msg: "Senha deve ter mais que 6 caracteres"
            }
          }
        }
      },
      {
        sequelize,
        tableName: "users"
      }
    );

    this.addHook("beforeSave", async user => {
      if (user.password) {
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, salt);
      }
    });
    return this;
  }
  async checkPassword(password) {
    return bcrypt.compareSync(password, this.password);
  }
}

module.exports = User;
