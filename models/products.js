'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Products.hasMany(models.Transactions, {
        foreignKey: 'product_id'
      })

    }
  }
  Products.init({
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    price: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};