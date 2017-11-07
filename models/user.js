module.exports = function(sequelize, DataTypes){
    var User = sequelize.define('User', {
        // Giving the User model its datatypes
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:  {min: -90, max: 90},
            defaultValue:""
        },
        Street: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue:""
        },
        City: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue:""
        },
        State: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue:""
        },
        Zip_Code: {
            type: DataTypes.BIGINT,
            allowNull: false,
            defaultValue:00000
        },
        Phone: {
            type: DataTypes.BIGINT,
            allowNull: false,
            is: [/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/],
            defaultValue:000-000-0000
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false,
            isEmail: true,
            defaultValue:""
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