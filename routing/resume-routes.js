var db = require("../models");

module.exports = function(app) {

    app.get('/api/resume/:id', function(req, res){
        db.Resume.findAll({
            where: {
                id: req.params.id
            },
        }).then(function(dbResume){
            res.json(dbResume);
        });
    });

    app.post('/api/resume/:id', function(req, res){
        db.Resume.create({
            resume_name: 'TBD',
            UserId: req.params.id
        }).then(function(dbResume){
            res.json(dbResume);
        });
    });

}