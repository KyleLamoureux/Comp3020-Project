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
                name: "Calamari",
                img: root+"/olive_garden/appetizer/calamari.jpg",
                restaurant: "Olive Garden"
            },
            {
                name: "Chicken Alfredo",
                img: root+"/olive_garden/entree/alfredo.jpg",
                restaurant: "Olive Garden"
            },
            {
                name: "Tiramisu",
                img: root+"/olive_garden/dessert/tiramisu.jpg",
                restaurant: "Olive Garden"
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
        name: "Muncho Burrito",
        id: "muncho_burrito",
        img: root+"/muncho_burrito/mbLogo.jpg",
        type: ['Mexican'],
        foodItems: [
            {
                name: "Zesty Chimichurri",
                img: root+"/muncho_burrito/signature/zesty.png",
                restaurant: "Muncho Burrito"
            },
            {
                name: "Chips & Salsa",
                img: root+"/muncho_burrito/sides/salsa.jpg",
                restaurant: "Muncho Burrito"
            },
            {
                name: "Build Your Own",
                img: root+"/muncho_burrito/build_your_own/burrito.jpg",
                restaurant: "Muncho Burrito"
            }
        ],
        distance: 6.4,
        time: 55,
        price: 20,
        popularity: 2,
        description: "Mexican-inspired food that lives up to their promise: Fresh Mexican Grill. Mucho Burrito only serves food that is mucho real and mucho fresh. It’s made by hand right in front of our guests’ eyes, using only the freshest ingredients, free of artificial flavours and preservatives.",
        href: "link",
        backgroundColour: '#fdfdfd',
        textColour: '#000000'
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
        description: "Relaxed restaurant serving a menu of Pan-Asian dishes.",
        href: "link",
        backgroundColour: '#f37022'
    },
    {
        name: "Kimchi Sushi",
        id: "kimchi_sushi",
        img: root+"/kimchi_sushi/ksLogo.jpg",
        type: ['Sushi', 'Japanese', 'Korean', 'Asian'],
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
        distance: 7.9,
        time: 55,
        price: 20,
        popularity: 2,
        description: "Kimchi Sushi offers a wide range of excellent Japanese and Korean dishes, from classic sushi, sashimi, and tempura dishes, to Korean dishes like Bibimpap, Bulgogi, and more.",
        href: "link",
        backgroundColour: '#000000'
    },
    {
        name: "Boston Pizza",
        id: "boston_pizza",
        img: root+"/boston_pizza/bpLogo.jpg",
        type: ['Pizza', 'Italian'],
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
        distance: 5.1,
        time: 45,
        price: 38,
        popularity: 4,
        description: "Famous for our gourmet pizzas made with our signature hand pressed dough, our extensive menu satisfies every appetite with our mouth-watering pasta dishes and a wide variety of, salads, entrées and desserts.",
        href: "link",
        backgroundColour: '#fbffff',
        textColour: '#000000'
    },
    {
        name: "Clay Oven",
        id: "clay_oven",
        img: root+"/clay_oven/coLogo2.png",
        type: ['Indian', 'Asian'],
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
        distance: 4.4,
        time: 35,
        price: 30,
        popularity: 1,
        description: "Clay Oven Restaurant proudly boasts of the best menu and the most delicious food.Delight in our appetizing soups and snacks. Both vegetarians and non vegetarians can enjoy our culinary feasts.",
        href: "link",
        backgroundColour: '#000000',
        
    }
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