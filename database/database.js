const Sequelize = require('sequelize');

const sequelize = new Sequelize('at_pw2', 'root','', {
  host: 'localhost',
  port: '3307',
  dialect: 'mysql',
  timezone: "-03:00"
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao banco de dados:', err);
  });


module.exports = sequelize;
