var path = require('path');

module.exports = function(app){


    app.get('/signup', function(req,res){
        res.sendFile(path.join(__dirname, '/../public/signup.html'))
    })

    
    app.use(function(req,res){
        res.sendFile(path.join(__dirname, '/../public/index.html'))
    })


}