var db = require('../models');

module.exports = function(app){

    app.get('/api/education/:id', function(req,res){
        db.Education.findAll({
            where:{
                resumeId: req.params.id
            }
        }).then(function(dbEducation){
            res.json(dbEducation);         
        });
    }); //end of education get route

    app.post('/api/education', function(req,res){
        console.log(req.body);
        db.Education.create(req.body).then(function(dbEducation){
            res.json(dbEducation);
        });
    });//end of education post routes

    app.delete('/api/education/:id', function(req,res){
        // Deletes User with and specified ID
            db.Education.destroy({
                where: {
                    ResumeId: req.params.id
                }
            }).then(function(dbEducation){
                res.json(dbEducation);
            });
        }); //end of delete app routes

        
    // Update User Info 
    app.put('/api/education/:id', function(req, res){
        
        db.Education.update(req.body,
        {
            where: {
                ResumeId: req.params.id
            }
        }).then(function(dbEducation){
            res.json(dbEducation);
        });

    });

}