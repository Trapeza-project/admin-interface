'use strict';

export default function(sequelize, DataTypes) {
  return sequelize.define('Person', {
    _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    securityNumber: DataTypes.INTEGER.UNSIGNED,
    address: DataTypes.STRING,
    age: DataTypes.INTEGER,
    activity: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  });
}
