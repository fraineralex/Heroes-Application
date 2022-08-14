const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Heroes = sequelize.define("heroe", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  imagePath: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = Heroes;
