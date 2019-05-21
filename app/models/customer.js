const Sequelize = require('sequelize');

const sequelize = require('../controllers/db.js');

/**
 * The Customer model
 * 
 * This model holds basic customer information. Login is based on email address.
 * Addresses are held in a CustomerAddress model defined elsewhere
 */

const Customer = sequelize.define('customer', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    email : {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: Sequelize.STRING(60),
        allowNull: false,
    },
    passwordResetToken: Sequelize.STRING,
    passwordResetDate: Sequelize.DATE,
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    currency: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    homePhone: {
        type: Sequelize.STRING,
    },
    mobilePhone: {
        type: Sequelize.STRING,
    },
    workPhone: {
        type: Sequelize.STRING,
    }
} );

module.exports = Customer;