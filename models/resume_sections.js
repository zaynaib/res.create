module.exports = function(sequelize, DataTypes){
        var resumeSections = sequelize.define('form', {
            Job_Title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Start_Date: {
                type: DataTypes.DATE,
                allowNull: false
            },
            End_Date: {
                type: DataTypes.DATE,
                allowNull: true
            },
            Positions: {
                type: DataTypes.STRING,
                allowNull: false
            },
            Company_Name: {
                type: DataTypes.STRING,
                allowNull: false
            }
        });

        resumeSections.associate = function(models) {
            resumeSections.hasMany(models.Resume, {
                onDelete: 'cascade'
            });
        };

        return resumeSections;
}