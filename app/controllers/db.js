// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'db',
//     user: 'storeUser',
//     database: 'store',
//     password: 'storePassword',
// });

// module.exports = pool.promise();

const Sequelize = require('sequelize');

const sequelize = new Sequelize('store', 'storeUser', 'storePassword', {
    dialect: 'mysql',
    host: "db",
});

module.exports = sequelize;