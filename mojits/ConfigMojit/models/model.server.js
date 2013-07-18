/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('ConfigMojitModel', function(Y, NAME) {

/**
 * The ConfigMojitModel module.
 *
 * @module ConfigMojit
 */
   /* Y = YUI({
        useSync: true,
        modules: {
            'local-mongodb': {
                fullpath: '../../../lib/local-mongodb.js'
            }
        }
    });
    Y.use('local-mongodb');*/
    Y.log(Y.local.mongodb.mongoClient);
    /**
     * Constructor for the ConfigMojitModel class.
     *
     * @class ConfigMojitModel
     * @constructor
     */
    Y.namespace('mojito.models')[NAME] = {

        init: function(config) {
            this.config = config;
        },

        /**
         * Method that will be invoked by the mojit controller to obtain data.
         *
         * @param callback {function(err,data)} The callback function to call when the
         *        data has been retrieved.
         */
        getData: function(callback) {
            callback(null, { some: 'data' });
        }

    };

}, '0.0.1', {requires: ['local-mongodb']});