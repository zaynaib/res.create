module.exports = function(sequelize, DataTypes){
    var User = sequelize.define('User', {
        // Giving the User model its datatypes
        Name: {
            type: DataTypes.STRING,
            allowNull: true,
            validate:  {min: -90, max: 90},
            defaultValue:""
        },
        Street: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue:""
        },
        City: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue:""
        },
        State: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue:""
        },
        Zip_Code: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue:""
        },
        Phone: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue:""
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: true,
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