// Dependencies - Packages we are installing to make our App work
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var Sequelize = require('sequelize');

// Sets an initial Port. 
var PORT = process.env.PORT || 3000;


// Tells Node we are creating an express server
var app = express();

// Requiring our models for syncing
var db = require("./models");


<<<<<<< HEAD
// // Static directory
app.use(express.static("public"));
=======
// Static directory
app.use(express.static("public"));

>>>>>>> f7a9fb2624725aa4421d0e998bce3cde99349dd4

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


<<<<<<< HEAD
=======
require('./routing/html-routes.js')(app);
require('./routing/api-routes.js')(app);
>>>>>>> f7a9fb2624725aa4421d0e998bce3cde99349dd4

require('./routing/html-routes')(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
// db.sequelize.sync({ force: true }).then(function () {

// Setting app to Listen on the Specified Port
    app.listen(PORT, function(){
    console.log("Port " + PORT + " is open, Server is Up!!");
});
// });