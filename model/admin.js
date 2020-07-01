const {DataTypes} = require('sequelize');

const sequelize = require('./db');

const Admin = sequelize.define('admin',{
    account: {
        type: DataTypes.STRING(128),
        allowNull: false,
        unique: 'column'
    },
    password: {
        type: DataTypes.STRING(128),
        allowNull: false
    },
    issuper: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    nickname: {
        type: DataTypes.STRING(128),
        allowNull: false
    },
    headImg: {
        type: DataTypes.STRING(128),
        allowNull: false
    },
    ip: {
        type: DataTypes.STRING(128),
        allowNull: false
    }
},{
    freezeTableName: true,
    paranoid: true,
    timestamps: true,
    createdAt: 'ctime',
    updatedAt: 'utime',
    deletedAt: 'dtime',
    version: true
})

module.exports = Admin;