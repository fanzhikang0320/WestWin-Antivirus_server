const jwt = require('jsonwebtoken');

const secrect = 'zhikang'; //密钥

/**
 * 颁发令牌
 * @param {*} payload 要携带的数据
 * @param {*} maxAge 过期时间
 */
const publish = (res,payload,maxAge) => {

    const token = jwt.sign(payload,secrect,{expiresIn: maxAge});
    res.header('authorization',token)
}
/**
 * 解析令牌
 */
const verify = (req) => {
    let token = req.headers.authorization;
    if (!token) return null;

    token = token.split(' '); //主要防止有的带bearer token
    token = token.length == 1 ? token[0] : token[1];
    try {
        const result = jwt.verify(token,secrect);
        return result;
    } catch {
        return null;
    }   
    
}

module.exports = {
    publish,
    verify
}