var path = require('path');
var tester = require('gitbook-tester');
var assert = require('assert');

var pkg = require('../package.json');

describe('superscript', function() {
    it('should correctly replace by sup html tag', function() {
        return tester.builder()
            .withContent('#test me \n\nHello world. {% sup %}superscript text!{% endsup %}')
            .withLocalPlugin(path.join(__dirname, '..'))
            .withBookJson({
                gitbook: pkg.engines.gitbook,
                plugins: ['superscript']
            })
            .create()
            .then(function(result) {
                assert.equal(result[0].content, '<h1 id="test-me">test me</h1>\n<p>Hello world. <sup>superscript text!</sup></p>')
            });
    });

    it('should correctly include links when "href" property', function() {
        return tester.builder()
            .withContent('#test me \n\nHello world. {% sup href="https://google.com" %}superscript text!{% endsup %}')
            .withBookJson({
                gitbook: pkg.engines.gitbook,
                plugins: ['superscript']
            })
            .withLocalPlugin(path.join(__dirname, '..'))
            .create()
            .then(function(result) {
                assert.equal(result[0].content, '<h1 id="test-me">test me</h1>\n<p>Hello world. <sup><a href="https://google.com" target="_blank">superscript text!</a></sup></p>')
            });
    });

    it('should correctly accept markdown inside', function() {
        return tester.builder()
            .withContent('#test me \n\nHello world. {% sup href="https://google.com" %}superscript **text**!{% endsup %}')
            .withBookJson({
                gitbook: pkg.engines.gitbook,
                plugins: ['superscript']
            })
            .withLocalPlugin(path.join(__dirname, '..'))
            .create()
            .then(function(result) {
                assert.equal(result[0].content, '<h1 id="test-me">test me</h1>\n<p>Hello world. <sup><a href="https://google.com" target="_blank">superscript <strong>text</strong>!</a></sup></p>')
            });
    });
});