var db = require("../models");

module.exports = function(app) {

    app.get('/api/resume/:id', function(req, res){
        db.Resume.findAll({
            where: {
                id: req.params.id
            },
            include: 
                [ { model: db.Education } ]
        }).then(function(dbResume){
            res.json(dbResume);
        });
    });

}

