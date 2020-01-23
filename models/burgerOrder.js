module.exports = function(sequelize, DataTypes) {
    const Model = sequelize.define('burgerOrder', {
        text: DataTypes.STRING,
        complete: DataTypes.BOOLEAN
    });

    return Model

}