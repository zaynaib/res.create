var path = require('path');

module.exports = function(app){

    app.get('/resume', function(req,res){
        res.sendFile(path.join(__dirname, '/../public/resume.html'))
    })

    app.get('/bio', function(req,res){
        res.sendFile(path.join(__dirname, '/../public/bio.html'))
    })

    app.get('/education', function(req,res){
        res.sendFile(path.join(__dirname, '/../public/edu.html'))
    })
    
    app.get('/skills', function(req,res){
        res.sendFile(path.join(__dirname, '/../public/bio.html'))
    })
    
    app.get('/references', function(req,res){
        res.sendFile(path.join(__dirname, '/../public/ref.html'))
    })

    app.use(function(req,res){
        res.sendFile(path.join(__dirname, '/../public/index.html'))
    })


}