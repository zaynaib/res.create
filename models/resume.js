module.exports = function (sequelize, DataTypes){

    var Resume = sequelize.define('Resume', {
        resume_name: {
            type: DataTypes.STRING,
            //allowNull: false
        }
<<<<<<< HEAD
    })
    Resume.associate = function(models) {
        Resume.hasMany(models.User, {
            onDelete: 'cascade'
        });

}, ({timestamps: false}) 

    return Resume;
=======
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

>>>>>>> 7e5b7763937c74698b1c06b0c7d8e81d8f6dded7
}