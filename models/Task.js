const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../config/connection");

class Task extends Model {}

Task.init(
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    details: {
      type: DataTypes.TEXT,
    },
    complete: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    // Other model options go here
    sequelize,
    modelName: "Task",
    freezeTableName: true,
  }
);

module.exports = Task;
