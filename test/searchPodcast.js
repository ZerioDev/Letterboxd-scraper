const scraper = require('../index');

scraper.searchPodcast('Titanic')
    .then((items) => console.log(items))
    .catch((error) => console.log(error));