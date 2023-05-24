module.exports = async ($, baseURL) => {
    const page = {};
    const lists = Array();

    page.header = $('.results');
    page.results = page.header.find('li').toArray().map(element => $(element));

    page.results.map(x => {
        if (!x.find('h2').find('a').text()) return;

        lists.push({
            id: Number(x.find('section').attr('data-film-list-id')),
            url: `${baseURL}${x.find('a').attr('href')}`,
            name: x.find('h2').find('a').text().trim(),
            author: {
                name: x.find('p').find('a').eq(0).text().trim(),
                url: `${baseURL}${x.find('p').find('a').attr('href')}`,
            },
            stats: {
                films: Number(x.find('p').find('.value').text().trim().replace(/[^0-9]/g, '')),
                likes: getStats(x, 'has-icon icon-16 icon-like', 1),
                comments: getStats(x, 'has-icon icon-16 icon-comment', 2),
            },
            icon: {
                url: x.find('div').find('a').find('img').attr('src'),
                width: x.find('div').find('a').find('img').attr('width'),
                height: x.find('div').find('a').find('img').attr('height')
            },
        })
    });

    return lists;
}

function getStats(x, icon, position) {
    return x.find('p').find(`a[class="${icon}"]`).attr('href') ? x.find('p').find('a').eq(position).text().trim() : 0;
}