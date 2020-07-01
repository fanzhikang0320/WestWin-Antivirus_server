const express = require('express');
const router = express.Router();
const msg = require('../response');
const multer = require('multer');
const path = require('path');
const insertImageStorage = multer.diskStorage({
    destination (req,file,callback) {
        callback(null,path.resolve(__dirname,'../../public/img/insertImg'));
    },
    filename (req,file,callback) {
        let dotIndex = file.originalname.lastIndexOf('.');
        let filenameLength = file.originalname.length;
        // let filename = file.originalname.substring(0,dotIndex);
        let suffix = file.originalname.substring(dotIndex,filenameLength);
        callback(null,new Date().getTime() + suffix);
    }
})
const insertVideoStorage = multer.diskStorage({
    destination (req,file,callback) {
        callback(null,path.resolve(__dirname,'../../public/video/insertVideo'));
    },
    filename (req,file,callback) {
        let dotIndex = file.originalname.lastIndexOf('.');
        let filenameLength = file.originalname.length;
        // let filename = file.originalname.substring(0,dotIndex);
        let suffix = file.originalname.substring(dotIndex,filenameLength);
        callback(null, new Date().getTime() + suffix);
    }
})
const insertMulter = multer({storage: insertImageStorage});
const insertVideoMulter = multer({storage: insertVideoStorage});

router.post('/insertImg',insertMulter.single('insertImg'),(req,res) => {
    let path = `/public/img/insertImg/${req.file.filename}`
    res.send(msg.resDone(path))
    
})

router.post('/insertVideo',insertVideoMulter.single('insertVideo'),(req,res) => {
    let path = `/public/video/insertVideo/${req.file.filename}`
    res.send(msg.resDone(path));
});

module.exports = router;