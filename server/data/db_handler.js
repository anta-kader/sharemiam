
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'sharemiam'
});



module.exports = {

	getAllFridges : function(res){
		connection.connect();
		connection.query('SELECT * FROM fridges', function(err, rows, fields) {
		  	if (err) throw (err);
		  	res.setHeader('Content-Type', 'application/json');
		  	res.json(JSON.stringify(rows));
		});
		connection.end();
	},
	getAllFridgesWithLastItemAdded : function(res) {
		connection.connect();
		//'SELECT f.name AS fridge_name, f.emplacement_name, f.long, f.lat, i.name AS item_name, i.picture, MAX(i.given_date) FROM fridges f, items i WHERE f.id = i.fridge_id AND i.state = true', function(err, rows, fields) {
		connection.query('SELECT * from fridges f, (SELECT MAX(given_date), id as item_id, name, fridge_id, picture FROM items GROUP BY fridge_id, id) last_items WHERE last_items.fridge_id = f.id', function(err, rows, fields) {
		  	if (err) throw (err);
		  	res.setHeader('Content-Type', 'application/json');
		  	res.json(JSON.stringify(rows));
		});
		connection.end();
	},
	getFridgeContent : function(res, fridge_id){
		connection.connect();
		connection.query('SELECT * FROM items WHERE fridge_id = ? AND state = true', [fridge_id], function(err, rows, fields) {
		  	if (err) throw (err);
		  	res.setHeader('Content-Type', 'application/json');
		  	res.json(JSON.stringify(rows));
		});
		connection.end();
	},
	addItem : function(res, request_values) {
		connection.connect();
		var new_item = {name: request_values.name, picture: request_values.picture,	expiration_date: request_values.expiration_date, 
						fridge_id: request_values.fridge_id, user_id: request_values.user_id};
		connection.query('INSERT INTO items SET ?', new_item, function (error, results, fields) {
		  	if (error) throw error;
		  	console.log(result.insertId);
		});
		connection.end();
	},
	setFridgeItemGone : function(fridge_id, item_id) {

	},
	deleteFridgeItem : function(fridge_id, item_id) {

	}
}