var path = require('path');

module.exports = function(app){

    app.get('/', function(req,res){
        res.sendFile(path.join(__dirname, '/../public/index.html'))
    })

    app.get('/generate', function(req,res){
        res.sendFile(path.join(__dirname, '/../public/output.html'))
    })

     app.get('/signin', function(req,res){
        res.sendFile(path.join(__dirname, '/../public/signin.html'))
    })

    app.get('/template/:id', function(req,res){
        res.sendFile(path.join(__dirname, '/../public/templates/template'+req.params.id+'.html'))
    })

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

    app.get(function(req,res){
        res.sendFile(path.join(__dirname, '/../public/index.html'))
    })


}