module.exports = {
    mail
}
/**
 * 发送邮件
 * @param {string} to 收件方邮箱
 * @param {string} title 内容标题
 * @param {string} content 邮件内容
 * @param {Function} callback 回调函数（内置参数）
 * 
 */
function mail(to,title,content,callback) {
    const nodemailer = require('nodemailer');
    /**
     * 详细配置文件地址： node_modules/nodemailer/lib/well-known/services
     */
    let transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: process.env.MAIL_SECURE,
        auth: {
            user: process.env.MAIL_USER, //发送方邮箱
            pass: process.env.MAIL_PASSWORD //发送方邮箱的授权码
        }
    });
    
    let info = {
        from: process.env.MAIL_USER,//发送方邮箱
        to: to,
        subject: title,
        text: content
    }

    transporter.sendMail(info,(err,data) => {
        callback &&  callback(err,data);
    })
}
