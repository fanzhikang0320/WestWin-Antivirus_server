const express = require('express');
const router = express.Router();
const msg = require('../response');
const mailUtil = require('../../utils/mail');
router.post('/sendMail',(req,res) => {
    const name = req.body.name;
    const email = req.body.email;
    const content = req.body.content;
    const receiveEmail = process.env.MAIL_USER;
    const title = `一封来自${name}的留言：`
    const resultMsg = `${content} --email: ${email}`;
    mailUtil.mail(receiveEmail,title,resultMsg,(err) => {
        if (err) {
            res.send(msg.resFail())
        } else {
            res.send(msg.resDone('评论成功'));
        }
    });
})

module.exports = router;