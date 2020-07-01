'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class action extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  action.init({
    action: DataTypes.STRING,
    due_date: DataTypes.DATE,
    note: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'action',
  });
  return action;
};