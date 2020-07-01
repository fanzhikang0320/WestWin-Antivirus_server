const express = require('express');
const path = require('path');
//读取.env文件配置
const dotenv = require('dotenv').config();
require('./model/index');
const {requestLogger} = require('./utils/logger');
const app = express();
const cors = require('cors');

const bodyParser = require('body-parser');
const router = require('./routers/index');

const port = process.env.SERVER_PORT;
const host = process.env.SERVER_HOST;

app.use(cors());

app.use(bodyParser.urlencoded({extended:true,limit: '10000mb'}));
app.use(bodyParser.json({
    limit: '10000mb'
}));

app.set('true proxy',true);
app.use('/public',express.static(path.resolve(__dirname,'./public')));

app.use((req,res,next) => {
    next();
    requestLogger.info(`${req.method} ${req.path} ${req.ip}`)
})

app.use('/adminApi',router.adminRouter)
app.use('/authorApi',router.authorRouter)
app.use('/questionApi',router.questionRouter)
app.use('/articleApi',router.articleRouter)
app.use('/concatApi',router.concatRouter)
app.use('/productAPi',router.productRouter)
app.use('/companiesApi',router.companiesRouter);
app.use('/reviewApi',router.reviewRouter);
app.use('/homebannerApi',router.homebannerRouter);
app.use('/articlebannerApi',router.articlebannerRouter);
app.use('/companiesbannerApi',router.companiesbannerRouter);  
app.use('/toptenApi',router.toptenRouter)
app.use('/editorApi',router.editorRouter);

app.use('/qw*',(req,res) => {
    res.sendFile(path.resolve(__dirname,'./public/admin/index.html'))
})
app.use('/*',(req,res) => {
    res.sendFile(path.resolve(__dirname,'./public/client/index.html'))
})



app.listen(port,host,function () {
    console.log('start server!');
})