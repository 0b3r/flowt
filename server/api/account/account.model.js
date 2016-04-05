'use strict';

export default function(sequelize, DataTypes) {
  return sequelize.define('Account', {
    _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    creditCardType: DataTypes.STRING,
    creditCardNum: DataTypes.INTEGER,
    creditCardExpiry: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  });
}
