module.exports = function (sequelize, DataTypes){

    var Education = sequelize.define('Education', {
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
    }, ({timestamps: false}) )

    Education.associate = function(models) {
        Education.belongsTo(models.Resume, {
            onDelete: 'cascade'
        });
    }

    return Education;
}