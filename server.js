// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//var htmlRoutes = require("./app/routing/htmlRoutes.js")(app);

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Routes
// ===========================================================


	app.get("/survey.html", function(req, res) {
	  res.sendFile(path.join(__dirname, "./app/public/survey.html"));
		//res.send("The Survey page");
	
	  //res.json(yoda);
	});

	app.get("/*", function(req, res) {
	  res.sendFile(path.join(__dirname, "./app/public/home.html"));
	  //res.send("Welcome to the Star Wars Page!");
	});


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});