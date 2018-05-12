var mysql = require("mysql");

var connection = mysql.createConnection({
	port: 3306,
	host: "localhost",
	user: "root",
	password: "root",
	database: //enter the database that we want to use for artist profiles and venue profiles 
});

connection.connect(function(err){
	if(err){
		console.log("JESUS you could not connect to the Database! Please step your game up :)");
		console.log("Error encountered: " + err.stack);
	}
	return;
	else{
		console.log("You have successfully connected to your Database.");
		console.log("Connected as id: " + connection.threadId);
	}
});

module.exports = connection;