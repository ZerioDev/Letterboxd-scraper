module.exports = async ($) => {
    const page = {};
    const podcasts = Array();

    page.header = $('.results');
    page.results = page.header.find('li').toArray().map(element => $(element));

    page.results.map(x => {
        podcasts.push({
            url: `${x.find('a').attr('href')}`,
            title: x.find('h3').find('a').text().trim(),
            image: {
                url: x.find('img').attr('src'),
                width: x.find('img').attr('width'),
                height: x.find('img').attr('height')
            },
            author: {
                name: x.find('p').find('a').text().trim(),
                website: x.find('.sourcename').text().trim(),
            },
            icon: {
                url: x.find('p').find('img').attr('src'),
                width: x.find('p').find('img').attr('width'),
                height: x.find('p').find('img').attr('height')
            }
        })
    });

    return podcasts;
}