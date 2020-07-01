const express = require('express');
const router = express.Router();
const msg = require('../response');
const articleService = require('../../service/article_service');
const path = require('path');
const multer = require('multer')({dest: path.resolve(__dirname,'../../public/img/articleImg')});
const {responseLogger} = require('../../utils/logger');

router.post('/uploadIllustrationImg',multer.single('illustration'),(req,res) => {
    const illustrationImg = '/public/img/articleImg/' + req.file.filename;
    res.send(msg.resDone(illustrationImg));
})

/**
 * 添加文章
 */
router.post('/addArticle',multer.single('cover'),(req,res) => {
    const title = req.body.title;
    const picture = req.body.picture.includes('/public/img') ? req.body.picture : '/public/img/articleImg/' + req.file.filename;
    const illustration = req.body.illustration;
    const desc = req.body.desc;
    const content = req.body.content;
    const addTime = + req.body.addTime;
    const authorId = + req.body.authorId;
    const id = +req.body.id;
    if (id != 0) {
        articleService.updateArticle(id,title,picture,illustration,addTime,desc,content,authorId)
            .then(result => {
                responseLogger.info('updateArticle: '+result)
                res.send(msg.resDone('更新成功'))
            })
            .catch(err => {
                responseLogger.error('updateArticle: '+error)
                res.send(msg.resFail())
            })
    } else {
        
        articleService.addArticle(title,picture,illustration,addTime,desc,content,authorId)
            .then(result => {
                res.send(msg.resDone('添加成功'))
            })
            .catch(err => {
                res.send(msg.resFail())
            })
    }
})
/**
 * 更新某一篇文章
 */
router.post('/updateArticle',(req,res) => {
   
    const id = req.body.id;
    const title = req.body.title;
    const content = req.body.content;
    const picture = req.body.picture;
    const illustration = req.body.illustration;
    const addTime = +req.body.addTime;
    const desc = req.body.desc;
    const authorId = req.body.authorId;

    articleService.updateArticle(id,title,picture,illustration,addTime,desc,content,authorId)
        .then(result => {
            res.send(msg.resDone('更新成功'))
        })
        .catch(err => {
            console.log(err);
            res.send(msg.resFail())
        })
})
/**
 * 查询某一篇文章详细信息
 */
router.post('/getOneArticle',(req,res) => {
    const id = req.body.id;
    articleService.selectOneArticle(id)
        .then(result => {
            res.send(msg.resDone(result))
        })
        .catch(err => {
            res.send(msg.resFail());
        })
})
/**
 * 分页查询某一篇文章
 */
router.get('/getArticle',(req,res) => {
    const offset = +req.query.offset;
    const limit = +req.query.limit;
    articleService.selectAllArticle(offset,limit)
        .then(result => {
            res.send(msg.resDone(result))
        })
        .catch(err => {
            res.send(msg.resFail())
        })
})
/**
 * 删除某一篇文章
 */
router.post('/deleteArticle',(req,res) => {
    const id = req.body.id;
    articleService.deleteArticle(id)
        .then(result => {
            res.send(msg.resDone('删除成功'))
        })
        .catch(err => {
            res.send(msg.resFail())
        })
})

module.exports = router;