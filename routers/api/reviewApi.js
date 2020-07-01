const express = require('express');
const router = express.Router();
const msg = require('../response');
const reviewService = require('../../service/review_service');
router.post('/addReview',(req,res) => {
    const productId = req.body.productId;
    const authorId = req.body.authorId;
    const isHidden = req.body.isHidden;
    const overview = req.body.overview;
    const prosTop = req.body.prosTop;
    const prosBottom = req.body.prosBottom;
    const pros = req.body.pros;
    const cons = req.body.cons;
    const security = req.body.security;
    const plat = req.body.plat;
    const userExperience = req.body.userExperience;
    const support = req.body.support;    
    const conclusion = req.body.conclusion;
    const pricing = req.body.pricing;
    reviewService.addReview(productId,authorId,isHidden,overview,prosTop,prosBottom,pros,cons,security,plat,userExperience,support,conclusion,pricing)
        .then(result => {
            res.send(msg.resDone('添加成功'));
        })
        .catch(err => {
            console.log(err);
            res.send(msg.resFail())
        })
})

router.post('/updateReview',(req,res) => {
    const id = req.body.id;
    const productId = req.body.productId;
    const authorId = req.body.authorId;
    const isHidden = req.body.isHidden;
    const overview = req.body.overview;
    const prosTop = req.body.prosTop;
    const prosBottom = req.body.prosBottom;
    const pros = req.body.pros;
    const cons = req.body.cons;
    const security = req.body.security;
    const plat = req.body.plat;
    const userExperience = req.body.userExperience;
    const support = req.body.support;    
    const conclusion = req.body.conclusion;
    const pricing = req.body.pricing;
    reviewService.updateReview(id,productId,authorId,isHidden,overview,prosTop,prosBottom,pros,cons,security,plat,userExperience,support,conclusion,pricing)
        .then(result => {
            res.send(msg.resDone('更改成功'))
        })
        .catch(err => {
            res.send(msg.resFail())
        })

})

router.get('/selectReview',(req,res) => {
    reviewService.selectReview()
        .then(result => {
            res.send(msg.resDone(result))
        })
        .catch(err => {
            res.send(msg.resFail())
        })
})


//根据产品id去查询详细内容
router.post('/selectAllInfo',(req,res) => {
    const productId = req.body.productId;

    reviewService.selectReviewAllInfo(productId)
        .then(result => {
            res.send(msg.resDone(result))
        })
        .catch(err => {
            res.send(msg.resFail())
        })
})

router.get('/selectReviewNav',(req,res) => {
    reviewService.selectReviewNav()
        .then(result => {
            res.send(msg.resDone(result));
        })
        .catch(err => {
            res.send(msg.resFail())
        })
})

/**
 * 根据产品id进行查询review
 */
router.post('/selectReviewByProductId',(req,res) => {
    const productId = req.body.productId;
    reviewService.selectReviewByProductId(productId)
        .then(result => {
            res.send(msg.resDone(result));
        })
        .catch(err => {
            res.send(msg.resFail());
        })
})

router.get('/selectTopfiveReview',(req,res) => {
    reviewService.selectTopfiveReview()
        .then(result => {
            res.send(msg.resDone(result));
        })
        .catch(err => {
            res.send(msg.resFail());
        })
})


module.exports = router;