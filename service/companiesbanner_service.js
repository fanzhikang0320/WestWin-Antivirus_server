module.exports = {
    addCompaniesbanner,
    deleteCompaniesbanner,
    updateCompaniesbanner,
    findOneCompaniesbanner,
    selectCompaniesbanner
}


const Companiesbanner = require('../model/comparisebanner');

/**
 * 添加banner
 * @param {*} title 
 * @param {*} content 
 */
async function addCompaniesbanner(title,content) {
    const ins = await Companiesbanner.create({
        title: title,
        content: content
    })
    return ins;
}
/**
 * 删除banner
 * @param {*} id 
 */
async function deleteCompaniesbanner(id) {
    const ins = await Companiesbanner.destroy({
        where: {
            id: id
        }
    });
    return ins;
}
/**
 * 更新banner
 * @param {*} id 
 * @param {*} title 
 * @param {*} content 
 */
async function updateCompaniesbanner(id,title,content) {
    const ins = await Companiesbanner.update({
        title: title,
        content: content
    },{
        where: {
            id: id
        }
    })
    return ins;
}
/**
 * 查找banner
 */
async function selectCompaniesbanner() {
    const ins = await Companiesbanner.findAll();
    return ins;
}
/**
 * 查找某个banner的详细信息
 * @param {*} id 
 */
async function findOneCompaniesbanner(id) {
    const ins = await Companiesbanner.findOne({
        where: {
            id: id
        }
    })
    return ins;
}
