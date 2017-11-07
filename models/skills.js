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
    }, ({timestamps: false}))
    
    Skills.associate = function(models) {
        Skills.belongsTo(models.Resume, {
            onDelete: 'cascade'
        } 
    )
    };
    
    return Skills;
}