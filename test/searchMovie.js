const scraper = require('../index');

scraper.searchMovie('The Basketball')
    .then((items) => console.log(items))
    .catch((error) => console.log(error));