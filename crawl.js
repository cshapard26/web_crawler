const url = require('node:url');
const JSDOM = require('jsdom');


function normalizeURL(url) {
    const normalizedUrl = new URL(url);
    normalizedUrl.protocol = 'http:';
    return normalizedUrl.href;
}

function getURLsFromHTML(html){
    return '';
}


module.exports = {normalizeURL, getURLsFromHTML};
  