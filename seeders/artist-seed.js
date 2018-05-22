'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('artists', [{
        routeName: 'artist-1',
        name: 'John Doe',
        email: 'demo@demo.com',
        favorites: 'Venue-example'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('artists', null, {});
  }
};