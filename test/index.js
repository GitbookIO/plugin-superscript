var path = require('path');
var tester = require('gitbook-tester');
var assert = require('assert');

describe('superscript', function() {
    it('should correctly replace by sup html tag', function() {
        return tester.builder()
            .withContent('#test me \n\nHello world. {% sup %}superscript text!{% endsup %}')
            .withBookJson({
                plugins: ['superscript']
            })
            .withLocalPlugin(path.join(__dirname, '..'))
            .create()
            .then(function(result) {
                assert.equal(result[0].content, '<h1 id="test-me">test me</h1>\n<p>Hello world. <sup>superscript text!</sup></p>')
            });
    });
});