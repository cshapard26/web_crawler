const {test, expect} = require('@jest/globals');
const {normalizeURL, getURLsFromHTML} = require('./crawl.js');

test('Normalizes the URL', () => {
    expect(normalizeURL('https://boot.dev/path/to/file.txt')).toBe('http://boot.dev/path/to/file.txt')
});
test('Normalizes the URL', () => {
    expect(normalizeURL('https://boot.dev/')).toBe('http://boot.dev/')
});
test('Normalizes the URL', () => {
    expect(normalizeURL('http://boot.dev')).toBe('http://boot.dev/')
});
test('Normalizes the URL', () => {
    expect(normalizeURL('http://boot.dev/')).toBe('http://boot.dev/')
});

test('Returns an array of all URLs from a HTML Body and rewrites relative URLs as absolute URLs', () => {
    expect(getURLsFromHTML('<html><body><a href="https://blog.boot.dev"><span>Go to Boot.dev</span></a></body></html>', 'https://blog.boot.dev')).toStrictEqual(['https://blog.boot.dev/'])
});
test('Returns an array of all URLs from a HTML Body and rewrites relative URLs as absolute URLs', () => {
    expect(getURLsFromHTML('<html><body><a href="https://boot.dev/path/to/file.txt"><span>Go to Boot.dev</span></a><a href="/path/to/text.txt"><span>Go to Boot.dev</span></a></body></html>', 'https://boot.dev')).toStrictEqual(['https://boot.dev/path/to/file.txt', 'https://boot.dev/path/to/text.txt'])
});

test('Returns an array of all URLs from a HTML Body and rewrites relative URLs as absolute URLs', () => {
    expect(getURLsFromHTML('<html><body><a href="https://amazon.com"><span>Go to Boot.dev</span></a><a href="/not/me.png"><span>Go to Boot.dev</span></a></body></html>', 'https://boot.dev')).toStrictEqual(['https://amazon.com/', 'https://boot.dev/not/me.png'])
});


