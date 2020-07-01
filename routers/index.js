
const adminRouter = require('./api/adminApi');
const articleRouter = require('./api/articleApi');
const authorRouter = require('./api/authorApi');
const questionRouter = require('./api/questionApi');
const concatRouter = require('./api/concatApi');
const productRouter = require('./api/productApi');
const companiesRouter = require('./api/companiesApi');
const reviewRouter = require('./api/reviewApi');
const homebannerRouter = require('./api/homebannerApi');
const articlebannerRouter = require('./api/articlebannerApi');
const companiesbannerRouter = require('./api/companiesbannerApi');
const toptenRouter = require('./api/toptenApi');
const editorRouter = require('./api/editorApi');
module.exports = {
    adminRouter,
    articleRouter,
    authorRouter,
    questionRouter,
    concatRouter,
    productRouter,
    reviewRouter,
    companiesRouter,
    homebannerRouter,
    articlebannerRouter,
    companiesbannerRouter,
    toptenRouter,
    editorRouter
}