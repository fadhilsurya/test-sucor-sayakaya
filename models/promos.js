'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Promos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Promos.hasMany(models.Transactions, {
        foreignKey: 'promo_id'
      })
      Promos.belongsTo(models.PromoTypes, {
        foreignKey: 'promo_type_id'
      })
      // define association here
    }
  }
  Promos.init({
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    discount: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    promo_type_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Promos',
  });
  return Promos;
};