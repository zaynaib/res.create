module.exports = function (sequelize, DataTypes){

    var Resume = sequelize.define('Resume', {
        resume_name: {
            type: DataTypes.STRING,
            //allowNull: false
        }
    });
    

    Resume.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Resume.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
        onDelete: 'cascade'
      }
    })
  };
  return Resume;
}