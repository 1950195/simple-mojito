YUI.add("lang/myMojit_es", function (Y) {
    Y.Intl.add(
        "myMojit",  // associated module
        "es",       // BCP 47 language tag
        // key-value pairs for this module and language
        {
            GREETING: "hola",
            SAYS: "dice",
            PREPOSITION: "en"
        }
    );
}, "3.1.0", {requires: ['intl']});
