module.exports = function(sequelize, DataTypes) {
    var Venue = sequelize.define("venue", {
        routeName: DataTypes.STRING,
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        favorites: DataTypes.STRING
      }, {
        timestamps: true
      });
    return Venue;
  };