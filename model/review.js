const {DataTypes} = require('sequelize');

const sequelize  = require('./db');
const Review = sequelize.define('review',{
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    isHidden: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    authorId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    overview: {
        type: DataTypes.TEXT('LONG')
    },
    prosTop: {
        type: DataTypes.TEXT('LONG')
    },
    prosBottom: {
        type: DataTypes.TEXT('LONG')
    },
    pros: {
        type: DataTypes.TEXT('LONG')
    },
    cons: {
        type: DataTypes.TEXT('LONG')
    },
    security: {
        type: DataTypes.TEXT('LONG')
    },
    plat: {
        type: DataTypes.TEXT('LONG')
    },
    userExperience: { 
        type: DataTypes.TEXT('LONG')
    },
    support: {
        type: DataTypes.TEXT('LONG')
    },
    pricing: {
        type: DataTypes.TEXT('LONG')
    },
    conclusion: {
        type: DataTypes.TEXT('LONG')
    }
},{
    freezeTableName: true,
    paranoid: true,
    createdAt: 'ctime',
    updatedAt: 'utime',
    deletedAt: 'dtime',
    version: true
})

module.exports = Review