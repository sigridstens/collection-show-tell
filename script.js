//Collection of couch POJOs
new Vue({
    el: "#mainSection",
    data: {
        collection: [
            {   name: "Grandma's Couch",
                squishyFactor: 7,
                color: "leaf green",
                booPurchased: false,
                age: 50,
                imgRoute: "img/grandmacouch.jpg"
            },

            {   name: "Kevin's Couch",
                squishyFactor: 11,
                color: "camel",
                booPurchased: false,
                age: 25,
                imgRoute: "img/kevin-couch.jpg"
            },

            {   name: "Porch Couch",
                squishyFactor: 8,
                color: "olive",
                booPurchased: true,
                age: 50,
                imgRoute: "img/porch-couch.jpg"
            },

            {   name: "Future Deck Couch",
                squishyFactor: 3,
                color: "TBD",
                age: -1,
                imgRoute: "https://i.pinimg.com/originals/4b/18/d5/4b18d577913fddacf32268e456287427.jpg"

            }
        ]
    }
});