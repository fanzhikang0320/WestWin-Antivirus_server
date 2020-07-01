const express = require('express');
const router = express.Router();
const msg = require('../response');
const questionService = require('../../service/question_service');

/**
 * 增加问题
 */
router.post('/addQuestion',(req,res) => {
    const title = req.body.title;
    const content = req.body.content;
    questionService.addQuestion(title,content)
        .then(result => {
            res.send(msg.resDone(result))
        })
        .catch(err => {
            res.send(msg.resFail())
        })
})
/**
 * 查询所有问题
 */
router.get('/getAllQuestion',(req,res) => {
    questionService.selectAllQuestion()
        .then(result => {
            res.send(msg.resDone(result))
        })
        .catch(err => {
            res.send(msg.resFail())
        })
})
/**
 * 删除某个问题
 */
router.post('/deleteQuestion',(req,res) => {
    const id = req.body.id;
    questionService.deleteQuestion(id)
        .then(result => {
            res.send(msg.resDone('删除成功'))
        })
        .catch(err => {
            res.send(msg.resFail())
        })
})
/**
 * 更新某个问题
 */
router.post('/updateQuestion',(req,res) => {
    const id = req.body.id;
    const title = req.body.title;
    const content = req.body.content;
    questionService.updateQuestion(id,title,content)
        .then(result => {
            res.send(msg.resDone('更新成功'))
        })
        .catch(err => {
            res.send(msg.resFail())
        })
})

module.exports = router;