'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  customer.init({
    company_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    associated_company_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    contact_person: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    supplier: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'customer',
  });
  return customer;
};