'use strict';

export default function(sequelize, DataTypes) {

  return sequelize.define('Location', {
    _id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      defaultValue: 'Default Location'
    },
    address: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    city: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    zip: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    region: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    country: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    active: DataTypes.BOOLEAN
  });
}
