//here are dependencies
var express = require("express");
var bodyParser = require("body-parser");

//here we set up the express app
var app = express();
var PORT = process.env.PORT || 8080;

//require our models for synching
var db = require("./models");


//here we set up the express app to handle data parsing
app.use(bodyParser.urlencoded({extended:true}));
//here we set up app parsing JSON
app.use(bodyParser.json());

//here we set up the static directory to be served - where user first comes as either artist or venue... and can sign in 
app.use(express.static("public"));


//here are the Routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);


//sync our sequelize models and set up the server to begin listening (start express app)

db.sequelize.sync({force:true}).then(function(){
	app.listen(PORT, function(){
		console.log("App is listening on PORT: " + PORT);
	});
});