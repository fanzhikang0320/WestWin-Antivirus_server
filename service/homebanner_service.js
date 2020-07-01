module.exports = {
    addHomebanner,
    deleteHomebanner,
    updateHomebanner,
    selectHomebanner,
    findOneHomebanner
}



const Homebanner = require('../model/homebanner');


async function addHomebanner(title,content,picture) {
    const ins = await Homebanner.create({
        title: title,
        content: content,
        picture: picture
    })
    return ins;
}

async function deleteHomebanner(id) {
    const ins = await Homebanner.destroy({
        where: {
            id: id
        }
    })
    return ins;
}
async function updateHomebanner(id,title,picture,content) {
    const ins = await Homebanner.update({
        title: title,
        content: content,
        picture: picture
        
    },{
        where: {
            id: id
        }
    })
    return ins;
}
async function selectHomebanner() {
    const ins = await Homebanner.findAll();
    return ins;
}
async function findOneHomebanner(id) {
    const ins = await Homebanner.findOne({
        where: {
            id: id
        }
    });
    return ins;
}