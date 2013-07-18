/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('ConfigMojit', function(Y, NAME) {

/**
 * The ConfigMojit module.
 *
 * @module ConfigMojit
 */

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
        index: function(ac) {
            ac.models.get('ConfigMojitModel').getData(function(err, data) {
                if (err) {
                    ac.error(err);
                    return;
                }
            //Y.log(ac.config.getAppConfig());
            //Y.log(ac.config.getRoutes());
                ac.assets.addCss('./index.css');
                ac.done({
                    status: 'Mojito is working.',
                    data: data
                });
            });
        },
        test: function(ac) {
            ac.models.get('ConfigMojitModel').getData(function(err, data) {
                if (err) {
                    ac.error(err);
                    return;
                }
            Y.log(ac.config.getAppConfig());
            Y.log(ac.config.getRoutes());
                ac.assets.addCss('./index.css');
                ac.done({
                    status: 'Config Mojit Test is working.',
                    data: data
                });
            });
        }

    };

}, '0.0.1', {requires: [
    'mojito',
    'mojito-assets-addon',
    'mojito-config-addon',
    'mojito-models-addon',
    'ConfigMojitModel'
]});