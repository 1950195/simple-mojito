/*jslint anon:true, sloppy:true, nomen:true*/
/*global YUI*/
YUI.add('FrameMojitBinderIndex', function(Y, NAME) {
    Y.namespace('mojito.binders')[NAME] = {
        init: function(mojitProxy) {
            this.mojitProxy = mojitProxy;
        },
        bind: function(node) {
            var me = this;
            this.node = node;
        }
    };

}, '0.0.1', {requires: ['event-mouseenter', 'mojito-client']});
