/*jslint anon:true, sloppy:true, nomen:true*/
/*global YUI*/
YUI.add('FrameMojit', function(Y, NAME) {
    'use strict';
    Y.namespace('mojito.controllers')[NAME] = {
        index: function (ac) {
            ac.composite.execute(ac.config.get(), function (data, meta) {
                ac.assets.addAssets(meta.assets);
                ac.deploy.constructMojitoClientRuntime(ac.assets, meta.binders);
                ac.done(
                    Y.merge(data, ac.assets.renderLocations(), {
                        "name": NAME,
                        "page-title": "some fancy title... from intl",
                        "greeting": ac.intl.lang("GREETING"),
                        "says": ac.intl.lang("SAYS"),
                        "preposition": ac.intl.lang("PREPOSITION"),
                        "today": ac.intl.formatDate(new Date()),
                        "mojito_version": "0.7",
                        "meta": {
                            "charset": "utf-8"
                        }
                    })
                );
            });
        }
    };
}, '0.1.0', {requires: [
    'mojito',
    'mojito-assets-addon',
    'mojito-deploy-addon',
    'mojito-config-addon',
    'mojito-composite-addon',
    'mojito-intl-addon'
]});
