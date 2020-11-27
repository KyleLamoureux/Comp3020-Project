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
                restaurant: "Perkins",
                dish: "Blueberry Buttermilk Pancake Platter"
            },
            {
                name: "Sandwiches",
                img: root+"/perkins/sandwiches/club.jpg",
                restaurant: "Perkins",
                dish: "Triple Decker Club"
            },
            {
                name: "Omelets",
                img: root+"/perkins/omelets/everything.jpg",
                restaurant: "Perkins",
                dish: "The Everything"
            }
        ],
        distance: 3.8,
        time: 25,
        price: 20,
        popularity: 4,
        description: "Diverse moderately priced homestyle goodness, with a menu featuring breakfast, lunch, and bakery offerings.",
        backgroundColour: '#006300',
        backgroundImage: "../resources/images/Res-background/Perkins.jpg",
        rating : "2.9/5"
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
                restaurant: "McDonalds",
                dish: "Big Mac"
            },
            {
                name: "Nuggets",
                img: root+"/mcdonalds/chickenAndSandwiches/nuggets.jpg",
                restaurant: "McDonalds",
                dish: "Chicken McNuggets"
            },
            {
                name: "Vanilla Cone",
                img: root+"/mcdonalds/desserts/cone.jpg",
                restaurant: "McDonalds",
                dish: "Vanilla Cone"
            }
        ],
        distance: 6.3,
        time: 37,
        price: 5,
        popularity: 2,
        description: "We're McDonalds, you know what we're offering.",
        backgroundColour: '#c7161c',
        backgroundImage: "../resources/images/Res-background/McDonalds.jpg",
        rating : "4.2/5"
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
                restaurant: "Olive Garden",
                dish: "Calamari"
            },
            {
                name: "Chicken Alfredo",
                img: root+"/olive_garden/entree/alfredo.jpg",
                restaurant: "Olive Garden",
                dish: "Chicken Alfredo"
            },
            {
                name: "Tiramisu",
                img: root+"/olive_garden/dessert/tiramisu.jpg",
                restaurant: "Olive Garden",
                dish: "Tiramisu"
            }
        ],
        distance: 6.9,
        time: 45,
        price: 35,
        popularity: 3,
        description: "At Olive Garden, we know that life is better together and everyone is happiest when they’re with family. From never ending servings of our freshly baked breadsticks and iconic garden salad, to our homemade soups and sauces, there’s something for everyone to enjoy.",
        backgroundColour: '#54301a',
        backgroundImage: "../resources/images/Res-background/Olive-Garden.jpg",
        rating : "3.3/5"
    },
    {
        name: "Mucho Burrito",
        id: "mucho_burrito",
        img: root+"/mucho_burrito/mbLogo.jpg",
        type: ['Mexican'],
        foodItems: [
            {
                name: "Zesty Chimichurri",
                img: root+"/mucho_burrito/signature/zesty.png",
                restaurant: "Mucho Burrito",
                dish: "Zesty Chimichurri Bowl"
            },
            {
                name: "Chips & Salsa",
                img: root+"/mucho_burrito/sides/salsa.jpg",
                restaurant: "Mucho Burrito",
                dish: "Tortilla Chips with Salsa"
            },
            {
                name: "Build Your Own",
                img: root+"/mucho_burrito/build_your_own/burrito.jpg",
                restaurant: "Mucho Burrito",
                dish: "Build Your Own Burrito"
            }
        ],
        distance: 6.4,
        time: 55,
        price: 20,
        popularity: 2,
        description: "Mexican-inspired food that lives up to their promise: Fresh Mexican Grill. Mucho Burrito only serves food that is mucho real and mucho fresh. It’s made by hand right in front of our guests’ eyes, using only the freshest ingredients, free of artificial flavours and preservatives.",
        backgroundColour: '#fdfdfd',
        textColour: '#000000',
        backgroundImage: "../resources/images/Res-background/Mucho-Burrito.jpg",
        rating : "3.5/5"
    },
    {
        name: "Asia Palace",
        id: "asia_palace",
        img: root+"/asia_palace/apLogo.jpeg",
        type: ['Asian', 'Vietnamese'],
        foodItems: [
            {
                name: "General's Chicken",
                img: root+"/asia_palace/chicken/general.jpg",
                restaurant: "Asia Palace",
                dish: "General's Chicken"
            },
            {
                name: "Shrimp Chow Mein",
                img: root+"/asia_palace/chow_mein/shrimp.png",
                restaurant: "Asia Palace",
                dish: "Shrimp Chow Mein"
            },
            {
                name: "Vegetable Fried Rice",
                img: root+"/asia_palace/fried_rice/veg.png",
                restaurant: "Asia Palace",
                dish: "Vegetable Fried Rice"
            }
        ],
        distance: 2.9,
        time: 25,
        price: 15,
        popularity: 3,
        description: "Relaxed restaurant serving a menu of Pan-Asian dishes.",
        backgroundColour: '#f37022',
        backgroundImage: "../resources/images/Res-background/Asia-Palace.jpg",
        rating : "4.2/5"
    },
    {
        name: "Kimchi Sushi",
        id: "kimchi_sushi",
        img: root+"/kimchi_sushi/ksLogo.jpg",
        type: ['Sushi', 'Japanese', 'Korean', 'Asian'],
        foodItems: [
            {
                name: "Oyster Motoyaki",
                img: root+"/kimchi_sushi/appetizers/oyster.png",
                restaurant: "Kimchi Sushi",
                dish: "Oyster Motoyaki"
            },
            {
                name: "Chicken Teriyaki",
                img: root+"/kimchi_sushi/entrees/chicken.jpg",
                restaurant: "Kimchi Sushi",
                dish: "Chicken Teriyaki"
            },
            {
                name: "Kimchi Fried Rice",
                img: root+"/kimchi_sushi/kimchi/rice.png",
                restaurant: "Kimchi Sushi",
                dish: "Kimchi Fried Rice"
            }
        ],
        distance: 7.9,
        time: 55,
        price: 20,
        popularity: 2,
        description: "Kimchi Sushi offers a wide range of excellent Japanese and Korean dishes, from classic sushi, sashimi, and tempura dishes, to Korean dishes like Bibimpap, Bulgogi, and more.",
        backgroundColour: '#000000',
        backgroundImage: "../resources/images/Res-background/Kimchi-sushi.jpg",
        rating : "3.9/5"
    },
    {
        name: "Boston Pizza",
        id: "boston_pizza",
        img: root+"/boston_pizza/bpLogo.jpg",
        type: ['Pizza', 'Italian'],
        foodItems: [
            {
                name: "Pizza Bread",
                img: root+"/boston_pizza/appetizer/pizza.png",
                restaurant: "Boston Pizza",
                dish: "Bandera Pizza Bread"
            },
            {
                name: "Jambalaya",
                img: root+"/boston_pizza/main/pasta.png",
                restaurant: "Boston Pizza",
                dish: "Jambalaya Fettuccini"
            },
            {
                name: "Pizza",
                img: root+"/boston_pizza/pizza/pizza.png",
                restaurant: "Boston Pizza",
                dish: "Build Your Own"
            }
        ],
        distance: 5.1,
        time: 45,
        price: 38,
        popularity: 4,
        description: "Famous for our gourmet pizzas made with our signature hand pressed dough, our extensive menu satisfies every appetite with our mouth-watering pasta dishes and a wide variety of, salads, entrées and desserts.",
        backgroundColour: '#fbffff',
        textColour: '#000000',
        backgroundImage: "../resources/images/Res-background/Boston-Pizza.jpg",
        rating : "3.2/5"
    },
    {
        name: "Clay Oven",
        id: "clay_oven",
        img: root+"/clay_oven/coLogo2.png",
        type: ['Indian', 'Asian'],
        foodItems: [
            {
                name: "Vegetable Samosa",
                img: root+"/clay_oven/appetizer/samosa.jpg",
                restaurant: "Clay Oven",
                dish: "Vegetable Samosa (4)"
            },
            {
                name: "Garlic Naan",
                img: root+"/clay_oven/bread/garlic.jpg",
                restaurant: "Clay Oven",
                dish: "Garlic Naan (3)"
            },
            {
                name: "Lamb Curry",
                img: root+"/clay_oven/curry/lamb.jpg",
                restaurant: "Clay Oven",
                dish: "Lamb Curry"
            }
        ],
        distance: 4.4,
        time: 35,
        price: 30,
        popularity: 1,
        description: "Clay Oven Restaurant proudly boasts of the best menu and the most delicious food.Delight in our appetizing soups and snacks. Both vegetarians and non vegetarians can enjoy our culinary feasts.",
        backgroundColour: '#000000',
        backgroundImage: "../resources/images/Res-background/Clay-Oven.jpg",
        rating : "4.8/5"
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
    backgroundColour: ''
},
*/