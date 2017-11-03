module.exports = function (sequelize, DataTypes){
    var education = sequelize.define('education', {
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

    user.associate = function(models) {
        user.hasMany(models.education, {
            onDelete: 'cascade'
        });
    };

    return education;
}