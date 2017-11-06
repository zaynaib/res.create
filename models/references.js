module.exports = function (sequelize, DataTypes){
    var References = sequelize.define('References', {
        Ref_Name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Ref_Position: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Ref_Ph_Num: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Ref_Email: {
            type: DataTypes.STRING,
            isEmail: true,
            allowNull: false
        },
        Ref_Relationship: {
            type: DataTypes.STRING,
            allowNull: false
<<<<<<< HEAD
        }}
    )
        References.associate = function(models) {
            References.hasMany(models.Resume, {
                onDelete: 'cascade'
            });

    }, ({timestamps: false}) 

=======
        }

    })
    
    References.associate = function(models) {
        References.hasMany(models.Resume, {
            onDelete: 'cascade'
        });
    };
    
>>>>>>> 7e5b7763937c74698b1c06b0c7d8e81d8f6dded7
    return References;
}