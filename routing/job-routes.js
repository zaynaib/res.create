var db = require('../models');

module.exports = function(app){

    app.get('/api/jobs/:id', function(req,res){
        db.Jobs.findAll({
            where:{
            resumeId: req.params.id
        }
    }).then(function(dbJobs){
            res.json(dbJobs);         
        });
    }); //end of Jobs get route
    
    app.post('/api/jobs', function(req,res){
        console.log(req.body);
        db.Jobs.create(req.body).then(function(dbJobs){
            res.json(dbJobs);
        });
    });//end of Jobs post routes
    
    app.delete('/api/jobs/:id', function(req,res){
        // Deletes User with and specified ID
            db.Jobs.destroy({
                where: {
                    id: req.params.id
                }
            }).then(function(dbJobs){
                res.json(dbJobs);
            });
        }); //end of delete app routes
    
        
       // Update User Info 
       app.put('/api/jobs/:id', function(req, res){
        
        db.Jobs.update(req.body,
        {
            where: {
                id: req.params.id
            }
    }).then(function(dbJobs){
        res.json(dbJobs);
    });
    
    });



}