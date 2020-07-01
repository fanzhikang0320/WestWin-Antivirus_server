require('./admin');
require('./question');
const Product = require('./product');
const Article = require('./article');
const Companies = require('./companies');
const Review = require('./review');
const Author = require('./author');
require('./topten');
require('./homebanner');
require('./comparisebanner');
require('./articlebanner');


Companies.belongsTo(Product,{
    foreignKey: {
        name:'productId'
    }
});


Review.belongsTo(Product,{
    foreignKey: 'productId'
});
Review.belongsTo(Author,{
    foreignKey: 'authorId'
})

Article.belongsTo(Author,{
    foreignKey: 'authorId'
});

const sequelize = require('./db');

sequelize.sync({
    alter: true
}).then(() => {
    console.log('Synchronize all models');
})