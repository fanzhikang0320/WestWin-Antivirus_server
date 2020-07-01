const {DataTypes} = require('sequelize');
const sequelize = require('./db');
const Homebanner = sequelize.define('homebanner',{
    title: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    picture: {
        type: DataTypes.STRING,
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

module.exports = Homebanner;