var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var	assert = require('assert');


// MONGO STUFF
// Connection Url
var url = 'mongodb://localhost:27017/foody';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
	assert.equal(null, err);
	console.log("Connected successfully to server");
	db.close();
});


app.set('port', (process.env.PORT || 5000));

// TODO: there's a prettier way to do this, figure it out.
// If there is a dist, use it
// fs.access(path.join(__dirname,'dist'),'r', function(err) {
// 	var serve = !err ? 'dist':'public';
// 	app.use(express.static(path.join(__dirname, serve)));
// 	app.get('/', function(req, res) {
// 		res.sendfile('./' + serve + '/index.html');
// 	});
// });

app.use(express.static(path.join(__dirname, 'public')));


// ROUTES
app.get('/', function(req, res) {
	res.sendfile('./index.html');
});

app.get('/about', function(req,res) {
	res.sendfile('./public/pages/test.html');
});

app.use('/', router);

app.listen(app.get('port'), function() {
	console.log('server is running on http://localhost:' + app.get('port'));
});