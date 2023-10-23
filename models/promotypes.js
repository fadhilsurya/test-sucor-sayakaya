'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PromoTypes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PromoTypes.hasOne(models.Promos, {
        foreignKey: 'promo_type_id'
      })
      // define association here
    }
  }
  PromoTypes.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PromoTypes',
  });
  return PromoTypes;
};