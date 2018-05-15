module.exports = function(sequelize, DataTypes) {
 var Artwork = sequelize.define("artwork", {
     piece_Id: DataTypes.INTEGER,
     img_url: DataTypes.STRING
 }, {
     timestamps: true
 });
 return Artwork;
};


  