module.exports = {
    addArticle,
    deleteArticle,
    updateArticle,
    selectOneArticle,
    selectAllArticle
}

const Article = require('../model/article');
/**
 * 添加文章
 * @param {*} title 文章标题
 * @param {*} pic 文章缩略图
 * @param {*} illustration 文章配图
 * @param {*} addTime 自定义发布时间
 * @param {*} desc 文章简介
 * @param {*} content 文章内容
 * @param {*} authorId 对应的作者表的id
 */
async function addArticle(title,pic,illustration,addTime,desc,content,authorId) {
    const ins = await Article.create({
        title: title,
        picture: pic,
        illustration: illustration,
        desc: desc,
        content: content,
        addTime: addTime,
        authorId: authorId
    })
    return ins;

}
/**
 * 删除某一篇文章
 * @param {*} id 
 */
async function deleteArticle(id) {
    const ins = await Article.destroy({
        where: {
            id: id
        }
    })
    return ins;
}
/**
 * 更新文章信息
 * @param {*} id 
 * @param {*} title 
 * @param {*} pic 
 * @param {*} illustration
 * @param {*} addTime 
 * @param {*} desc 
 * @param {*} content 
 * @param {*} authorId
 */
async function updateArticle(id,title,pic,illustration,addTime,desc,content,authorId) {
    const ins = await Article.update({
        title: title,
        picture: pic,
        illustration: illustration,
        desc: desc,
        content: content,
        addTime: addTime,
        authorId: authorId
    },{
        where: {
            id: id
        }
    })
    return ins;
}
/**
 * 查询某一篇文章详细信息
 * @param {*} id 
 */
async function selectOneArticle(id) {
    const ins = await Article.findAll({
        attributes: ['id','title','desc','illustration','content','picture','authorId'],
        where: {
            id: id
        }
    })
    return ins;
}
/**
 * 分页查询所有文章
 * @param {*} offset 
 * @param {*} limit 
 */
async function selectAllArticle(offset,limit) {
    const ins = await Article.findAndCountAll({
        attributes: ['id','title','desc','picture','illustration','addTime','authorId'],
        offset: offset,
        limit: limit
    })
    return ins;
}
