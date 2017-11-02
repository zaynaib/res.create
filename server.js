// Dependencies - Packages we are installing to make our App work
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var Sequelize = require('sequelize');

// Sets an initial Port. 
var PORT = process.env.PORT || 3000;


// Tells Node we are creating an express server
var app = express();


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


require('./routing/html-routes')(app);


// Setting app to Listen on the Specified Port
app.listen(PORT, function(){
    console.log("Port " + PORT + " is open, Server is Up!!");
});