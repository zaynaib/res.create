var db = require('../models');


module.exports = function(app) {
// Find All Users and return results in json format
    app.get('/api/user', function(req,res) {

        db.User.findAll({}).then(function(dbUser){
            res.json(dbUser);
          
        });   
    }); //end of basic get route


    app.get('/api/user/:id', function(req,res){
    // Find Users and return them in Json format 
        db.User.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbUser){
            res.json(dbUser);
        });
    });//end of getId function

    app.post('/api/user', function(req, res){
    // Creates a User with available data
        console.log(req.body);
        db.User.create(req.body).then(function(dbUser) {
            res.json(dbUser);
        });
    }); //end of post route


    app.delete('/api/user/:id', function(req,res){
    // Deletes User with and specified ID
        db.User.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbUser){
            res.json(dbUser);
        });
    }); //end of delete app routes


    // Update User Info 
    app.put('/api/user/:id', function(req, res){
        
        db.User.update(req.body,
        {
            where: {
                id: req.params.id
            }
    }).then(function(dbUser){
        res.json(dbUser);
    });
    
});


}//end of export