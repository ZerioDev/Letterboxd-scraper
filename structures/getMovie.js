module.exports = async ($) => {
    const page = {};

    page.col = $('.col-17');
    page.header = $('.header');
    page.results = page.header.find('#profile-statistic').toArray().map(element => $(element));

    return Object({
        name: page.col.find('h1').text().trim(),
        date: page.col.find('small').text() ? page.col.find('small').text().trim() : null,
        trailer: `https://${page.header.find('a').attr('href').substr(2)}`,
        description: {
            synopsis: page.col.find('h4').text() ? page.col.find('h4').text().trim() : null,
            summary: page.col.find('p').eq(1).text() ? page.col.find('p').eq(1).text().trim() : null
        }
    });
}