const sequelize = require('./db');
const {DataTypes} = require('sequelize');
const Author = sequelize.define('author',{
    name: {
        type: DataTypes.STRING(128),
        allowNull: false
    },
    position: {
        type: DataTypes.TEXT
    },
    headImg: {
        type: DataTypes.TEXT
    },
    desc: {
        type: DataTypes.TEXT
    }
},{
    freezeTableName: true,
    paranoid: true,
    createdAt: 'ctime',
    updatedAt: 'utime',
    deletedAt: 'dtime',
    version: true
})

module.exports = Author;