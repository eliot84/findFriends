

var friendsData = require("../data/friends.js");

module.exports = function(app){

	app.get("/api/friends", function(req, res){
		res.json(friendsData);
	});

	app.post("/api/friends", function(req, res){
		console.log(req.body);
	});
};



/*
app.get("/api/tables", function(req, res) {
    res.json(tableData);
  });
*/


