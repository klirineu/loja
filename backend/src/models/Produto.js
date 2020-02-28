const {
  Model,
  DataTypes
} = require("sequelize")

class Produto extends Model {
  static init(sequelize) {
    super.init({
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio"
          }
        }
      },
      img: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio"
          }
        }
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio"
          }
        }
      },
      company: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio"
          }
        }
      },
      info: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio"
          }
        }
      },
      inCart: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio"
          }
        }
      },
      total: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio"
          }
        }
      },
      img_url: {
        type: DataTypes.VIRTUAL,
        get() {
          return `http://localhost:3333/files/${this.getDataValue("img")}`
        }
      }
    }, {
      sequelize,
      tableName: "produtos"
    })
  }

  static associate(models) {
    this.belongsTo(models.Categoria, {
      foreignKey: "cat_id",
      as: "categorias"
    })

  }

}

module.exports = Produto