const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'ifredapps', '_xCODE/24_', {
    port: 3306, dialect: 'mysql', host: '37.187.48.120'
});

module.exports = sequelize;