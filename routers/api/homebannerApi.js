const express = require('express');
const path = require('path');
const router = express.Router();
const HomebannerService = require('../../service/homebanner_service');
const msg = require('../response');
const multer = require('multer')({dest: path.resolve(__dirname,'../../public/img/homebanner')});

router.post('/addHomebanner',multer.single('bannerImg'),(req,res) => {
    const title = req.body.title;
    const content = req.body.content;
    const picture = '/public/img/homebanner/' + req.file.filename;
    const id = req.body.id;
    if (id != 0) {
        HomebannerService.updateHomebanner(id,title,picture,content)
            .then(result => {   
                res.send(msg.resDone('更新成功'));
            })
            .catch(err => {
                res.send(msg.resFail());
            })
    } else {
        HomebannerService.addHomebanner(title,content,picture)
            .then(result => {
                res.send(msg.resDone('添加成功'));
            })
            .catch(err => {
                res.send(msg.resFail());
            })
    }
    
})

router.post('/deleteHomebanner',(req,res) => {
    const id = req.body.id;
    HomebannerService.deleteHomebanner(id)
        .then(result => {
            res.send(msg.resDone('删除成功'));
        })
        .catch(err => {
            res.send(msg.resFail());
        })
})

router.post('/updateHomebanner',(req,res) => {
    const id = req.body.id;
    const title = req.body.title;
    const content = req.body.content;
    const picture = req.body.picture;
    HomebannerService.updateHomebanner(id,title,picture,content)
        .then(result => {
            res.send(msg.resDone('更新成功'));
        })
        .catch(err => {
            res.send(msg.resFail());
        })
})

router.get('/selectHomebanner',(req,res) => {
    HomebannerService.selectHomebanner()
        .then(result => {
            res.send(msg.resDone(result));
        })
        .catch(err => {
            res.send(msg.resFail());
        })
})

router.get('/findOneHomebanner',(req,res) => {
    const id = req.body.id;
    HomebannerService.findOneHomebanner(id)
        .then(result => {
            res.send(msg.resDone(result))
        })
        .catch(err => {
            res.send(msg.resFail());
        })
})


module.exports = router;