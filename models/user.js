module.exports = function(sequelize, DataTypes){
    var User = sequelize.define('User', {
        // Giving the User model its datatypes
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:  {min: -90, max: 90},
            defaultValue:true
        },
        Street: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        City: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        State: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        Zip_Code: {
            type: DataTypes.BIGINT,
            allowNull: false
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
        }, 
    {timestamps: true}
    )

    User.associate = function(models) {
        User.hasMany(models.Resume, {
            onDelete: 'cascade'
        });
    }; 

    return User;
};