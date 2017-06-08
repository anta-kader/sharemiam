
// Get dependencies
var nano = require('nano')('http://localhost:5984');
var sharemiam_db = nano.use("sharemiam");

//Check if the database exists
if(!sharemiam_db){
	//Create the database
	nano.db.create("sharemiam", function(err, body){
		if (err) 
		    console.log('Erreur : BD non créée');
		else
			sharemiam_db = nano.use("sharemiam");
	})
}

module.exports = {

	add : function(){
		sharemiam_db.insert({ crazy: true }, 'rabbit', function(err, body) {
		  	if (err)
		    	console.log("Erreur : data not added");
			else
				console.log("Done !")
		});
	}

}
