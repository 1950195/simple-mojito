YUI.add("lang/myMojit_en", function (Y) {
    Y.Intl.add(
        "myMojit",  // associated module
        "en",    // BCP 47 language tag
        // key-value pairs for this module and language
        {
            GREETING: "hello__",
            SAYS: "says",
            PREPOSITION: "at"
        }
    );
}, "3.1.0", {requires: ['intl']});
