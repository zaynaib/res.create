module.exports = function (sequelize, DataTypes){

    var Education = sequelize.define('education', {
        School_Name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Degree: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Graduation_Date: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    Education.associate = function(models) {
        Education.hasMany(models.Resume, {
            onDelete: 'cascade'
        });
    };

    return Education;
}