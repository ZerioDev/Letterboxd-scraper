module.exports = async ($, baseURL) => {
    const page = {};
    const movies = [];

    page.header = $('.results');
    page.results = page.header.find('li').toArray().map(element => $(element));

    page.results.map(x => {
        const producers = [...x.find('.film-metadata > a').contents()]
            .filter(e => e.type === 'text' && $(e).text().trim())
            .map(e => $(e).text().trim());

        movies.push({
            id: Number(x.find('div').attr('data-film-id')),
            url: `${baseURL}${x.find('div').attr('data-film-slug')}`,
            name: x.find('img').attr('alt').trim(),
            date: x.find('a').eq(1).text() ? Number(x.find('a').eq(1).text().trim()) : null,
            text: x.find('div > div').text() ? x.find('div > div').text().trim() : null,
            directed: producers,
            image: {
                width: x.find('div').attr('data-image-width'),
                height: x.find('div').attr('data-image-height')
            }
        })
    });

    return movies;
}