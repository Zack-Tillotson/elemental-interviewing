#!/usr/bin/env node

const fs = require('fs');
const Handlebars = require('handlebars');

const config = require('./config.js');

require('./app/build');

const routes = require('./src/routes');


function compileHtml() {

  const templateSource = fs.readFileSync('./app/pageTemplate.html', 'utf8');
  const template = Handlebars.compile(templateSource);

  routes.forEach(({title, subtitle, path, description}) => {
    const dir = `./app${path}`;
    if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
    }

    const routeHtml = global.renderApp(path);
    const routeTitle = `${title} | Elemental Interviewing`;

    const fileContent = template({
      ...config,
      appHtml: routeHtml,
      pageTitle: routeTitle,
      description,
    });
    const fileName = `${dir}index.html`;
    fs.writeFile(fileName, fileContent, function(err) {
      if(err) {
          return console.log('HTML     x', fileName, err);
      }

      console.log('HTML    ✔', fileName);
    });
  });
}


function compileSitemap() {

  const sitemapSource = fs.readFileSync('./app/sitemapTemplate.xml', 'utf8');
  const sitemap = Handlebars.compile(sitemapSource);

  const sitemapContent = sitemap({
    routes,
    nowDate: new Date().toISOString(),
  });
  const sitemapFileName = `./app/sitemap.xml`;
  fs.writeFile(sitemapFileName, sitemapContent, function(err) {
    if(err) {
      return console.log('Sitemap x', sitemapFileName, err);
    }

    console.log('Sitemap ✔', sitemapFileName);
  });
}

compileHtml();
compileSitemap();