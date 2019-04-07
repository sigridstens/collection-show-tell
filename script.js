//Collection of couch POJOs

var myCouchCollection = new Vue({
    el: "#couchGallery",
    data: {
        couches: [
            {   name: "Grandma's Couch",
                squishyFactor: 7,
                color: "leaf green",
                purchased: false,
                age: 50
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