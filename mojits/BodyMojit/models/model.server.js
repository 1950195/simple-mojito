/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('BodyMojitModel', function(Y, NAME) {

/**
 * The BodyMojitModel module.
 *
 * @module BodyMojit
 */

    /**
     * Constructor for the BodyMojitModel class.
     *
     * @class BodyMojitModel
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
            callback(null, { some: 'BodyMojit has not any more data.'});
        }

    };

}, '0.0.1', {requires: []});