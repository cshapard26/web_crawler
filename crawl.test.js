const {test, expect} = require('@jest/globals');
const normalizeURL = require('./crawl.js');

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
