
module.exports = {
    addProduct,
    deleteProduct,
    updateProduct,
    selectProduct,
    selectShowProduct,
    selectTopfive
}

const Product = require('../model/product');

/**
 * 添加Product
 * @param {*} name 产品名称
 * @param {*} overall_serial 综合排序
 * @param {*} windows_serial windows中的序号
 * @param {*} ios_serial ios中的顺序
 * @param {*} linux_serial linux的顺序
 * @param {*} macos_serial 
 * @param {*} android_serial 
 * @param {*} logo logo图片地址
 * @param {*} picture 产品图片地址
 * @param {*} price 价格
 * @param {*} rate 评分
 * @param {*} isHidden 是否隐藏
 * @param {*} link 产品链接
 * @param {*} downloadLink 产品下载链接
 * @param {*} desc 产品简述
 * @param {*} trait 产品优势
 * @param {*} system 支持的系统
 */
async function addProduct(name,overall_serial,windows_serial,ios_serial,linux_serial,macos_serial,android_serial,logo,picture,price,rate,isHidden,link,downloadLink,desc,trait,system) {

    const ins = await Product.create({
        name: name,
        picture: picture,
        logo: logo,
        price: price,
        rate: rate,
        link: link,
        downloadLink: downloadLink,
        contentList: trait,
        desc: desc,
        isHidden: isHidden,
        overall_serial: overall_serial,
        windows_serial: windows_serial,
        ios_serial: ios_serial,
        linux_serial: linux_serial,
        macos_serial: macos_serial,
        android_serial: android_serial,
        system: system
    })
    return ins;
}

/**
 * 删除某一个产品
 * @param {*} id 产品ID
 */
async function deleteProduct(id) {
    const ins = await Product.destroy({
        where: {
            id: id
        }
    })
    return ins;
}
/**
 * 查询所有Product信息
 */
async function selectProduct() {
    const ins = await Product.findAll();
    return ins;
}
/**
 * 查询所有没有隐藏的产品
 */
async function selectShowProduct() {
    const ins = await Product.findAll({
        attributes: {
            exclude: ['ctime','utime','dtime']
        },
        where: {
            isHidden: false
        }
    });
    
    return ins;
}
/**
 * 查询所有没有隐藏且综合排序为倒序
 */
async function selectTopfive() {
    const ins = await Product.findAll({
        
        attributes:['id','rate','logo','link'],
        where: {
            isHidden: false
        },
        order: [
            ['windows_serial','ASC']
        ],
        limit: 5
    })
    return ins;
}
selectTopfive();

/**
 * 更新某一个产品信息
 * @param {*} id 
 * @param {*} name 
 * @param {*} overall_serial 
 * @param {*} windows_serial 
 * @param {*} ios_serial 
 * @param {*} linux_serial 
 * @param {*} macos_serial 
 * @param {*} android_serial 
 * @param {*} logo 
 * @param {*} picture 
 * @param {*} price 
 * @param {*} rate 
 * @param {*} isHidden 
 * @param {*} link 
 * @param {*} downloadLink 
 * @param {*} desc 
 * @param {*} trait 
 * @param {*} system 
 */
async function updateProduct(id,name,overall_serial,windows_serial,ios_serial,linux_serial,macos_serial,android_serial,logo,picture,price,rate,isHidden,link,downloadLink,desc,trait,system) {
    const ins = await Product.update({
        name: name,
        picture: picture,
        logo: logo,
        price: price,
        rate: rate,
        link: link,
        downloadLink: downloadLink,
        contentList: trait,
        desc: desc,
        isHidden: isHidden,
        overall_serial: overall_serial,
        windows_serial: windows_serial,
        ios_serial: ios_serial,
        linux_serial: linux_serial,
        macos_serial: macos_serial,
        android_serial: android_serial,
        system: system
    },{
        where: {
            id: id
        }
    })
    return ins;
}

