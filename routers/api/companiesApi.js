const express = require('express');
const router = express.Router();
const msg = require('../response');
const companiesService = require('../../service/companies_service');

router.post('/addCompanies',(req,res) => {
    const productId = req.body.productId;
    const order = req.body.order;
    const companiesList = req.body.companiesList;
    companiesService.addCompanies(productId,companiesList,order)
        .then(result => {
            res.send(msg.resDone('添加成功'))
        })
        .catch(err => {
            res.send(msg.resFail())
        })
})

router.post('/selectCompaniesByProduct',(req,res) => {
    const productId = req.body.productId;
    companiesService.selectCompaniesByProductId(productId)
        .then(result => {
            res.send(msg.resDone(result));
        })
        .catch(err => {
            res.send(msg.resFail());
        })
})

router.get('/selectCompanies',(req,res) => {
    companiesService.selectCompanies()
        .then(result => {
            res.send(msg.resDone(result))
        })
        .catch(err => {
            res.send(msg.resFail());
        })
})
router.post('/updateCompanies',(req,res) => {
    const id = req.body.id;
    const order = req.body.order;
    const companiesList = req.body.companiesList;
    companiesService.updateCompanies(id,companiesList,order)
        .then(result => {
            res.send(msg.resDone('更新成功'));
        })
        .catch(err => {
            res.send(msg.resFail())
        })
})

router.get('/selectCompaniesByOrder',(req,res) => {
    companiesService.selectCompaniesByOrder()
        .then(result => {
            res.send(msg.resDone(result));
        })
        .catch(err => {
            res.send(msg.resFail());
        })
})

module.exports = router;