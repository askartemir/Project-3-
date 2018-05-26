var express = require("express");
var router = express.Router();

var bcrypt = require("bcryptjs");
var bCrypt = require("bcrypt-nodejs");
var models = require("../models");

var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var Sequelize= require("sequelize");

// THIS HAS TO BE CALLED IN SERVER.JS SOMEHOW, import into index.js like other apis

//here we are going to hash the user password
var generateHash = function(password) {
	return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
};

//here we are serializing user
passport.serializeUser(function(user, done) {
	done(null, user.id);
	console.log("serialize user");
});
//here we are deserializing the user
passport.deserializeUser(function(id, done) {
	models.User.findOne({ where: { id: id } }).then(user => {
		done(null, user);
		console.log("logged in user id: " + id);
	}).catch(err => done(err));
});

//here we get the registration page 
router.get("/register", function(req, res) {
	res.render("register");
});
//here we get the login page
router.get("/login", function(req, res) {
	res.render("login");
});
//here we get the main page
router.get("/mainpage", function(req, res) {
	res.render("mainpage");
});

//here we get the information from the register form
router.post("/register", function(req, res) {
	var username = req.body.username;
	var email = req.body.email;
	var password = req.body.password;
	var userType = req.body.userType; // 'artist' OR 'venue'
	// create a new user and add user type so can then call all the users from first page and populate page with artists and venues

	console.log("Your registration username is: " + username);
	console.log("Your registration password is: " + password);

	var userPassword = generateHash(password);
	console.log("Your hashed password is: " + userPassword);

	//validation for info input
	req.checkBody("username", "Username is required").notEmpty();
	req.checkBody("password", "Password is required").notEmpty();
	req.checkBody("email", "Email is required").notEmpty();
	req.checkBody("email", "Invalid email address").isEmail();

	//check for errors
	var errors = req.validationErrors();

	if(errors) {
		res.render("register", {
			errors: errors
		});
	}
	else{
		//data should match model sometime
		var data = {
			username: username,
			email: email,
			password: userPassword
		};

		models.User.create(data).then(function(newUser) {
			//if there is an error, this will throw an error
			console.log("New User --------------> " + newUser.username);

		}).catch(Sequelize.ValidationError, function(err) {

		});

		console.log("Registration is successful.");
		req.flash("success_msg", "You are registered and can now log in.");

		res.redirect("login");
	}

});

passport.use("local", new LocalStrategy(

	function(username, password, done) {
		console.log("username: " + username);
		console.log("password: " + password);

		var isValidPassword = function(userpass, password) {
			return bCrypt.compareSync(password, userpass);
		}

		models.User.findOne({ where : { username: username }}).then(function(user) {
			console.log("The user id is: " + user.id); 

			if(!user) {
				return done(null, false, { message: "Incorrect username." });
			}
			console.log("This is the found user's email: " + user.email);

			if(!bCrypt.compareSync(password, user.password)) {
				console.log("Incorrect password");
				return done(null, false, { message: "Incorrect password." });
			}

			return done(null, user);
		});
	}
));

router.post("/login", passport.authenticate("local", { successRedirect: "/users/mainpage", failureRedirect: "/users/login", failureFlash: true}), function(req, res) {
	console.log("Post Login --------> " + req.body);
	res.redirect("/mainpage");
	
});

router.get("/logout", function(req, res) {
	req.logout();
	res.redirect("/users/login");
});

module.exports = router;
