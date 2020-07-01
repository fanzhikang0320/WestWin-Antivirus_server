module.exports = {
    addArticlebanner,
    deleteArticlebanner,
    updateArticlebanner,
    selectArticlebanner,
    findOneArticlebanner
}

const Articlebanner = require('../model/articlebanner')
/**
 * 添加banner标题
 * @param {*} title 
 * @param {*} content 
 */
async function addArticlebanner(title,content) {
    const ins = await Articlebanner.create({
        title: title,
        content: content
    })
    console.log(ins);
    return ins;
}
// addArticlebanner('<p>这是标题呀</p>','<p>这是内容</p>');
/**
 * 删除banner
 * @param {*} id 
 */
async function deleteArticlebanner(id) {
    const ins = await Articlebanner.destroy({
        where: {
            id: id
        }
    })
    console.log(ins);
    return ins;
}
// deleteArticlebanner(1);
/**
 * 更新banner
 * @param {*} id 
 * @param {*} title 
 * @param {*} content 
 */
async function updateArticlebanner(id,title,content) {
    const ins = await Articlebanner.update({
        title: title,
        content: content
    },{
        where: {
            id: id
        }
    })
}
// updateArticlebanner(1,'<p>更改的内容</p>','<p>更改内容</p>');
/**
 * 查询banner
 */
async function selectArticlebanner() {
    const ins = await Articlebanner.findAll()
    return ins;
}

// selectArticlebanner();
/**
 * 查询某一个banner
 * @param {*} id 
 */
async function findOneArticlebanner(id) {
    const ins = await Articlebanner.findOne({
        where: {
            id: id
        }
    })
    console.log(ins);
    return ins;
}
// findOneArticlebanner(1);


