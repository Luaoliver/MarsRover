'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plateau extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Plateau.init({
    xAxis: DataTypes.INTEGER,
    yAxis: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Plateau',
  });
  return Plateau;
};