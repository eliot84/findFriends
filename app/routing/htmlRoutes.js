//Dependencies
var path = require("path");



// Routes
// ===========================================================
module.exports = function(app){

	app.get("/survey.html", function(req, res) {
	res.sendFile(path.join(__dirname, "../public/survey.html"));
	//res.send("The Survey page");
	//res.json(yoda);
	});

	app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "../public/home.html"));
	//res.send("Welcome to the Star Wars Page!");
	});
};