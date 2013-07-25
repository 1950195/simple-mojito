/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('myMojit', function(Y, NAME) {
    Y.namespace('mojito.controllers')[NAME] = {
        index: function(ac) {
            ac.done({
                "name": NAME,
                "greeting": ac.intl.lang("GREETING"),
                "says": ac.intl.lang("SAYS"),
                "preposition": ac.intl.lang("PREPOSITION"),
                "today": ac.intl.formatDate(new Date())
            });
        },
        another: function(ac) {
            ac.done('this controller is mojito.controllers.myMojit.another');
        }
    };
}, '0.0.1', {requires: [
    'mojito',
    'mojito-intl-addon'
]});
