// Dependencies - Packages we are installing to make our App work
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var Sequelize = require('sequelize');
var passport   = require('passport')
var session    = require('express-session')
var env        = require('dotenv').load()
// var exphbs     = require('express-handlebars')

// Sets an initial Port. 
var PORT = process.env.PORT || 3000;


// Tells Node we are creating an express server
var app = express();

// Requiring our models for syncing
var db = require("./models");

// // Static directory
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// For Passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// //For Handlebars
// app.set('views', './views')
// app.engine('hbs', exphbs({extname: '.hbs'}));
// app.set('view engine', '.hbs');

//Routes
var authRoute = require('./routing/auth.js')(app,passport);

//load passport strategies
require('./config/passport/passport.js')(passport,db.User);

require('./routing/html-routes.js')(app);
require('./routing/user-api-routes.js')(app);
require('./routing/resume-routes.js')(app);
require('./routing/edu-routes.js')(app);
require('./routing/job-routes.js')(app);
require('./routing/skills-routes.js')(app);




// Syncing our sequelize models and then starting our Express app
// =============================================================


 //Sync Database
db.sequelize.sync({force:false}).then(function(){
    console.log('Nice! Database looks fine')

}).catch(function(err){
    console.log(err,"Something went wrong with the Database Update!")

});


//launch server
app.listen(PORT, function(err){
    if(!err)
        console.log("Site is live"); else console.log(err)
});