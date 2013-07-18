/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('myAnotherMojit', function(Y, NAME) {
    Y.namespace('mojito.controllers')[NAME] = {
        index: function(ac) {
            ac.done('this controller is mojito.controllers.myAntherMojit.index');
        },
        another: function(ac) {
            ac.done('this controller is mojito.controllers.myAntherMojit.another');
        }
    };
}, '0.0.1', {requires: ['mojito']});