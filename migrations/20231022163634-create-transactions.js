'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      promo_id: {
        type: Sequelize.INTEGER,
      },
      is_paid: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      gross_amount: {
        type: Sequelize.BIGINT,
        allowNull: false,
        defaultValue: 0
      },
      discount_amount: {
        type: Sequelize.BIGINT,
        defaultValue: 0
      },
      total_amount: {
        type: Sequelize.BIGINT,
        allowNull: false,
        defaultValue: 0
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Transactions');
  }
};