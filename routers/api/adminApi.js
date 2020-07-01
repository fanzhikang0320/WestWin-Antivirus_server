const express = require('express');
const router = express.Router();
const mail = require('../../utils/mail');
const msg = require('../response');
const token = require('../../utils/token');

let code = '';
let timestamp = 0;
let resetCode = '';
let resetTimestamp = 0;
const AdminService = require('../../service/admin_service');

/**
 * 添加普通管理员
 */
router.post('/addAdmin',(req,res) => {
    const account = req.body.account;
    const password = req.body.password;
    const name = req.body.name;
    const ip = req.ip;
    AdminService.selectAdmin(account)
        .then((result) => {
            if (result.account == account) {
                res.send(msg.resFail(200,'账号重复'))
            } else {
                AdminService.addAdmin(account,password,name,ip)
                    .then(() => {
                        res.send(msg.resDone('添加成功'))
                    })
                    .catch(() => {
                        res.send(msg.resFail())
                    })
            }
        }).catch(() => {
            res.send(msg.resFail())
        })
})
/**
 * 更改管理员信息
 */
router.post('/updateAdmin',(req,res) => {

})
/**
 * 删除管理员
 */
router.post('/deleteAdmin',(req,res) => {
    const account = req.body.account;
    AdminService.deleteAdmin(account)
        .then(result => {
            console.log(result)
            if (result != 0) {
                res.send(msg.resDone('删除成功'))
            } else {
                res.send(msg.resFail(undefined,'没有此账号'))
            }
        })
        .catch(err => {
            console.log(res.send(msg.resFail()))
        })
})

router.post('/updatePassword',(req,res) => {
    const account = req.body.account;
    const password = req.body.password;
    const code = req.body.code;
    let timeFlag = new Date().getTime() - resetTimestamp < 5 * 60 * 1000 ? true : false;
    if (code == resetCode && timeFlag) {
        AdminService.updatePassword(account,password)
            .then(result => {
                res.send(msg.resDone('重置成功'));
            })
            .catch(err => {
                res.send(msg.resFail());
            })
            
    } else {
        
        res.send(msg.resFail())
    }
    
})

router.post('/sendResetCode',(req,res) => {
    const account = req.body.account;
    resetCode = Math.floor(Math.random() * 100000 + 899999);
    let content = `您正在重置密码，验证码为${resetCode},如不是本人重置，请忽视此条信息！有效期5分钟`
    mail.mail(account,'Antivirus-重置密码',content,(err) => {
        if (err) {
            res.send(msg.resFail())
        } else {
            res.send(msg.resDone('验证码已发送'));
            resetTimestamp = new Date().getTime();
        }
    })

})

/**
 * 查询管理员信息
 */
router.post('/readAdmin',(req,res) => {
    const params = req.body;
    const account = params.account;
    const password = params.password;
    let timeFlag = new Date().getTime() - timestamp < 5 * 60 * 1000 ? true : false;
    if (code == params.code && timeFlag) {
        AdminService.selectAdmin(account)
            .then((result) => {
                if (result.password == password && result.account == account) {

                    token.publish(res,{account: result.account,issuper: result.issuper},3600 * 1000);

                    res.send(msg.resDone(200,undefined,'登录成功'));
                } else {
                    res.send(msg.resFail(200));
                }
            }).catch((err) => {
                res.send(msg.resFail())
            })
        
            
    } else {
        res.send(msg.resFail());
    }
    
})
/**
 * 发送邮箱验证码
 */
router.post('/sendCode',(req,res) => {
    const params = req.body;
    const email = params.account;
    code = Math.floor(Math.random() * 100000 + 899999);
    
    let content = `您正在登录Antivirus后台，您的验证码码为：${code}。如不是本人登录，请忽视此条信息!有效期5分钟`
    mail.mail(email,'Antivirus-登录验证码',content,(err) => {
        if (err) {
            res.send(msg.resFail())
        } else {
            res.send(msg.resDone('验证码已发送'));
            timestamp = new Date().getTime();
        }
    })

})
module.exports = router;

