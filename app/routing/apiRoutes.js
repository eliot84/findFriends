

var friendsData = require("../data/friends.js");

module.exports = function(app){

	app.get("/api/friends", function(req, res){
		res.json(friendsData);
	});
};



/*
app.get("/api/tables", function(req, res) {
    res.json(tableData);
  });
*/


