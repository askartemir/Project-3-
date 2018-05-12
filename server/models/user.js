var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Artist = sequelize.define("artist", {
  routeName: Sequelize.STRING,
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  favorites: Sequelize.STRING
}, {
  timestamps: true
});

Artist.sync();

var Artwork = sequelize.define("artwork", {
    piece_Id: Sequelize.INTEGER,
    img_url: Sequelize.STRING
}, {
    timestamps: true
});

Artwork.sync();

var Venue = sequelize.define("venue", {
    routeName: Sequelize.STRING,
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    favorites: Sequelize.STRING
}, {
    timestamps: true
});

module.exports = Artist;
module.exports = Artwork;
module.exports = Venue;