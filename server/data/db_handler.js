// Get dependencies
const express = require('express');
var nano = require('nano')('http://localhost:5984');

var sharemiam_db = nano.use("cuicui");

//Check if the database exists
if(!sharemiam_db){
	//Create the database
	nano.db.create("cuicui", function(){
		sharemiam_db = nano.use("cuicui");
	})
}

var add = function(){
	sharemiam_db.insert({ crazy: true }, 'rabbit', function(err, body) {
	  if (!err)
	    console.log(body);
	});
}



//var get_all_data = function ()
//check that db is connected
/*if(sharemiam_db){
	sharemiam_db.insert({title: "pomme"}, function(err, body){
		if (err) {
	        console.log('[alice.insert] ', err.message);
	        return;
	    }
	      console.log('you have inserted the pomme.')
	      console.log(body);
	})
}*/