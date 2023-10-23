'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transactions.belongsTo(models.Promos, {
        foreignKey: 'promo_id'
      })
      Transactions.belongsTo(models.Products, {
        foreignKey: 'product_id'
      })
      Transactions.belongsTo(models.Users, {
        foreignKey: 'user_id'
      })

      // define association here
    }
  }
  Transactions.init({
    product_id: DataTypes.INTEGER,
    promo_id: DataTypes.INTEGER,
    is_paid: DataTypes.BOOLEAN,
    user_id: DataTypes.INTEGER,
    gross_amount: DataTypes.BIGINT,
    discount_amount: DataTypes.BIGINT,
    total_amount: DataTypes.BIGINT,
  }, {
    sequelize,
    modelName: 'Transactions',
  });
  return Transactions;
};