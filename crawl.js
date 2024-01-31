const { URL } = require('node:url');
const { JSDOM } = require("jsdom");


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

async function crawlPage(baseURL, currURL, pages) {
    console.log(`Crawling: ${currURL}`)
    try {
        const response = await fetch(currURL);
        if (response.status >= 400) {
            console.log(`Error while fetching page. Status code: ${response.status}`)
            return -1;
        }
        if (!response.headers.get('content-type').includes('text/html')) {
            console.log(`Page not in HTML. Page in ${response.headers.get('content-type')}`)
            return -1;
        }
        htmlText = await response.text();
        urlList = getURLsFromHTML(htmlText, baseURL)
        for (url1 of urlList) {
            if (url1.href !== baseURL) {
                continue;
            }
            if (!pages[url1]) {
                pages[url1] = 0;
            } 
            pages[url1]++;
        }
    } catch (err) {
        console.log(err.message)
        return -1;
    }
}

module.exports = {normalizeURL, getURLsFromHTML, crawlPage};
  