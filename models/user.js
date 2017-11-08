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
            isEmail: true
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