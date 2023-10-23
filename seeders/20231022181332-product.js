'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('Products', [{
      name: 'Sucor MIX Index Fund',
      code: 'SMIF2020',
      price: 12000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Sucor Jakarta Infra Index Fund',
      code: 'SJII2021',
      price: 5500,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ]);
  },

  async down(queryInterface) {

    return queryInterface.bulkDelete('Products', null, {});
  }
};
