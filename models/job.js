module.exports = function(sequelize, DataTypes){
        var job = sequelize.define('form', {
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

        job.associate = function(models) {
            job.hasMany(models.Resume, {
                onDelete: 'cascade'
            });
        };

        return job;
}