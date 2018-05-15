module.exports = function(sequelize, DataTypes) {
  var Artist = sequelize.define("artist", {
      routeName: DataTypes.STRING,
      name: DataTypes.STRING,
      email: DataTypes.STRING,
     // allowNull: false,
      favorites: DataTypes.STRING
     // allowNull: true
    }, {
      timestamps: true
    });
  return Artist;
};
