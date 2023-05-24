const axios = require('axios');
const cheerio = require('cheerio');

const methods = {};
methods.searchMovie = require('./structures/searchMovie');
methods.searchUser = require('./structures/searchUser');
methods.getMovie = require('./structures/getMovie');
methods.getProfile = require('./structures/getProfile');

const baseURL = 'https://letterboxd.com';

class Scraper {
    static getHtml(URL) {
        return new Promise(async (resolve, reject) => {
            axios(URL).then(response => resolve(response.data)).catch((error) => {
                reject(`Err ${error.response.status}`);
            })
        });
    }

    static async searchMovie(query) {
        if (!query || typeof query !== 'string') throw new Error('You must include the "query" element of type "string".');

        const html = await this.getHtml(`${baseURL}/search/films/${encodeURI(query.trim())}`);
        const $ = await cheerio.load(html);

        return methods.searchMovie($, baseURL);
    }

    static async searchUser(query) {
        if (!query || typeof query !== 'string') throw new Error('You must include the "query" element of type "string".');

        const html = await this.getHtml(`${baseURL}/search/members/${encodeURI(query.trim())}`);
        const $ = await cheerio.load(html);

        return methods.searchUser($, baseURL);
    }

    static async getMovie(query) {
        if (!query || typeof query !== 'string') throw new Error('You must include the "query" element of type "string".');

        let url;
        const reg = new RegExp((/https?:\/\/letterboxd\.com\/film\/([a-z\d-]+)/g));

        if (query.match(reg)) url = query;
        else await this.searchMovie(query).then((items) => url = items[0]?.url).catch((error) => console.log(error));

        if (!url) return Object();

        const html = await this.getHtml(`${encodeURI(url.trim())}`);
        const $ = await cheerio.load(html);

        return methods.getMovie($);
    }

    static async getProfile(username) {
        if (!username || typeof username !== 'string') throw new Error('You must include the "username" element of type "string".');

        const html = await this.getHtml(`${baseURL}/${encodeURI(username.trim())}`);
        const $ = await cheerio.load(html);

        return methods.getProfile($, baseURL);
    }
}

module.exports = Scraper;