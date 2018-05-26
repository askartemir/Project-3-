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

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
        routeName: 'user-2',
        name: 'Matt Smith',
        details: 'Buy my things!!',
        email: 'demo@demo.com',
        username: 'Mattsmith45',
        password: '****',
        favorites: 'Venue-example',
        userType: 'artist'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
        routeName: 'user-3',
        name: 'Burrito Joint',
        details: 'Im looking to buy some funky art!!',
        email: 'demo@demo.com',
        username: 'burritos',
        password: '****',
        favorites: 'Artist-example',
        userType: 'venue'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
        routeName: 'user-4',
        name: 'Corner Store',
        details: 'I am looking to decorate our store! art wanted!!',
        email: 'demo@demo.com',
        username: 'cornerstore22',
        password: '****',
        favorites: 'Artist-example',
        userType: 'venue'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
        routeName: 'user-5',
        name: 'Jane Smart',
        details: 'I am Jane! buy my trash',
        email: 'demo@demo.com',
        username: 'dodododo44',
        password: '****',
        favorites: 'Venue-example',
        userType: 'artist'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};