const root = "../resources/images/restaurant-page/restaurants";

/* Data */
restaurants = [
    {
        name: "Perkins",
        id: "perkins",
        img: root+"/perkins/perkins.png",
        type: ["Breakfast"],
        foodItems: [
            {
                name: "Pancakes",
                img: root+"/perkins/griddle/pancake.jpg",
                restaurant: "Perkins"
            },
            {
                name: "Sandwiches",
                img: root+"/perkins/sandwiches/club.jpg",
                restaurant: "Perkins"
            },
            {
                name: "Omelet",
                img: root+"/perkins/omelets/everything.jpg",
                restaurant: "Perkins"
            }
        ],
        distance: 3.8,
        time: 25,
        price: 20,
        popularity: 4,
        description: "Diverse moderately priced homestyle goodness, with a menu featuring breakfast, lunch, and bakery offerings.",
        href: "link",
        backgroundColour: '#006300'
    },
    {
        name: "McDonalds",
        id: "mcdonalds",
        img: root+"/mcdonalds/mcLogo.jpg",
        type: ["Burgers"],
        foodItems: [
            {
                name: "Big Mac",
                img: root+"/mcdonalds/burgers/bigmac.jpg",
                restaurant: "McDonalds"
            },
            {
                name: "Nuggets",
                img: root+"/mcdonalds/chickenAndSandwiches/nuggets.jpg",
                restaurant: "McDonalds"
            },
            {
                name: "Vanilla Cone",
                img: root+"/mcdonalds/desserts/cone.jpg",
                restaurant: "McDonalds"
            }
        ],
        distance: 6.3,
        time: 37,
        price: 5,
        popularity: 2,
        description: "We're McDonalds, you know what we're offering.",
        href: "link",
        backgroundColour: '#c7161c'
    },
    {
        name: "Olive Garden",
        id: "olive_garden",
        img: root+"/olive_garden/ogLogo.jpg",
        type: ["Italian"],
        foodItems: [
            {
                name: "",
                img: root+"",
                restaurant: ""
            },
            {
                name: "",
                img: root+"",
                restaurant: ""
            },
            {
                name: "",
                img: root+"",
                restaurant: ""
            }
        ],
        distance: 6.9,
        time: 45,
        price: 35,
        popularity: 3,
        description: "At Olive Garden, we know that life is better together and everyone is happiest when they’re with family. From never ending servings of our freshly baked breadsticks and iconic garden salad, to our homemade soups and sauces, there’s something for everyone to enjoy.",
        href: "link",
        backgroundColour: '#54301a'
    },
    {
        name: "Asia Palace",
        id: "asia_palace",
        img: root+"/asia_palace/apLogo.jpeg",
        type: ['Asian', 'Vietnamese'],
        foodItems: [
            {
                name: "",
                img: root+"",
                restaurant: ""
            },
            {
                name: "",
                img: root+"",
                restaurant: ""
            },
            {
                name: "",
                img: root+"",
                restaurant: ""
            }
        ],
        distance: 2.9,
        time: 25,
        price: 15,
        popularity: 3,
        description: "",
        href: "link",
        backgroundColour: '#f37022'
    },
];


/* TEMPLATE
{
    name: "",
    id: "",
    img: root+"",
    type: [""],
    foodItems: [
        {
            name: "",
            img: root+"",
            restaurant: ""
        },
        {
            name: "",
            img: root+"",
            restaurant: ""
        },
        {
            name: "",
            img: root+"",
            restaurant: ""
        }
    ],
    distance: ,
    time: ,
    price: ,
    popularity: ,
    description: "",
    href: "link",
    backgroundColour: ''
},
*/