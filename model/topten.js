const {DataTypes} = require('sequelize');
const sequelize = require('./db');

const Topten = sequelize.define('topten',{
    link: {
        type: DataTypes.STRING(128),
        allowNull: false
    },
    picture: {
        type: DataTypes.STRING(128),
        allowNull: false
    },
    rate: {
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

module.exports = Topten;