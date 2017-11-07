module.exports = function(sequelize, DataTypes){
    var User = sequelize.define('User', {
        // Giving the User model its datatypes
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:  {min: -90, max: 90},
            defaultValue:true
        },
        password : {
            type: DataTypes.STRING,
            allowNull: false 
        }, 
        Street: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue:true
        },
        City: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue:true
        },
        State: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue:true
        },
        Zip_Code: {
            type: DataTypes.BIGINT,
            allowNull: false,
            defaultValue:true
        },
        Phone: {
            type: DataTypes.BIGINT,
            allowNull: false,
            is: [/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/],
            defaultValue:true
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false,
            isEmail: true,
            defaultValue:true
        },
        Website: {
            type: DataTypes.STRING
        }},({timestamps: true}) 
    )

    User.associate = function(models) {
        User.hasMany(models.Resume, {
            onDelete: 'cascade'
        });
    }; 

    return User;
};