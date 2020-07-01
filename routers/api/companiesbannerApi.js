const express = require('express');
const router = express.Router();
const CompaniesbannerService = require('../../service/companiesbanner_service');
const msg = require('../response');

router.post('/addCompaniesbanner',(req,res) => {
    const title = req.body.title;
    const content = req.body.content;
    
    CompaniesbannerService.addCompaniesbanner(title,content)
        .then(result => {
            res.send(msg.resDone('添加成功'))
        })
        .catch(err => {
            res.send(msg.resFail())
        })
})
router.post('/deleteCompaniesbanner',(req,res) => {
    const id = req.body.id;
    CompaniesbannerService.deleteCompaniesbanner(id)
        .then(result => {
            res.send(msg.resDone('删除成功'))
        })
        .catch(err => {
            res.send(msg.resFail())
        })
})
router.post('/updateCompaniesbanner',(req,res) => {
    const id = req.body.id;
    const title = req.body.title;
    const content = req.body.content;
    CompaniesbannerService.updateCompaniesbanner(id,title,content)
        .then(result => {
            res.send(msg.resDone('更新成功'))
        })
        .catch(err => {
            res.send(msg.resFail());
        })
})
router.get('/selectCompaniesbanner',(req,res) => {
    CompaniesbannerService.selectCompaniesbanner()
        .then(result => {
            res.send(msg.resDone(result))
        })
        .catch(err => {
            res.send(msg.resFail())
        })
})
router.post('/findOneCompaniesbanner',(req,res) => {
    const id = req.body.id;
    CompaniesbannerService.findOneCompaniesbanner(id)
        .then(result => {
            res.send(msg.resDone(result))
        })
        .catch(err => {
            res.send(msg.resFail())
        })
})

module.exports = router;