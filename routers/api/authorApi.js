const express = require('express');
const router = express.Router();
const msg = require('../response.js');
const path = require('path');
const authorService = require('../../service/author_service')
const multer = require('multer')({dest: path.resolve(__dirname,'../../public/img/authorImg')});
/**
 * 添加作者
 */
router.post('/addAuthor',multer.single('avatar'),(req,res) => {

    const name = req.body.name;
    const position = req.body.position;
    const desc = req.body.desc;
    const id = req.body.id;
    const headImg = '/public/img/authorImg/' + req.file.filename;
    if (id != 0) {
        authorService.updateAuthor(id,name,position,desc,headImg)
            .then(result => {
                res.send(msg.resDone('更改成功'))
            })
            .catch(err => {
                res.send(msg.resFail())
            })
    } else {
        authorService.addAuthor(name,position,desc,headImg)
            .then(result => {
                res.send(msg.resDone('添加成功'))
            })
            .catch(err => {
                res.send(msg.resFail())
            })
    }

    
    
})

/**
 * 获取所有作者信息
 */
router.get('/getAuthor',(req,res) => {
    authorService.selectAllAuthor()
        .then(result => {
            res.send(msg.resDone(result))
        })
        .catch(err => {
            res.send(msg.resFail())
        })
})
/**
 * 更新作者信息
 */
router.post('/updateAuthor',(req,res) => {
    const id = req.body.id;
    const name = req.body.name;
    const position = req.body.position;
    const desc = req.body.desc;
    const headImg = req.body.headImg;
    authorService.updateAuthor(id,name,position,desc,headImg)
        .then(result => {
            res.send(msg.resDone('更新成功'))
        })
        .catch(err => {
            res.send(msg.resFail())
        })
});
/**
 * 删除作者信息
 */
router.post('/deleteAuthor',(req,res) => {
    const id = req.body.id;
    authorService.deleteAuthor(id)
        .then(result => {
            // result == 0表示没有该作者 result == 1时，表示成功
            res.send(msg.resDone('删除成功'))
        })
        .catch(err => {
            res.send(msg.resFail())
        })
})  

module.exports = router;