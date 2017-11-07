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

// // Static directory
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require('./routing/html-routes.js')(app);
require('./routing/user-api-routes.js')(app);
require('./routing/resume-routes.js')(app);
require('./routing/edu-routes.js')(app);
require('./routing/job-routes.js')(app);
require('./routing/skills-routes.js')(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================

db.sequelize.sync({force: true}).then(function () {
// Setting app to Listen on the Specified Port
    app.listen(PORT, function(){
    console.log("Port " + PORT + " is open, Server is Up!!");

//     var userReceived = db.User.create({
//         Name: 'jd',
//         Email: 'jdtadlock@ yahoo.com',
//         Address:'123 Fake Street',
//         Phone:'773000000',
//         Website:'fakewebsite.com'
//     }).then((user) => {
//         var resume = db.Resume.create({
//             resume_name: 'Main',
//             UserId: user.get('id')
//         });

//         return resume;
//     }).then((user) => {
//         db.User.findOne({
//             where: {
//                 id: 1
//             },
//             include: db.Resume
//         }).then(users => {
//             //console.log(users.Resumes);
//         })
//     })
})
});


