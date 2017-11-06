var db = require('../models');

module.exports = function(app) {
// Find All Users and return results in json format
    app.get('/api/user', function(req,res) {

        db.User.findAll({}).then(function(dbUser){
            res.json(dbUser);
          
        });
    
    }); //end of basic get route



<<<<<<< HEAD
    app.get('/api/education', function(req,res){
        db.Education.findAll({}).then(function(dbEducation){
            res.json(dbEducation);
        });
});
=======
>>>>>>> 7e5b7763937c74698b1c06b0c7d8e81d8f6dded7


    app.get('/api/user/:id', function(req,res){
    // Find Users and return them in Json format 
        db.User.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbUser){
            res.json(dbUser);
        });
    });//end of get function

    app.post('/api/user', function(req, res){
    // Creates a User with available data
        console.log(req.body);
        db.User.create(req.body).then(function(dbUser) {
            res.json(dbUser);
        });
    }); //end of post route

    app.delete('/api/User/:id', function(req,res){
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