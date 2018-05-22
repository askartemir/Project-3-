'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('venues', [{
            routeName: 'venue-1',
            name: 'Coffee Shop CO.',
            email: 'coffeeshopco@demo.com',
            favorites: 'artist-example'
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('venues', null, {});
    }
};