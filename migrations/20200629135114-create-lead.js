'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('leads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      company_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      associated_company_name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      company_phone: {
        type: Sequelize.INTEGER
      },
      company_address: {
        type: Sequelize.STRING
      },
      company_email: {
        type: Sequelize.STRING
      },
      supplier: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('leads');
  }
};