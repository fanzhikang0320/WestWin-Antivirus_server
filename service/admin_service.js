module.exports = {
    addAdmin,
    selectAdmin,
    deleteAdmin,
    updateAdminName,
    updateAdminHeadImg,
    updatePassword
}

const Admin = require('../model/admin');
/**
 * 添加普通管理员
 * @param {*} account 账号
 * @param {*} password 密码
 * @param {*} name 名字
 * @param {*} ip 客户端ip
 */
async function addAdmin(account,password,name,ip) {
    const ins = await Admin.create({
        account: account,
        password: password,
        nickname: name,
        ip: ip
    });
    return ins.toJSON();
}
/**
 * 查询管理员
 * @param {*} email 
 */
async function selectAdmin(email) {
    const ins = await Admin.findOne({
        where: {
            account: email
        }
    })
    return ins.toJSON();
}
/**
 * 删除管理员
 * @param {*} email 
 */
async function deleteAdmin(email) {
    const ins = await Admin.destroy({
        where: {
            account: email
        }
    });
    return ins;
}
/**
 * 更新管理员昵称
 * @param {*} email 账号
 * @param {*} name 昵称
 * @returns {*} 返回0表示没有该账号
 */
async function updateAdminName(email,name) {
    const ins = await Admin.update({
        nickname: name
    },{
        where: {
            account: email
        }
    });
    return ins;
}

/**
 * 更新管理员头像
 * @param {*} email 账号
 * @param {*} headImg 头像路径
 * @returns {Number} 返回0表示没有该账号
 */
async function updateAdminHeadImg(email,headImg) {
    const ins = await Admin.update({
        headImg: headImg
    },{
        where: {
            account: email
        }
    });

    return ins;
    
}

async function updatePassword(email,password) {
    const ins = await Admin.update({
        password: password
    },{
        where: {
            account: email
        }
    })
    return ins;
}
