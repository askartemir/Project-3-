module.exports = function(sequelize, DataTypes) {
  var Artist = sequelize.define("artist", {
      routeName: DataTypes.STRING,
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      favorites: DataTypes.STRING
    }, {
      timestamps: true
    });
  return Artist;
};
