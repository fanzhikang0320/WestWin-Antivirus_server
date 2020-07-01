module.exports = {
    addQuestion,
    deleteQuestion,
    updateQuestion,
    selectAllQuestion
}

const Question = require('../model/question');

/**
 * 添加问题
 * @param {*} title 问题标题
 * @param {*} content 回答内容
 */
async function addQuestion(title,content) {
    const ins = await Question.create({
        title: title,
        content: content
    })
    return ins;
}
// addQuestion('first','<p>这是回答内容</p>')
/**
 * 删除某一个问题
 * @param {*} id 
 */
async function deleteQuestion(id) {
    const ins = await Question.destroy({
        where: {
            id: id
        }
    })
    return ins;
}
// deleteQuestion('1')
/**
 * 更改某个问题的内容
 * @param {*} id 
 * @param {*} title 
 * @param {*} content 
 */
async function updateQuestion(id,title,content) {
    const ins = await Question.update({
        title: title,
        content: content
    },{
        where: {
            id: id
        }
    })
    return ins;
}
// updateQuestion('1','second');
/**
 * 查询所有问题
 */
async function selectAllQuestion() {
    const ins = await Question.findAll({
        attributes: ['id','title','content','ctime']
    })
    return ins;
}