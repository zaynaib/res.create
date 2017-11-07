module.exports = function(sequelize, DataTypes) {
    var Skills = sequelize.define('Skills', {
        Skills:  {
            type: DataTypes.TEXT,
            allowNull: true
        }, 
        Languages: {
            type: DataTypes.STRING,
            defaultValue: '',
            allowNull: true
        }
    }, ({timestamps: false}))
    
    Skills.associate = function(models) {
        Skills.belongsTo(models.Resume, {
            foreignKey: {
            allowNull: false,
            onDelete: 'cascade'
        } 
    }
    )
    };
    
    return Skills;
}