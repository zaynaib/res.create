var db = require("../models");

module.exports = function(app) {

    app.get('api/user', function(req, res){
        db.Resume.findAll({
            include: [db.Education]
        }).then(function(dbResume){
            res.json(dbResume);
        });
    });

}