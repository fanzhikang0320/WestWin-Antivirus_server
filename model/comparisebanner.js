const {DataTypes} = require('sequelize');
const sequelize = require('./db');

const Comparisebanner = sequelize.define('comparisebanner',{
    title: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    content: {
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

module.exports = Comparisebanner;