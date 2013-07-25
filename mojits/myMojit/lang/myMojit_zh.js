YUI.add("lang/myMojit_zh", function (Y) {
    Y.Intl.add(
        "myMojit",  // associated module
        "zh",       // BCP 47 language tag
        // key-value pairs for this module and language
        {
            GREETING: "你好__",
            SAYS: "说",
            PREPOSITION: "在"
        }
    );
}, "3.1.0", {requires: ['intl']});
