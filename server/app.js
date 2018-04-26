const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || process.env.NODE_PORT || 4500;

const genreListScraper = require('./genre-info-scraper');

app.use('/assets', express.static(path.join(__dirname, '..', 'client', 'dist')));
app.set('views', path.join(__dirname, '..', 'client', 'src', 'views'));
app.set('view engine', 'pug');

(async () => {
  app.locals.genreList = await genreListScraper();
  app.get('/', (req, res) => {
    res.render('index', {
    	title: 'Netfliques',
    	articles: app.locals.genreList
    });
  });

  app.listen(port, () => console.log(`Netfliques running on ${port}`));
})();
