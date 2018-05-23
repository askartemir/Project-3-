module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        routeName: DataTypes.STRING,
        name: DataTypes.STRING,
        details: DataTypes.STRING,
        email: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        favorites: DataTypes.STRING,
        userType: DataTypes.STRING
      }, {
        timestamps: true
      });
    return User;
  };
  