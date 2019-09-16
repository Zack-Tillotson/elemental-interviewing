const config = require('./contentful.json');


const content = config;
console.log('content', content);

module.exports = () => content;