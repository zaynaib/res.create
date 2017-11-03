module.exports = function(sequelize, DataTypes) {
    var Skills = sequelize.define('Skills', {
        skills:  {
            type: DataTypes.TEXT,
            allowNull: false
        }, 
        Languages: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    user.associate = function(models) {
        user.hasMany(models.Skills, {
            onDelete: 'cascade'
        });
    };
}