module.exports = function(sequelize, DataTypes) {
  var Artist = sequelize.define("Artist", {
      routeName: DataTypes.STRING,
      name: DataTypes.STRING,
      details: DataTypes.STRING,
      email: DataTypes.STRING,
      favorites: DataTypes.STRING,
   
    }, {
      timestamps: true
    });
  return Artist;
};

