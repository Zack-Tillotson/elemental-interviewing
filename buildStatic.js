#!/usr/bin/env node

const fs = require('fs');
const Handlebars = require('handlebars');

const source = fs.readFileSync('./src/template.html', 'utf8');
const template = Handlebars.compile(source, {noEscape: true});

require('./app/build');

const routes = ['', '/about-us'];

routes.forEach(route => {
  const dir = `./app${route}`;
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }

  const routeHtml = global.renderApp(route);

  const fileContent = template({body: routeHtml});
  const fileName = `${dir}/index.html`;
  fs.writeFile(fileName, fileContent, function(err) {
    if(err) {
        return console.log('x', fileName, err);
    }

    console.log('✔', fileName);
  });
});
