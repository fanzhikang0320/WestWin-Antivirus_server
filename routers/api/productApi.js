const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer')({dest: path.resolve(__dirname,'../../public/img/product')});
const pictureMulter = require('multer')({dest: path.resolve(__dirname,'../../public/img/productPicture')});
const productService = require('../../service/product_service');
const {selectReivewShowByProductId} = require('../../service/review_service');
const msg = require('../response');

/**
 * 添加产品
 */
router.post('/addProduct',multer.single('productImg'),(req,res) => {
    const name = req.body.name;
    const overall_serial = req.body.overall_serial;
    const windows_serial = req.body.windows_serial;
    const linux_serial = req.body.linux_serial;
    const macos_serial = req.body.macos_serial;
    const ios_serial = req.body.ios_serial;
    const android_serial = req.body.android_serial;
    const price = req.body.price;
    const rate = req.body.score;
    const isHidden = req.body.isHidden;
    const link = req.body.url;
    const downloadLink = req.body.downloadUrl;
    const desc = req.body.desc;
    const trait = req.body.feature;
    const system = req.body.system;
    const picture = req.body.picture;
    const id = req.body.id;
    const logo = req.body.logo.includes('/public/img/product') ? req.body.logo : '/public/img/product/' + req.file.filename;
    if (id != 0) {
        productService.updateProduct(id,name,overall_serial,windows_serial,ios_serial,linux_serial,macos_serial,android_serial,logo,picture,price,rate,isHidden,link,downloadLink,desc,trait,system)
        .then(result => {
            res.send(msg.resDone('更新成功'));
        })
        .catch(err => {
            res.send(msg.resFail());
        })
    } else {
        
        productService.addProduct(name,overall_serial,windows_serial,ios_serial,linux_serial,macos_serial,android_serial,logo,picture,price,rate,isHidden,link,downloadLink,desc,trait,system)
            .then(result => {
                res.send(msg.resDone('添加成功'));
            })
            .catch(err => {
                res.send(msg.resFail());
            })
    }
    
})
/**
 * 查询所有产品
 */
router.post('/selectProduct',(req,res) => {
    productService.selectProduct()
        .then(result => {
            res.send(msg.resDone(result))
        })
        .catch(err => {
            res.send(msg.resFail())
        })
})
/**
 * 上传产品图片
 */
router.post('/uploadPicture',pictureMulter.single('productPicture'),(req,res) => {
    const productPicture = '/public/img/productPicture/' + req.file.filename;
    res.send(msg.resDone(productPicture))
})
/**
 * 查询展示的产品
 */
router.get('/selectShowProduct', async (req,res) => {
    
    const productData = await productService.selectShowProduct();
    for (let i = 0; i < productData.length; i ++) {
        const review = await selectReivewShowByProductId(productData[i].dataValues.id);
        if (review == null || review.dataValues.isHidden) {
            
            productData[i].dataValues.isShowRead = false;
        } else {
            productData[i].dataValues.isShowRead = true;
        }
    }
    res.send(msg.resDone(productData));
    
})
/**
 * 查询综合排序前5的产品
 */
router.get('/selectTopfive',(req,res) => {
    productService.selectTopfive()
        .then(result => {
            res.send(msg.resDone(result))
        })
        .catch(err => {
            res.send(msg.resFail())
        })
})
/**
 * 删除产品
 */
router.post('/deleteProduct',(req,res) => {
    const id = req.body.id;
    productService.deleteProduct(id)
        .then(result => {
            res.send(msg.resDone('删除成功'));
        })
        .catch(err => {
            res.send(msg.resFail())
        })
})
/**
 * 更新某个产品,适用于图片不变，其它更改
 */
router.post('/updateProduct',(req,res) => {
    const id = req.body.id;
    const logo = req.body.logo;
    const picture = req.body.picture;
    const name = req.body.name;
    const overall_serial = req.body.overall_serial;
    const windows_serial = req.body.windows_serial;
    const linux_serial = req.body.linux_serial;
    const macos_serial = req.body.macos_serial;
    const ios_serial = req.body.ios_serial;
    const android_serial = req.body.android_serial;
    const price = req.body.price;
    const rate = req.body.score;
    const isHidden = req.body.isHidden;
    const link = req.body.url;
    const downloadLink = req.body.downloadUrl;
    const desc = req.body.desc;
    const trait = req.body.feature;
    const system = req.body.system;
    
    productService.updateProduct(id,name,overall_serial,windows_serial,ios_serial,linux_serial,macos_serial,android_serial,logo,picture,price,rate,isHidden,link,downloadLink,desc,trait,system)
        .then(result => {
            res.send(msg.resDone('更新成功'));
        })
        .catch(err => {
            res.send(msg.resFail());
        })
})
module.exports = router;