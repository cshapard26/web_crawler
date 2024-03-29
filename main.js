const { argv } = require('node:process');
const { crawlPage, normalizeURL } = require('./crawl.js');

function main() {
    if (argv.length < 3 || argv.length > 3){
        throw new Error(`${argv.length - 2} arguments given. 1 Required.`)
    } else {
        console.log(`Beginning web crawl starting at ${argv[2]}`)
    }

    const pageCount = {};
    crawlPage(normalizeURL(argv[2]), normalizeURL(argv[2]), pageCount);
}

main();