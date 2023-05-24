const scraper = require('../index');

scraper.searchUser('looneylz')
    .then((items) => console.log(items))
    .catch((error) => console.log(error));