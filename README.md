# Letterboxd Scraper

A NPM module that will allow you to retrieve information from the [Letterboxd](https://letterboxd.com) website.

*If you don't have any development knowledge, it is recommended to join the Discord support server to get help.*

### ⚠️ Project under construction

Follow the progress on the [Discord](https://discord.gg/5cGSYV8ZZj) server.

Any bug issue should be reported. Any suggestions for improvement or new features are appreciated.

### 🧩 An easy to use module

Some examples with all features are available on [GitHub](https://github.com/ZerioDev/Letterboxd-scraper/tree/main/test).

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

// With name
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

Search a user :

```js
const scraper = require('letterboxd-scraper');

scraper.searchUser('looneylz')
    .then((items) => console.log(items))
    .catch((error) => console.log(error));
```

Response :

```
[
  {
    name: 'Romeo',
    url: 'https://letterboxd.com/looneylz/',
    followers: 1,
    following: 1,
    image: {
      url: 'https://a.ltrbxd.com/resized/avatar/upload/9/5/9/4/5/0/7/shard/avtr-0-80-0-80-crop.jpg?v=81837288f4',
      width: '40',
      height: '40'
    }
  }
]
```

Get a profile :

```js
const scraper = require('letterboxd-scraper');

scraper.getProfile('juulienn')
    .then((items) => console.log(items))
    .catch((error) => console.log(error));
```

Response :

```
{
  rss: 'https://letterboxd.com/juulienn/rss',
  name: 'juulienn',
  biography: ':)',
  avatarURL: 'https://a.ltrbxd.com/resized/avatar/upload/9/5/0/9/3/6/5/shard/avtr-0-220-0-220-crop.jpg?v=c1e0581f88',
  stats: { films: 68, thisYear: 9, following: 3, followers: 2 }
}
```

Realized with ❤️ by [ZerioDev](https://github.com/ZerioDev), follow me on [Letterboxd](https://letterboxd.com/juulienn).