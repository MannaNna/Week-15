// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
app.get('/api/all', function(req, res) {
  var dbQuery = 'SELECT * FROM chirps';
  connection.query(dbQuery, function(err, result) {
    res.json(result);
  });
});

  // Add a chirp
  app.post('/api/new', function(req, res) {
    console.log('Chirp Data:');
    console.log('req.body');

    var dbQuery = "INSERT INTO chirps (author, body, created_at) VALUES ( ?, ?, ?)"; //wild parts
    connection.query(dbQuery, [req.body.authory, req.body.body, req.body.created_at], function(err, result) {
      console.log('Chirps Successfully Saved!');
      res.end(); //return from callback
    });
  });

};
