YUI.add("lang/myMojit_fr", function (Y) {
    Y.Intl.add(
        "myMojit",  // associated module
        "fr",       // BCP 47 language tag
        // key-value pairs for this module and language
        {
            GREETINGS: "salut",
            SAYS: "dit",
            PREPOSITION: "à"
        }
    );
}, "3.1.0", {requires: ['intl']});
