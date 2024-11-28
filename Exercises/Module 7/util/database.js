const mysql = require('mysql2');

const pool = mysql.createPool({
    host: '37.187.48.120',
    user: 'ifredapps',
    database: 'node-complete',
    password: '_xCODE/24_',
    port: 3306
});

module.exports = pool.promise();