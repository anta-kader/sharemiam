
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'sharemiam'
});



module.exports = {

	getAllFridges : function(){
		connection.connect();
		connection.query('SELECT * FROM fridges', function(err, rows, fields) {
		  if (err) throw err;
		  console.log(JSON.stringify(rows[0]));
		});
		connection.end();
	},
	getAllFridgesWithLastItemAdded : function() {
		connection.connect();
		connection.query('SELECT * FROM fridges', function(err, rows, fields) {
		  	if (err) 
		  		return "Error";
		  	else {
			  	var last_items = [];
			  	var rows_length = rows.size();
				for(var i = 0; i < rows_length; i++) {
					connection.query('SELECT picture, MAX(given_date) as date FROM items WHERE fridge_id = ? AND state = true', [elt.id], function(err, item_rows, fields) {
						if (err) 
			  				return "Error";
			  			else
			  				last_items.push(item_rows[0]);
				  	});
				}
				console.log(JSON.stringify(last_items));
			}
		});
		connection.end();
	},
	getFridgeContent : function(fridge_id){

	},
	addItemToFridge : function(fridge_id, user_id, item) {
		var new_item = {name: item.name, picture: item.picture, given_date: item.given_date, 
			expiration_date: item.expiration_date, fridge_id: fridge_id, user_id: user_id};
		connection.query('INSERT INTO items SET ?', new_item, function (error, results, fields) {
		  	if (error) throw error;
		  	console.log(result.insertId);
		});
	},
	setFridgeItemGone : function(fridge_id, item_id) {

	},
	deleteFridgeItem : function(fridge_id, item_id) {

	}
}