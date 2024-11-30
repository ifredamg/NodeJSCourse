const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', '', {
    port: null, dialect: 'mysql', host: 'localhost'
});

module.exports = sequelize;