//Collection of couch POJOs
new Vue({
    el: "#main-section",
    data: {
        collection: [
            {   name: "Grandma's Couch",
                squishyFactor: 7,
                color: "leaf green",
                purchased: false,
                age: 50,
                imgRoute: "src:img/grandmacouch.jpg"
            },

            {   name: "Kevin's Couch",
                squishyFactor: 11,
                color: "camel",
                purchased: false,
                age: 25
            },

            {   name: "Porch Couch",
                squishyFactor: 8,
                color: "olive",
                purchased: true,
                age: 50
            },

            {   name: "Future Deck Couch",
                squishyFactor: 3,
                color: "TBD",
                age: -1
            }
        ]
    }
});