

var friendsData = require("../data/friends.js");

module.exports = function(app){

	app.get("/api/friends", function(req, res){
		res.json(friendsData);
	});

	app.post("/api/friends", function(req, res){
		friendsData.push(req.body);
		console.log("COOL!: " + req.body);

		var count = friendsData.length;
		res.send(count);
	});
};



/*
app.get("/api/tables", function(req, res) {
    res.json(tableData);
  });
*/


