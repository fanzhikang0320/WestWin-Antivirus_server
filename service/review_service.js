module.exports = {
    addReview,
    updateReview,
    selectReview,
    selectReviewAllInfo,
    selectReviewNav,
    selectReivewShowByProductId,
    selectReviewByProductId,
    selectTopfiveReview
}
const Product = require('../model/product');
const Review = require('../model/review');
const Author = require('../model/author');

async function addReview(productId,authorId,isHidden,overview,prosTop,prosBottom,pros,cons,security,plat,userExperience,support,conclusion,pricing) {
    const ins = await Review.create({
        overview,
        prosTop,
        prosBottom,
        pros,
        cons,
        security,
        plat,
        userExperience,
        support,
        conclusion,
        authorId,
        productId,
        isHidden,
        pricing
    })
    return ins;
}

async function updateReview(id,productId,authorId,isHidden,overview,prosTop,prosBottom,pros,cons,security,plat,userExperience,support,conclusion,pricing) {
    const ins = await Review.update({
        overview,
        prosTop,
        prosBottom,
        pros,
        cons,
        security,
        plat,
        userExperience,
        support,
        conclusion,
        authorId,
        productId,
        isHidden,
        pricing
    },{
        where: {
            id: id
        }
    })
    return ins;
}
async function selectReview() {
    const ins = await Review.findAll();
    return ins;
}

/**
 * 查询有多少篇没有隐藏的review
 */
async function selectReviewNav() {
    const ins = await Review.findAll({
        include: [
            {
                model: Product,
                attributes: ['name']
            }
        ],
        attributes: ['productId'],
        where: {
            isHidden: false
        }
    })
    return ins;
}

/**
 * 根据产品id去寻找相应的内容(用于前端展示)
 * @param {*} productId 
 */
async function selectReviewAllInfo(productId) {

    const ins = await Review.findAll({
        include: [
            {
                model: Product,
                attributes: ['logo','rate','link','name'],
                required: false
            },
            {
                model: Author,
                attributes: ['name','desc','position','headImg'],
                required: false
            }
        ],
        attributes: {
            exclude: ['authorId','productId','ctime','dtime','utime','isHidden']
        },
        where: {
            productId: productId
        }
    })
    return ins;
}

/**
 * 根据产品id进行查询当前有没有对应的review
 * @param {*} productId 
 */
async function selectReivewShowByProductId(productId) {
    const ins = await Review.findOne({
        attributes: ['isHidden'],
        where: {
            productId: productId
        }
    })
    return ins;
}


async function selectReviewByProductId(productId) {
    const ins = await Review.findAll({
        where: {
            productId: productId
        }
    })
    return ins;
}

async function selectTopfiveReview() {
    const ins = await Review.findAll({
        include: {
            model: Product,
            attributes: ['id','name','rate']
        },
        order: [
            [Product,'rate','DESC']
        ],
        attributes: ['id'],
        where: {
            isHidden: false
        },
        limit: 5
    })
    return ins;
}

