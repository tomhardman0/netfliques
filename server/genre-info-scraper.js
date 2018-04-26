const request = require('request-promise');
const options = {
  uri: 'https://www.whats-on-netflix.com/news/the-netflix-id-bible-every-category-on-netflix/'
};

const re = /(([1-9]+)( = )([A-z0-9&; -]+))/g; // never parse html with regex whaaattt

module.exports = async () => {
  // request html of blog page and match against regex
  const htmlString = await request(options);
  const genreHtmlStrings = htmlString.match(re);

  // remove html and replace ampersands (this clearly
  // isn't definitive, as with the regex)
  const normalisedTuples = genreHtmlStrings.map((str) => {
    const strippedOfParagraphs = str.replace('<p>', '').replace('</p>', '');
    const replaceAmpersands = strippedOfParagraphs.replace('&amp;', '&');
    return replaceAmpersands.split(' = ');
  });

  return normalisedTuples;
};
