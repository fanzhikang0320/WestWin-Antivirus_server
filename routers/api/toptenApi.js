const express = require('express');
const router = express.Router();
const msg = require('../response');
const path = require('path');
const ToptenService = require('../../service/topten_service');
const multer = require('multer')({dest: path.resolve(__dirname,'../../public/img/topten')})

router.post('/addTopten',multer.single('toptenPicture'),(req,res) => {
    const picture = '/public/img/topten/' + req.file.filename;
    const link = req.body.link;
    const rate = req.body.rate;
    const id = req.body.id;
    if (id != 0) {
        ToptenService.updateTopten(id,link,picture,rate)
            .then(result => {
                res.send(msg.resDone('更改成功'));
            })
            .catch(err => {
                res.send(msg.resFail());
            })
    } else {
        ToptenService.addTopten(link,picture,rate)
            .then(result => {
                res.send(msg.resDone('添加成功'))
            })
            .catch(err => {
                res.send(msg.resFail())
            })
    }
    
})

router.post('/updateTopten',(req,res) => {
    const id = req.body.id;
    const picture = req.body.picture;
    const link = req.body.link;
    const rate = req.body.rate;
    ToptenService.updateTopten(id,link,picture,rate)
        .then(result => {
            res.send(msg.resDone('更改成功'));
        })
        .catch(err => {
            res.send(msg.resFail());
        })
})

router.post('/deleteTopten',(req,res) => {
    const id = req.body.id;
    ToptenService.deleteTopten(id)
        .then(result => {
            res.send(msg.resDone('删除成功'));
        })
        .catch(err => {
            res.send(msg.resFail())
        })
}) 

router.get('/selectTopten',(req,res) => {
    ToptenService.selectTopten()
        .then(result => {
            res.send(msg.resDone(result))
        })
        .catch(err => {
            res.send(msg.resFail())
        })
})


module.exports = router;