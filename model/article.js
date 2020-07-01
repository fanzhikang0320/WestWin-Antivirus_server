const {DataTypes} = require('sequelize');

const sequelize = require('./db');
const Article = sequelize.define('article',{
    title: {
        type: DataTypes.STRING(128),
        allowNull: false
    },
    desc: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT('LONG'),
        allowNull: false
    },
    picture: {
        type: DataTypes.STRING(128),
        allowNull: false
    },
    illustration: {
        type: DataTypes.STRING(128),
        allowNull: false
    },
    addTime: {
        type: DataTypes.DATE,
        allowNull: false
    },
    authorId: {
        type: DataTypes.INTEGER,
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



module.exports = Article;