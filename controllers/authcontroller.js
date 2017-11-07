var path = require('path');
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

exports.logout = function(req,res){

  req.session.destroy(function(err) {
  res.redirect('/');
  });

}