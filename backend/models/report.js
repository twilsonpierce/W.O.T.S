'use strict';
module.exports = (sequelize, DataTypes) => {
  var Report = sequelize.define('Report', {
    type: DataTypes.STRING,
    date: DataTypes.DATE,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    county: DataTypes.STRING,
    number_of_suspects: DataTypes.INTEGER
  }, {});
  Report.associate = function(models) {
   Report.belongsTo(models.User)
  };
  return Report;
};