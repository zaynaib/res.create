module.exports = function (sequelize, DataTypes){

    var Resume = sequelize.define('Resume', {
        resume_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    Resume.associate = function(models) {
        Resume.hasMany(models.User, {
            onDelete: 'cascade'
        });

}, ({timestamps: false}) 

    return Resume;
}