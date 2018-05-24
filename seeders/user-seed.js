'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
        routeName: 'user-1',
        name: 'John Doe',
        details: 'I am a great artist, by my stuff',
        email: 'demo@demo.com',
        username: 'doejohn007',
        password: '****',
        favorites: 'Venue-example',
        userType: 'artist'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};