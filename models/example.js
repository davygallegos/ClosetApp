module.exports = function(sequelize, DataTypes) {
  var Shirt = sequelize.define("Shirt", {
    size: DataTypes.STRING,
    color: DataTypes.STRING,
    type: DataTypes.STRING,
    price: DataTypes.DECIMAL(2),
    condition: DataTypes.STRING,
    suitedFor: DataTypes.STRING,
    userFile: DataTypes.STRING
  });
  return Shirt;
};
