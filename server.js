// Dependencies - Packages we are installing to make our App work
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var Sequelize = require('sequelize');
var passport   = require('passport')
var session    = require('express-session')
var env        = require('dotenv').load()
var exphbs     = require('express-handlebars')

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

//For Handlebars
app.set('views', './views')
app.engine('hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

//Routes
var authRoute = require('./routing/auth.js')(app,passport);
require('./routing/html-routes.js')(app);
require('./routing/api-routes.js')(app);
require('./routing/resume-routes.js')(app);

//load passport strategies
require('./config/passport/passport.js')(passport,db.User);


// Syncing our sequelize models and then starting our Express app
// =============================================================

 //Sync Database
db.sequelize.sync({force:true}).then(function(){
    console.log('Nice! Database looks fine')

}).catch(function(err){
    console.log(err,"Something went wrong with the Database Update!")
});


//launch server
app.listen(3000, function(err){
    if(!err)
        console.log("Site is live"); else console.log(err)

});
/*
db.sequelize.sync({force: true}).then(function () {
// Setting app to Listen on the Specified Port
    app.listen(PORT, function(){
    console.log("Port " + PORT + " is open, Server is Up!!");

    var userReceived = db.User.create({
        Name: 'jd',
        Email: 'jdtadlock@ yahoo.com',
        Address:'123 Fake Street',
        Phone:'773000000',
        Website:'fakewebiste.com'
    }).then((user) => {
        var resume = db.Resume.create({
            resume_name: 'Main',
            UserId: user.get('id')
        });

        return resume;
    }).then((user) => {
        db.User.findOne({
            where: {
                id: 1
            },
            include: db.Resume
        }).then(users => {
            console.log(users.Resumes);
        })
    })
})
});


*/