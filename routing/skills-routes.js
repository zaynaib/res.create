var db = require('../models');

module.exports = function(app){


app.get('/api/skills/:id', function(req,res){
    db.Skills.findAll({
            where:{
                resumeId: req.params.id
            }
        }).then(function(dbSkills){
        res.json(dbSkills);         
    });
}); //end of education get route

app.post('/api/skills', function(req,res){
    console.log(req.body);
    db.Skills.create(req.body).then(function(dbSkills){
        res.json(dbSkills);
    });
});//end of education post routes

app.delete('/api/skills/:id', function(req,res){
    // Deletes User with and specified ID
        db.Skills.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbSkills){
            res.json(dbSkills);
        });
    }); //end of delete app routes

    
   // Update User Info 
   app.put('/api/skills/:id', function(req, res){
    
    db.Skills.update(req.body,
    {
        where: {
            ResumeId: req.params.id
        }
}).then(function(dbSkills){
    res.json(dbSkills);
});

});

}