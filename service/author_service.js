module.exports = {
    addAuthor,
    deleteAuthor,
    updateAuthor,
    selectAllAuthor
}


const Author = require('../model/author');

/**
 * 添加作者信息
 * @param {*} name 作者名字
 * @param {*} position 作者职位
 * @param {*} desc 作者简介
 * @param {*} headImg 作者头像
 */
async function addAuthor(name,position,desc,headImg) {
    const ins = await Author.create({
        name: name,
        position: position,
        headImg: headImg,
        desc: desc
    })

    return ins.toJSON();
}
// addAuthor('Marry','科长','这是一个非常的','public/static')
/**
 * 删除作者信息
 * @param {*} id 
 * 返回0表示没有该内容
 */
async function deleteAuthor(id) {
    const ins = await Author.destroy({
        where: {
            id: id
        }
    })
    return ins;
}
/**
 * 更新作者信息
 * @param {*} id 
 * @param {*} name 作者姓名
 * @param {*} position 作者职位
 * @param {*} desc 作者简介
 * @param {*} headImg 作者头像
 * 返回[0]表示没有该内容
 * 返回[1]表示更新成功
 */
async function updateAuthor(id,name,position,desc,headImg) {
    const ins = await Author.update({
        name: name,
        position: position,
        headImg: headImg,
        desc: desc
    },{
        where: {
            id: id
        }
    })
    return ins;
}
// updateAuthor(1,'Jack','组长','public/sss','zhehsdkf')
/**
 * 查询所有作者,
 * 没有数据为[]
 */
async function selectAllAuthor() {
    const ins = await Author.findAll({
        attributes: ['id','name','position','headImg','desc','ctime']
    })
    return ins;
}