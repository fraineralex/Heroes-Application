/* const Sequelize = require("sequelize");

const sequelize = new Sequelize("heroesapp", "root", "1234", {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
});

module.exports = sequelize; */

const Sequelize = require("sequelize");
const path = require("path");

const sequelize = new Sequelize("sqlite::memory:", {
  dialect: "sqlite",
  storage: path.join(
    path.dirname(require.main.filename),
    "",
    "heroes_app.sqlite"
  ),
});

module.exports = sequelize;
