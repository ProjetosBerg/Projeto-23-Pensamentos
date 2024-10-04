const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("railway", "root", "kqFRZiWUIwuoxnBkzINqPcaoquwdLREs", {
  host: "junction.proxy.rlwy.net",
  dialect: "mysql",
  port: 47581,
});

try {
  sequelize.authenticate();
  console.log("Conectamos com o Sequelize!");
} catch (error) {
  console.log(`Não foi possível conectar: ${error}`);
}

module.exports = sequelize;
