const {
  Model,
  DataTypes
} = require("sequelize")

class Categoria extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio"
          }
        }
      }
    }, {
      sequelize,
      tableName: "categorias"
    })
  }

  static associate(models) {
    this.hasMany(models.Produto, {
      foreignKey: "cat_id",
      as: "produtos"
    })
  }

}

module.exports = Categoria