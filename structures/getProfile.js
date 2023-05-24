module.exports = async ($, baseURL, user) => {
    const page = {};

    page.header = $('#profile-header');
    page.data = page.header.find('.profile-statistic').toArray().map(element => $(element));

    const stats = [];
    page.data.map(x => stats.push(x.find('.value').text()));

    return Object({
        rss: `${baseURL}/${user}/rss`,
        url: `${baseURL}/${user}`,
        name: page.header.find('.title-1').text(),
        biography: page.header.find('.bio').text() ? page.header.find('.bio').text().trim() : null,
        avatarURL: page.header.find('.profile-avatar').find('img').attr('src'),
        stats: {
            films: Number(stats[0]),
            thisYear: Number(stats[1]),
            following: Number(stats[2]),
            followers: Number(stats[3])
        }
    });
}