const Sequelize = require('sequelize');
const sequelize = new Sequelize('MarsRover', 'root', 'Luana123', {dialect: 'mariadb', host: 'localhost', port: 3306});
//nome, usuário, senha, opções(bd, local)
 
module.exports = sequelize;
