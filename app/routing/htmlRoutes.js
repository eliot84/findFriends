
// Routes
// ===========================================================
	exports.app.get("/", function(req, res) {
	  res.send("Welcome to the Star Wars Page!");
	});

	exports.app.get("/yoda", function(req, res) {
	  res.json(yoda);
	});
