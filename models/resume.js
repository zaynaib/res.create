module.exports = function (sequelize, DataTypes){

    var Resume = sequelize.define('Resume', {
        resume_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Resume.associate = function(models) {

    Resume.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
        onDelete: 'cascade'
      }
    })

    Resume.hasMany(models.Education, {
      foreignKey: {
        allowNull: false,
        onDelete: 'cascade'
      }
    })

    Resume.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
        onDelete: 'cascade'
      }
    })

  };
  return Resume;

}