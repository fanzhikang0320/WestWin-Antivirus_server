const log4 = require('log4js');
const path = require('path');
log4.configure({
    appenders: {
        sql: {
            type: 'dateFile',
            filename: path.resolve(__dirname,'../log/sql','sql.log'),
            maxLogSize: 1024 * 1024, //单位kb
            keepFileExt: true,
            daysToKeep: 3,
            layout: {
                type: 'pattern',
                pattern:'[%c] [%d{yyyy-MM-dd hh:mm:ss}] [%p]: %m%n'
            }
        },
        request: {
            type: 'dateFile',
            filename: path.resolve(__dirname,'../log/request','request.log'),
            daysToKeep: 3,
            keepFileExt: true,
            maxLogSize: 1024 * 1024,
            layout: {
                type: 'pattern',
                pattern:'[%c] [%d{yyyy-MM-dd hh:mm:ss}] [%p]: %m%n'
            }
        },
        response: {
            type: 'dateFile',
            filename: path.resolve(__dirname,'../log/response','response.log'),
            maxLogSize: 1024 * 1024,
            daysToKeep: 3,
            keepFileExt: true,
            layout: {
                type: 'pattern',
                pattern:'[%c] [%d{yyyy-MM-dd hh:mm:ss}] [%p]: %m%n'
            }
        },
        default: { 
            type: 'dateFile',
            filename: path.resolve(__dirname,'../log/default','default.log'),
            maxLogSize: 1024 * 1024,
            daysToKeep: 3,
            keepFileExt: true,
            layout: {
                type: 'pattern',
                pattern:'[%c] [%d{yyyy-MM-dd hh:mm:ss}] [%p]: %m%n'
            }
        }
    },
    categories: {
        sql: {
            appenders: ['sql'], //该分类使用出口sql的配置
            level: 'all'
        },
        request: {
            appenders: ['request'],
            level: 'all'
        },
        response: {
            appenders: ['response'],
            level: 'all'
        },
        default: {
            appenders: ['default'],
            level: 'all'
        }
    }
});

process.on('exit',() => {
    log4.shutdown();
})

module.exports = {
    sqlLogger: log4.getLogger('sql'),
    responseLogger: log4.getLogger('response'),
    requestLogger: log4.getLogger('request')
}







