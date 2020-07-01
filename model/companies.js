const {DataTypes} = require('sequelize');
const sequelize = require('./db')

const Companies = sequelize.define('companies',{
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    order: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    companiesList: {
        type: DataTypes.TEXT,
        allowNull: false
    }
},{
    freezeTableName: true,
    paranoid: true,
    createdAt: 'ctime',
    updatedAt: 'utime',
    deletedAt: 'dtime',
    version: true
})

module.exports = Companies;