//here are dependencies
var express = require("express");

var path = require("path");
var cookieParser = require("cookie-parser");
var expressValidator = require("express-validator");
var session = require("express-session");
var MySQLStore = require("express-mysql-session");
var mysql = require("mysql");
var AWS = require("aws-sdk");
var s3 = new AWS.S3();
var fs = require("fs");

var bodyParser = require("body-parser");
//dependencies for passport authentication  ... passport is middleware that says whether a user is cool or not--->
var passport = require("passport");
//passport-local is module for handling password storage in your own database
var LocalStrategy = require('passport-local').Strategy;
var flash = require('flash');
// <-----
var bcrypt = require("bcrypt");
//here we set up the express app
var app = express();
var PORT = process.env.PORT || 8080;
//require our models for synching

var db = require("./models");

//sets up bucket name and key
var bucketName = "project3artbucket";
var bucketKey = "AKIAIG5RSPGSHGU6Y3SA";
var secretKey = "9GMtEtqgH+ifUw2jmDiVU7/WSQobdcioAYMsAykYt";

AWS.config.update(
{
    accessKeyId: bucketKey,
    secretAccessKey: secretKey,
});



//here we set up the express app to handle data parsing
app.use(bodyParser.urlencoded({extended:true}));
//here we set up app parsing JSON
app.use(bodyParser.json());
//here we set up the express app to use passport for user authentication
app.use(passport.initialize());
app.use(passport.session());

//here we set up the static directory to be served - where user first comes as either artist or venue... and can sign in 
app.use(express.static("public"));


//here are the Routes
// require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);

//sync our sequelize models and set up the server to begin listening (start express app)

// db.sequelize.sync({force:true}).then(function(){
//  	app.listen(PORT, function(){
// 		console.log("App is listening on PORT: " + PORT);
//  	});
// });

s3.createBucket({Bucket: bucketName}, function(err, data)
{
    if(err)
    {
        console.log(err);
    }

    else
    {
        params = {Bucket: bucketName, Key: bucketKey, Body: "Hello!"};

        s3.putObjects(params, function(err, data)
        {
            if(err)
            {
                console.log(err);
            }

            else
            {
                console.log("Succesfully uploaded data to project3artbucket");
            }
        });
    }
});


//here are the Routes
//require("./routes/html-routes.js")(app);
//require("./routes/api-routes.js")(app);


//sync our sequelize models and set up the server to begin listening (start express app)

db.sequelize.sync({force:true}).then(function(){
	app.listen(PORT, function(){
		console.log("App is listening on PORT: " + PORT);
	});

});
