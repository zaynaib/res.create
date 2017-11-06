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
        }}
    )
        References.associate = function(models) {
            References.hasMany(models.Resume, {
                onDelete: 'cascade'
            });

    }, ({timestamps: false}) 

    return References;
}