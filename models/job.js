module.exports = function(sequelize, DataTypes){
        var Jobs = sequelize.define('Jobs', {
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
            Position: {
                type: DataTypes.STRING,
                allowNull: false
            },
            Company_Name: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, ({timestamps: false}) );

        Jobs.associate = function(models) {
            Jobs.hasMany(models.Resume, {
                foreignKey: {
                    allowNull: false,
                    onDelete: 'cascade'
                }
            });
        };

        return Jobs;
}