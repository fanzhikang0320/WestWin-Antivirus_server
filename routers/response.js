/**
 * 响应失败
 * @param {*} code 
 * @param {*} msg 
 */
const resFail = (code = 500,msg = 'fail') => {
    return {
        code: code,
        msg: msg
    }
}
/**
 * 响应成功
 * @param {*} result 
 */
const resDone = (result) => {
    return {
        code: 0,
        msg: 'success',
        data: result
    }
}
module.exports = {
    resFail,
    resDone
}

