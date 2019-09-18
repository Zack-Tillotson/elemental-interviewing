#!/usr/bin/env node

const fs = require('fs');
const contentful = require('contentful');
const config = require('./contentful.json');

const client = contentful.createClient(config);

const content = {};

const contentPromises = [
  'routes',
  'nav',
  'navLink',
].reduce((promises, type) => {
  const promise = client.getEntries({
      content_type: type,
    })
    .then(response => response.items)
    .then(items => {
      items.forEach(item => content[item.sys.id] = item);
      console.log('✔ ' + type);
      return items;
    })
    .catch((error) => {
      console.log(`\nError occurred while fetching Entries for ${type}:`);
      console.error(error);
    });
  return [...promises, promise];
}, []);

Promise.all(contentPromises).then(() => {

  const fileName = './src/content.json';
  fs.writeFile(fileName, JSON.stringify(content), function(err) {
    if(err) {
        return console.log('x', fileName, err);
    }

    console.log('Contentful successful');
  });
});
