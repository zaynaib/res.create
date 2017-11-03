module.exports = function (sequelize, DataTypes){

    var Resume = sequelize.define('Resume', {
        resume_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Resume;
}