const Sequelize = require('sequelize');

const sequelize = require('../controllers/db.js');

/**
 * The ProductVariant model
 * 
 * This model holds specific Product information.
 */

const ProductVariant = sequelize.define('productVariant', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    price:{
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    dateAvailable: {
        type: sequelize.DATE,
        allowNull: false,
    },
    stock: {
        // -1 is infinite
        type: Sequelize.INTEGER,
        allowNull: false
    },
    variantDescription: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    weight: Sequelize.FLOAT,
    weightUnit: {
        type: Sequelize.ENUM('oz', 'g', 'lb', 'kg'),
    },
    width: Sequelize.FLOAT,
    length: Sequelize.FLOAT,
    height: Sequelize.FLOAT,
    sku:{
        type: Sequelize.STRING,
        unique: true,
    },


});

module.exports = ProductVariant;