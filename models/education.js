module.exports = function (sequelize, DataTypes){

    var Education = sequelize.define('Education', {
        School_Name: {
            type: DataTypes.STRING,
            defaultValue: '',
            allowNull: true
        },
        Degree: {
            type: DataTypes.STRING,
            defaultValue: '',
            allowNull: true
        },
        Graduation_Date: {
            type: DataTypes.STRING,
            defaultValue: '',
            allowNull: true
        }
    }, ({timestamps: false}) )

    Education.associate = function(models) {
        Education.belongsTo(models.Resume, {

            foreignKey: {
                allowNull: false,
                onDelete: 'cascade'
            }

        });
    }

    return Education;
}

// comment at the bottom