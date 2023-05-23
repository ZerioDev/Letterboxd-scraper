const scraper = require('../index');

scraper.getProfile('juulienn')
    .then((items) => console.log(items))
    .catch((error) => console.log(error));