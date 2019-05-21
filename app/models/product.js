const Sequelize = require('sequelize');

const sequelize = require('../controllers/db.js');

/**
 * The Product model
 * 
 * This model holds basic product information.
 */

const Product = sequelize.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    slug: {
        type: Sequelize.STRING,
        unique: true,
    },
    description: {
        type: Sequelize.TEXT,
    },
    type: {
        type: Sequelize.ENUM('physical', 'digital', 'service'),
        allowNull: false,
    },
} );

module.exports = Product;