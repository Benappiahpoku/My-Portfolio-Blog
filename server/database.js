const Sequelize = require("sequelize");

const sequelize = new Sequelize("blogapp", "benji", "javascript", {
  host: "localhost",
  port: 8889,
  dialect: "mysql",
});

module.exports = sequelize;
