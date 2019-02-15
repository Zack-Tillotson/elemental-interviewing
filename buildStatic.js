#!/usr/bin/env node

const fs = require('fs');
const Handlebars = require('handlebars');

const source = fs.readFileSync('./app/template.html', 'utf8');
const template = Handlebars.compile(source);
const config = require('./config.js');

require('./app/build');

const routes = require('./src/routes');

routes.forEach(({path}) => {
  const dir = `./app${path}`;
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }

  const routeHtml = global.renderApp(path);

  const fileContent = template({...config, appHtml: routeHtml});
  const fileName = `${dir}index.html`;
  fs.writeFile(fileName, fileContent, function(err) {
    if(err) {
        return console.log('x', fileName, err);
    }

    console.log('✔', fileName);
  });
});
