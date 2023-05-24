# Letterboxd Scraper

A NPM module that will allow you to retrieve information from the [Letterboxd](https://letterboxd.com) website.

*If you don't have any development knowledge, it is recommended to join the Discord support server to get help.*

### ⚠️ Project under construction

Follow the progress on the [Discord](https://discord.gg/5cGSYV8ZZj) server.

Any bug issue should be reported. Any suggestions for improvement or new features are appreciated.

### 🧩 An easy to use module

Some examples with all features are available on [GitHub](https://github.com/ZerioDev/Letterboxd-scraper/tree/main/test).


| Feature | Requested | Details |
| ------|-----|-----|
| searchMovie | Name of a movie | Search a movie |
| searchUser | Name of a Letterboxd user | Search a Letterboxd user |
| getMovie | Name of a movie / Letterboxd movie URL | More information on a movie |
| getProfile | Name of a Letterboxd user | More information on a Letterboxd user |

### 📌 Examples

Search for a movie :

```js
const scraper = require('letterboxd-scraper');

scraper.searchMovie('The Basketball')
    .then((items) => console.log(items))
    .catch((error) => console.log(error));
```

Response :

```
[
  {
    id: 163198,
    url: 'https://letterboxd.com/film/the-land-of-basketball-1995-2005/',
    name: 'The Land of Basketball 1995-2005',
    date: 2008,
    text: 'Original title: Zemlja košarke 1995-2005  Alternative title: Zemlja kosarke',
    directed: [],
    image: { width: '70', height: '105' }
  },
  {
    id: 557093,
    url: 'https://letterboxd.com/film/basketball-water-and-the-lost-city-of-elbowoods/',
    name: 'Basketball, Water and the Lost City of Elbowoods',
    date: 2019,
    text: null,
    directed: [],
    image: { width: '70', height: '105' }
  },
  {
    id: 706715,
    url: 'https://letterboxd.com/film/something-in-the-water-a-kinston-basketball-story/',
    name: 'Something In The Water: A Kinston Basketball Story',
    date: 2020,
    text: null,
    directed: [ 'Marcus Mizelle' ],
    image: { width: '70', height: '105' }
  }
]
```

Get a movie :

```js
const scraper = require('letterboxd-scraper');

//With URL
scraper.getMovie('https://letterboxd.com/film/the-basketball-diaries')
    .then((items) => console.log(items))
    .catch((error) => console.log(error));

//With name
scraper.getMovie('The Basketball Diaries')
    .then((items) => console.log(items))
    .catch((error) => console.log(error));
```

Response :

```
{
  name: 'The Basketball Diaries',
  date: 1995,
  trailer: 'https://www.youtube.com/embed/W5eVnwe6Pxs?rel=0&wmode=transparent',
  description: {
    synopsis: 'The true story of the death of innocence and the birth of an artist.',
    summary: "Film adaptation of street tough Jim Carroll's epistle about his kaleidoscopic free fall into the harrowing world of drug addiction."
  }
}
```

Realized with ❤️ by [ZerioDev](https://github.com/ZerioDev), follow me on [Letterboxd](https://letterboxd.com/juulienn).