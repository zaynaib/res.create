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
    
    Skills.associate = function(models) {
        Skills.hasMany(models.Resume, {
            onDelete: 'cascade'
        }, ({timestamps: false}) 
    )
    };
    
    return Skills;
}