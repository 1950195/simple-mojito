/*jslint anon:true, sloppy:true, nomen:true*/
/*global YUI*/
YUI.add('BodyMojit', function(Y, NAME) {
    Y.namespace('mojito.controllers')[NAME] = {
        index: function(ac) {
            ac.models.get('BodyMojitModel').getData(function(err, data) {
                if (err) {
                    ac.error(err);
                    return;
                }
                ac.assets.addCss('./index.css');
                ac.done({
                    status: 'BodyMojit.index is working.',
                    data: data
                });
            });
        },
        test: function(ac) {
            ac.models.get('BodyMojitModel').getData(function(err, data) {
                if (err) {
                    ac.error(err);
                    return;
                }
                ac.assets.addCss('./index.css');
                ac.done({
                    status: 'BodyMojito.test is working.',
                    data: data
                });
            });
        }
    };
}, '0.0.1', {requires: [
    'mojito',
    'mojito-assets-addon',
    'mojito-models-addon',
    'BodyMojitModel'
]});
