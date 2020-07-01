const {DataTypes} = require('sequelize');
const sequelize = require('./db');
const Product = sequelize.define('product',{
    name: {
        type: DataTypes.STRING(128),
        allowNull: false
    },
    picture: {
        type: DataTypes.STRING(128),
        allowNull: false
    },
    logo: {
        type: DataTypes.STRING(128),
        allowNull: false
    },
    price: {
        type: DataTypes.STRING(128),
        allowNull: false
    },
    rate: {
        type: DataTypes.STRING(128),
        allowNull: false
    },
    link: {
        type: DataTypes.STRING(128),
        allowNull: false
    },
    downloadLink: {
        type: DataTypes.STRING(128),
        allowNull: false
    },
    contentList: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    desc: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    system: {
        type: DataTypes.STRING(128),
        allowNull: false
    },
    isHidden: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    overall_serial: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    windows_serial: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ios_serial: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    linux_serial: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    macos_serial: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    android_serial: {
        type: DataTypes.INTEGER,
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

module.exports = Product;