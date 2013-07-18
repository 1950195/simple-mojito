/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('myMojit', function(Y, NAME) {
    Y.namespace('mojito.controllers')[NAME] = {
        index: function(ac) {
            ac.done('Hello, world. I have created my first Mojito app at ' + (new Date()) + '.');
        },
        another: function(ac) {
            ac.done('this controller is mojito.controllers.myMojit.another');
        }
    };
}, '0.0.1', {requires: ['mojito']});