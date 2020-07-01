module.exports = {
    addTopten,
    deleteTopten,
    updateTopten,
    selectTopten
}

const Topten = require('../model/topten');

/**
 * 添加topten
 * @param {*} link 
 * @param {*} picture 
 * @param {*} rate 
 */
async function addTopten(link,picture,rate) {
    const ins = await Topten.create({
        link,
        picture,
        rate
    })
    return ins;
}
/**
 * 更新某一个topten
 * @param {*} id 
 * @param {*} link 
 * @param {*} picture 
 * @param {*} rate 
 */
async function updateTopten(id,link,picture,rate) {
    const ins = await Topten.update({
        link,
        picture,
        rate
    },{
        where: {
            id: id
        }
    })
    return ins;
}
/**
 * 删除某一个topten
 * @param {*} id 
 */
async function deleteTopten(id) {
    const ins = await Topten.destroy({
        where: {
            id: id
        }
    })
    return ins;
}
/**
 * 查询topten
 */
async function selectTopten() {
    const ins = await Topten.findAll();
    return ins;
}
