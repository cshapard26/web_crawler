const {URL} = require('node:url');
const {JSDOM} = require("jsdom");


function normalizeURL(url) {
    const normalizedUrl = new URL(url);
    normalizedUrl.protocol = 'http:';
    return normalizedUrl.href;
}

function getURLsFromHTML(html, baseUrl){
    const dom = new JSDOM(html);

    const aTagList = dom.window.document.querySelectorAll("a");
    const urlList = [];

    for (let i = 0; i < aTagList.length; i++) {
        if (!aTagList[i].href.startsWith('/')) {
            urlList[i] = aTagList[i].href;
        } else {
            urlList[i] = `${baseUrl}${aTagList[i].href}`;
        }

    }

    return urlList;
}


module.exports = {normalizeURL, getURLsFromHTML};
  