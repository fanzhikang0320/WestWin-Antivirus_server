const {DataTypes}  = require('sequelize');
const sequelize = require('./db');

const Question = sequelize.define('question',{
    title: {
        type: DataTypes.STRING(128),
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

module.exports = Question;
