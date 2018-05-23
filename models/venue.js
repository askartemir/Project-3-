module.exports = function(sequelize, DataTypes) {
    var Venue = sequelize.define("Venue", {
        routeName: DataTypes.STRING,
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        favorites: DataTypes.STRING
      }, {
        timestamps: true
      });
    return Venue;
  };