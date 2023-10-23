module.exports = {
  async up(queryInterface) {
    return queryInterface.bulkInsert('Users', [{
      full_name: 'Jayadi',
      email: 'jayadi@gmail.com',
      address: 'jakarta',
      phone_number: '081310852424',
      dob: new Date('2001-10-26'),
      verified_status: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      full_name: 'Suryadi',
      email: 'suryadi@gmail.com',
      address: 'jakarta',
      phone_number: '081310852429',
      dob: new Date('2001-09-26'),
      verified_status: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ]);
  },

  async down(queryInterface) {

    return queryInterface.bulkDelete('Users', null, {});

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
