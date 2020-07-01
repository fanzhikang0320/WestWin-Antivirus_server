const express = require('express');
const router = express.Router();
const msg = require('../response');
const ArticlebannerService = require('../../service/articlebanner_service');
router.post('/addArticlebanner',(req,res) => {
    const title = req.body.title;
    const content = req.body.content;
    ArticlebannerService.addArticlebanner(title,content)
        .then(result => {
            res.send(msg.resDone('添加成功'));
        })
        .catch(err => {
            res.send(msg.resFail());
        })
})

router.post('/updateArticlebanner',(req,res) => {
    const id = req.body.id;
    const title = req.body.title;
    const content = req.body.content;
    ArticlebannerService.updateArticlebanner(id,title,content)
        .then(result => {
            res.send(msg.resDone('更新成功'))
        })
        .catch(err => {
            res.send(msg.resFail());
        })
})
router.get('/getArticlebanner',(req,res) => {
    ArticlebannerService.selectArticlebanner()
        .then(result => {
            res.send(msg.resDone(result))
        })
        .catch(err => {
            res.send(msg.resFail())
        })
})

router.post('/findOneArticlebanner',(req,res) => {
    const id = req.body.id
    ArticlebannerService.findOneArticlebanner(id)
        .then(result => {
            res.send(msg.resDone(result));
        })
        .catch(err => {
            res.send(msg.resFail())
        })
})
module.exports = router;