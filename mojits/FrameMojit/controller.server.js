/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('IndexMojit', function(Y, NAME) {

/**
 * The IndexMojit module.
 *
 * @module IndexMojit
 */

    'use strict';

    /**
     * Constructor for the Controller class.
     *
     * @class Controller
     * @constructor
     */

    Y.namespace('mojito.controllers')[NAME] = {

        /**
         * Method corresponding to the 'index' action.
         *
         * @param ac {Object} The ActionContext that provides access
         *        to the Mojito API.
         */

        index: function (ac) {
            //Y.log(ac.context);
            // composite execution for the children structure
            // coming from application.json specs.
            ac.composite.execute(ac.config.get(), function (data, meta) {
                //Y.log(meta);
                //Y.log(data);
                // meta.assets from children should be piped into
                // the frame's assets before doing anything else.
                ac.assets.addAssets(meta.assets);

                // deploying YUI to the client side
                ac.deploy.constructMojitoClientRuntime(ac.assets, meta.binders);

                // 1. mixing bottom and top fragments from assets into
                //    the template data, along with title and mojito version.
                // 2. mixing meta with child metas, along with some extra
                //    headers.
                /*meta = Y.merge(meta, {
                        http: {
                            headers: {
                                'content-type': 'text/html; charset="utf-8"'
                            }
                        },
                        view: {
                            name: 'index'
                        }
                    }, true);
                Y.log(meta);*/
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
