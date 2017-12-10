module.exports = function(sequelize, DataTypes){

        var Jobs = sequelize.define('Jobs', {

            Job_Title: {
                type: DataTypes.STRING,
                defaultValue: '',
                allowNull: false
            },
            Start_Date: {
                type: DataTypes.STRING,
                defaultValue: '',
                allowNull: true
            },
            End_Date: {
                type: DataTypes.STRING,
                defaultValue: '',
                allowNull: true
            },
            Position: {
                type: DataTypes.STRING,
                defaultValue: '',
                allowNull: true
            },
            Company_Name: {
                type: DataTypes.STRING,
                defaultValue: '',
                allowNull: true
            }
        }, ({timestamps: false}) );


        Jobs.associate = function(models) {
            Jobs.belongsTo(models.Resume, {
                    onDelete: 'cascade'
            });
        };

        return Jobs;
}