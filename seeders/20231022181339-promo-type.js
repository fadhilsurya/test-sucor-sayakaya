module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('PromoTypes', [{
      name: 'BRITHDAY PROMO',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: '10.10 PROMO',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ]);
  },

  async down(queryInterface) {

    return queryInterface.bulkDelete('PromoTypes', null, {});

  }
};
