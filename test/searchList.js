const scraper = require('../index');

scraper.searchList('Fiction')
    .then((items) => console.log(items))
    .catch((error) => console.log(error));