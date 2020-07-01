
module.exports = {
    addCompanies,
    updateCompanies,
    selectCompanies,
    findOneCompanies,
    selectCompaniesByOrder,
    selectCompaniesByProductId
}

const Companies = require('../model/companies');
const Product = require('../model/product');

async function addCompanies(productId,companiesList,order) {
    const ins = await Companies.create({
        productId,
        companiesList,
        order
    })
    return ins;
}
async function selectCompanies() {
    const ins = await Companies.findAll();
    return ins;
}
async function findOneCompanies(id) {
    const ins = await Companies.findOne({
        where: {
            id: id
        }
    })
    return ins;
}
async function selectCompaniesByProductId(productId) {
    const ins = await Companies.findOne({
        where: {
            productId: productId
        }
    })
    return ins;
}

async function updateCompanies(id,companiesList,order) {
    const ins = await Companies.update({
        companiesList,
        order
    },{
        where: {
            id: id
        }
    })
    return ins;
}

async function selectCompaniesByOrder() {
    const ins = await Companies.findAll({
        include: [
            {
                model: Product,
                attributes: ['name','price','rate','logo','link'],
                where: {
                    isHidden: false
                },
                required: false
            }
        ],
        order: [
            ['order','ASC']
        ]
    })
    return ins;
}

