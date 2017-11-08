module.exports = function(sequelize, DataTypes){
    var User = sequelize.define('User', {
        // Giving the User model its datatypes
        id: { 
            autoIncrement: true,
             primaryKey: true, 
             type: DataTypes.INTEGER
         },
        firstname: { 
            type: DataTypes.STRING,
            notEmpty: true
        },
        lastname: { 
            type: DataTypes.STRING,
            notEmpty: true
        },
        password : {
            type: DataTypes.STRING,
            allowNull: false 
        },
        Name: {
            type: DataTypes.STRING,

            allowNull: true,
            defaultValue:''
        }, 
        Street: {
            type: DataTypes.STRING,

            allowNull: true,
            defaultValue:''
        },
        City: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue:''
        },
        State: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue:''
        },
        Zip_Code: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue:''
        },
        Phone: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue:''
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue:''
        },
        Website: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue:''
        }},({timestamps: true}) 
    )

    User.associate = function(models) {
        User.hasMany(models.Resume, {
            onDelete: 'cascade'
        });
    }; 

    return User;
};