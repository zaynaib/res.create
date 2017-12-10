
var path = require('path');
var models = require('../models');

var exports = module.exports = {}


exports.signup = function(req,res){

  res.sendFile(path.join(__dirname, '/../public/signup.html')); 


}

exports.signin = function(req,res){

	res.sendFile(path.join(__dirname, '/../public/signin.html')); 
}

exports.dashboard = function(req,res){
// Printts out the sessions object
    console.log(req.session);
    
    // Prints out the session ID
	console.log(req.session.passport.user);
	console.log("Session Id of user " + req.sessionID);

	res.sendFile(path.join(__dirname, '/../public/resume.html')); 

}

//prints out the user info from the session id
exports.sessionUserId = function(req,res){
    //body of the session
    var sessionUser = req.session;
    //res.send(sessionUserId);

    //console.log the id of the user
    console.log(sessionUser.passport.user, " ======user id number=====");


   models.User.findAll({
            where: {
                id: sessionUser.passport.user
            }
        }).then(function(dbUser){
            res.json(dbUser);
        });
}

exports.logout = function(req,res){

  req.session.destroy(function(err) {
  res.redirect('/');
  });

}