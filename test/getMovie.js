const scraper = require('../index');

scraper.getMovie('https://letterboxd.com/film/the-basketball-diaries')
    .then((items) => console.log(items))
    .catch((error) => console.log(error));