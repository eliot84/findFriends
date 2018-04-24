

var friendsData = require("../data/friends.js");

module.exports = function(app){

	app.get("/api/friends", function(req, res){
		res.json(friendsData);
	});

	app.post("/api/friends", function(req, res){
		friendsData.push(req.body);
		console.log("COOL!: " + req.body);

	var count = friendsData.length;
	var result = [];
	var runningTotal = 0;
		//For every friend in the list
		for (var i = 0; i < count - 1; i++){
			//check/calculate the difference between the user and each friend
			for(var x = 0; x < 10; x++){
				var diff = friendsData[i].scores[x] - friendsData[friendsData.length - 1].scores[x];
				diff = Math.abs(diff);
				runningTotal = runningTotal + diff;
				console.log("friend score: " + friendsData[i].scores[x] + " user score: " + friendsData[friendsData.length - 1].scores[x] + " the difference: " + diff + " the running total: " + runningTotal)
			}

			//new array holds the difference for each friend in the list and the friend id
			result.push([runningTotal, i]);
			runningTotal = 0;	
		}
		
		//find the friend with the least amount of difference via sorting multidimensional array
		result = result.sort(sortFunction);

		function sortFunction(a, b) {
    		if (a[0] === b[0]) {
       		 return 0;
    		}
   			else {
        	return (a[0] < b[0]) ? -1 : 1;
   			}
		}

	//Show Results
	//console.log("here are the results: " + result);	

		var compatibleFriend = [friendsData[result[0][1]].name, friendsData[result[0][1]].photo];

		res.send(compatibleFriend);
	});
};



/*
app.get("/api/tables", function(req, res) {
    res.json(tableData);
  });
*/


