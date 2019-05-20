const Sequelize = require('sequelize');

const sequelize = require('../controllers/db.js');

/**
 * The Customer Address model
 * 
 * This model holds billing and shipping information for the customer.
 * The customerId row references the customer table defined elsewhere.
 */

const CustomerAddress = sequelize.define('customerAddress', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    customerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'customer',
            key: 'id',
        }
    },
    firstName:{type: Sequelize.STRING,},
    lastName:{type: Sequelize.STRING,},
    companyName:{type: Sequelize.STRING,},
    address1:{type: Sequelize.STRING,},
    address2:{type: Sequelize.STRING,},
    city:{type: Sequelize.STRING,},
    state:{type: Sequelize.STRING,},
    zip:{type: Sequelize.STRING,},
    country:{type: Sequelize.STRING,},
    stateCode:{type: Sequelize.STRING,},
    countryCode:{type: Sequelize.STRING,},
    default:{type: Sequelize.STRING,}
} );

module.exports = CustomerAddress;