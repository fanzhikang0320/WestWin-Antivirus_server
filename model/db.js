const {Sequelize} = require('sequelize');
const { sqlLogger } = require('../utils/logger');
const databaseName = process.env.DATABASE_NAME,
    user = process.env.DATABASE_USER,
    password = process.env.DATABASE_PASSWORD,
    host = process.env.DATABASE_HOST,
    dialect = process.env.DATABASE_DIALECT;

const sequelize = new Sequelize(databaseName,user,password,{
    host: host,
    dialect: dialect,
    logging: msg => {
        sqlLogger.info(msg)
    }
});

/**
 * 测试链接是否成功
 */
// (async function () {
//     try {
//         await sequelize.authenticate();
//         console.log('success');
//     } catch (err) {
//         console.log(err);
//     }
// })()

module.exports = sequelize;


