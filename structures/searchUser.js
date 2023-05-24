module.exports = async ($, baseURL) => {
    const page = {};
    const users = [];

    page.header = $('.results');
    page.results = page.header.find('li').toArray().map(element => $(element));

    page.results.map(x => {
        users.push({
            name: x.find('div').find('h3').find('a').text().trim(),
            url: `${baseURL}${x.find('div').find('a').attr('href')}`,
            followers: Number(x.find('div').find('small').find('a:nth-child(1)').text().trim().replace(/[^0-9]/g, '')),
            following: Number(x.find('div').find('small').find('a:nth-child(2)').text().trim().replace(/[^0-9]/g, '')),
            image: {
                url: x.find('div').find('a').find('img').attr('src'),
                width: x.find('div').find('a').find('img').attr('width'),
                height: x.find('div').find('a').find('img').attr('height')
            }
        })
    });

    return users;
}