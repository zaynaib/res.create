module.exports = function(sequelize, DataTypes) {
    var Skills = sequelize.define('Skills', {
        Skills:  {
            type: DataTypes.TEXT,
            allowNull: false
        }, 
        Languages: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, ({timestamps: false}))
    
    Skills.associate = function(models) {
        Skills.hasMany(models.Resume, {
            foreignKey: {
            allowNull: false,
            onDelete: 'cascade'
        } 
    }
    )
    };
    
    return Skills;
}