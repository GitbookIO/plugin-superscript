
module.exports = {
    blocks: {
        sup: {
            process: function(block) {
                var href = block.kwargs.href;
                var target = block.kwargs.target;
                var inner = block.body;

                if (href) {
                    inner = '<a href="'+href+'" target="'+target+'">'+inner+'</a>';
                }

                return {
                    parse: true,
                    body: '<sup>'+inner+'</sup>'
                };
            }
        }
    }
};
