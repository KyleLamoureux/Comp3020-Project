const mRoot = "../resources/images/restaurant-page/restaurants";

const constDrinks = [
    {
        name : 'Coca-Cola',
        description : 'Cool and refreshing classic',
        price : 0.99,
        image : mRoot+'/global_menu/coke.jpg',
        options : {
        }
    },
    {
        name : 'Diet Coke',
        description : 'Cool and refreshing classic',
        price : 0.99,
        image : mRoot+'/global_menu/dietCoke.png',
        options : {
        }
    },
    {
        name : 'Root Beer',
        description : 'Cool and refreshing classic',
        price : 0.99,
        image : mRoot+'/global_menu/rootBeer.jpg',
        options : {
        }
    },
    {
        name : 'Ginger Ale',
        description : 'Cool and refreshing classic',
        price : 0.99,
        image : mRoot+'/global_menu/ginger.jpg',
        options : {
        }
    }
]


const buildYourOwnOptions = {
    Protein : {
        type : 'radio',
        data : [
            {
                name : 'Chicken',
                price : 1.00
            },
            {
                name : 'Beef',
                price : 1.50
            },
            {
                name : 'Pork',
                price : 1.25
            },
            {
                name: 'Beyond Meat',
                price : 0.75
            }
        ]
    },
    Toppings : {
        type : 'checkbox',
        data : [
            {
                name : 'Corn',
                price : 0.00
            },
            {
                name : 'Rice',
                price : 0.00
            },
            {
                name : 'Beans',
                price : 0.00
            },
            {
                name : 'Grilled veg',
                price : 0.00
            },
            {
                name : 'Lettuce',
                price : 0.00
            },
            {
                name : 'Cheese',
                price : 0.00
            }
        ]
    },
    Sauce : {
        type : 'checkbox',
        data : [
            {
                name : 'Sour cream',
                price : 0.00
            },
            {
                name : 'Salsa',
                price : 0.00
            },
            {
                name : 'Guacamole',
                price : 1.25
            },
        ]
    }
}


const menus = {
    'Perkins' : {
        'Omelets' : [
            {
                name : "Granny's Country",
                description : 'Filled with diced grilled ham, onions, green peppers, American cheese, cheese sauce and crispy hash browns. Topped with all of the same!',
                price : 9.99,
                image : mRoot+'/perkins/omelets/granny.jpg',
                options : {
                    Alterations : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'No green peppers',
                                price : -0.40,
                            },
                            {
                                name : 'No onions',
                                price : -0.20
                            },
                            {
                                name : 'No cheese',
                                price : -1.00
                            }
                        ]
                    },
                    Extras : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'Add 1 more egg',
                                price : 1.50
                            },
                            {
                                name : 'Double cheese',
                                price : 0.75
                            },
                            {
                                name : 'Double ham',
                                price : 2.00
                            }
                        ]
                    }
                }
            },
            {
                name : 'The Everything',
                description : 'Diced grilled ham, crimini mushrooms, tomatoes, onions, green peppers and American cheese - this classic omelet has it all!',
                price : 10.99,
                image : mRoot+'/perkins/omelets/everything.jpg',
                options : {
                    Alterations : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'No mushrooms',
                                price : -0.40,
                            },
                            {
                                name : 'No tomatoes',
                                price : -0.20
                            },
                            {
                                name : 'No green peppers',
                                price : -0.50
                            },
                            {
                                name : 'No cheese',
                                price : -0.75
                            }
                        ]
                    },
                    Extras : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'Add 1 more egg',
                                price : 1.50
                            },
                            {
                                name : 'Double cheese',
                                price : 0.75
                            },
                            {
                                name : 'Double ham',
                                price : 2.00
                            }
                        ]
                    }
                }
            },
            {
                name : "Meat 'n Potatoes",
                description : 'Pork sausage, Applewood smoked bacon, smoked ham, grilled red onions and Cheddar atop an omelet stuffed with more of the same, plus crispy tots.',
                price : 9.99,
                image : mRoot+'/perkins/omelets/ham.jpg',
                options : {
                    Alterations : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'No onions',
                                price : -0.20
                            },
                            {
                                name : 'No cheese',
                                price : -1.00
                            }
                        ]
                    },
                    Extras : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'Add 1 more egg',
                                price : 1.50
                            },
                            {
                                name : 'Double pork sausage',
                                price : 2.00
                            },
                            {
                                name : 'Double smoked ham',
                                price : 2.00
                            },
                            {
                                name : 'Double applewoof smoked bacon',
                                price : 2.00
                            }
                        ]
                    }
                }
            },
            {
                name : "HAM 'N CHEESE",
                description : 'A traditional favorite of diced grilled ham and American cheese. Served with three buttermilk pancakes. No sides',
                price : 9.99,
                image : mRoot+'/perkins/omelets/meat.jpg',
                options : {
                    Alterations : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'No cheese',
                                price : -1.00
                            }
                        ]
                    },
                    Extras : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'Add 1 more egg',
                                price : 1.50
                            },
                            {
                                name : 'Double cheese',
                                price : 0.75
                            },
                            {
                                name : 'Double Ham',
                                price : 2.00
                            }
                        ]
                    }
                }
            }
        ],
        'Griddle' : [
            {
                name : 'Scratch-Made Belgian Waffle Platter',
                description : 'A Belgian Waffle dusted with powdered sugar for the perfect dash of sweetness.',
                price : 9.99,
                image : mRoot+'/perkins/griddle/waffle.jpg',
                options : {
                    Extras : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'Additional syrup',
                                price : 0.70
                            }
                        ]
                    }
                }
            },
            {
                name : 'Strawberry Crepes Platter',
                description : 'Two light delicate crepes with a sweet vanilla cream cheese, topped with fresh glazed strawberries, powdered sugar and whipped topping.',
                price : 11.99,
                image : mRoot+'/perkins/griddle/crepe.jpg',
                options : {
                    Extras : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'Double strawberries',
                                price : 1.50
                            }
                        ]
                    }
                }
            },
            {
                name : 'Brioche French Toast Platter',
                description : 'Two slices of thick-cut brioche bread dipped in our signature batter, grilled and sprinkled with powdered sugar.',
                price : 10.99,
                image : mRoot+'/perkins/griddle/french.jpg',
                options : {
                    Extras : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'Additional syrup',
                                price : 0.70
                            }
                        ]
                    }
                }
            },
            {
                name : 'Blueberry Buttermilk Pancake Platter',
                description : 'Three buttermilk pancakes loaded with juicy blueberries, grilled and sprinkled with powdered sugar.',
                price : 9.99,
                image : mRoot+'/perkins/griddle/pancake.jpg',
                options : {
                    Extras : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'Additional syrup',
                                price : 0.70
                            },
                            {
                                name : 'Double blueberries',
                                price : 1.50
                            }
                        ]
                    }
                }
            }
        ],
        'Sandwiches' : [
            {
                name : 'Sonoma Chicken Salad Croissant',
                description : 'A flaky, buttery croissant loaded with a blend of smoked, pulled chicken, red grapes, celery, walnuts and fresh leaf lettuce.',
                price : 9.99,
                image : mRoot+'/perkins/sandwiches/sonoma.jpg',
                options : {
                    Alterations : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'No walnuts',
                                price : -0.50
                            }
                        ]
                    },
                    Extras : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'Double chicken',
                                price : 1.75
                            },
                        ]
                    }
                }
            },
            {
                name : 'Triple Decker Club',
                description : 'Oven-roasted turkey, Applewood smoked bacon, tomato, lettuce and mayo on white or whole wheat toast.',
                price : 11.99,
                image : mRoot+'/perkins/sandwiches/club.jpg',
                options : {
                    Alterations : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'No tomato',
                                price : -0.20
                            },
                            {
                                name : 'No mayo',
                                price : -0.15
                            }
                        ]
                    },
                    Extras : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'Double bacon',
                                price : 1.75
                            },
                            {
                                name : 'Double turkey',
                                price : 1.75
                            }
                        ]
                    }
                }
            },
            {
                name : 'French Dip',
                description : 'Warm, sliced roast beef, Swiss cheese and grilled onions on a grilled hoagie with au jus for dipping.',
                price : 10.99,
                image : mRoot+'/perkins/sandwiches/dip.jpg',
                options : {
                    Alterations : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'No cheese',
                                price : -0.50
                            }
                        ]
                    },
                    Extras : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'Double roast beef',
                                price : 0.75
                            },
                        ]
                    }
                }
            },
            {
                name : "Ham 'N Cheese Melt",
                description : 'Warm, deli-shaved ham, Applewood smoked bacon and melted American cheese on grilled sourdough bread with Honey Mustard dipping sauce.',
                price : 9.99,
                image : mRoot+'/perkins/sandwiches/hamCheese.jpg',
                options : {
                    Alterations : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'No cheese',
                                price : -0.50
                            }
                        ]
                    },
                    Extras : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'Double ham',
                                price : 1.75
                            },
                            {
                                name : 'Double bacon',
                                price : 1.75
                            }
                        ]
                    }
                }
            }
        ],
        'Dessert' : [
            {
                name : 'Banana Cream',
                description : 'Loaded with hand-sliced bananas and topped with real whipped cream and chopped walnuts.',
                price : 6.99,
                image : mRoot+'/perkins/desserts/banana.jpg',
                options : {
                    Alterations : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'No walnuts',
                                price : -0.50
                            }
                        ]
                    },
                }
            },
            {
                name : 'Homestyle Apple',
                description : 'Juicy sweet apples baked fresh inside a golden flaky crust.',
                price : 6.99,
                image : mRoot+'/perkins/desserts/apple.jpg',
                options : {
                    Extras : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'Add whip cream',
                                price : 0.10
                            }
                        ]
                    },
                }
            },
            {
                name : 'Cherry',
                description : 'Sweet and tangy cherries baked inside a golden double crust.',
                price : 6.99,
                image : mRoot+'/perkins/desserts/cherry.jpg',
                options : {
                    Extras : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'Add whip cream',
                                price : 0.10
                            }
                        ]
                    },
                }
            },
            {
                name : 'Chocolate French Silk',
                description : 'Creamy chocolate topped with real whipped cream and dark chocolate curls.',
                price : 6.99,
                image : mRoot+'/perkins/desserts/chocolate.jpg',
                options : {

                }
            }
        ],
        'Drinks' : constDrinks 
    },
    'McDonalds' : {
        'Burgers' : [
            {
                name : 'Big Mac',
                description : 'Mouthwatering perfection starts with two 100% pure beef patties and Big Mac sauce sandwiched between a sesame seed bun. It’s topped off with pickles, crisp shredded lettuce, finely chopped onion and American cheese.',
                price : 6.99,
                image : mRoot+'/mcdonalds/burgers/bigmac.jpg',
                options : {
                    Extras : {
                        type : 'radio',
                        data : [
                            {
                                name : 'Small fry',
                                price : 0.75
                            },
                            {
                                name : 'Medium fry',
                                price : 1.25
                            },
                            {
                                name : 'Large fry',
                                price : 2.00
                            }
                        ]
                    },
                    Alterations : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'No pickles',
                                price : -0.40,
                            },
                            {
                                name : 'No onions',
                                price : -0.20
                            },
                            {
                                name : 'No cheese',
                                price : -1.00
                            }
                        ]
                    }
                }  
            },
            {
                name : 'Quarter Pounder',
                description : '¼ lb. of 100% fresh beef that’s hot, deliciously juicy and cooked when you order. It’s seasoned with just a pinch of salt and pepper, sizzled on a flat iron grill, then topped with slivered onions, tangy pickles and two slices of melty American cheese on a sesame seed bun.',
                price : 5.99,
                image : mRoot+'/mcdonalds/burgers/quarter.jpg',
                options : {
                    Extras : {
                        type : 'radio',
                        data : [
                            {
                                name : 'Small fry',
                                price : 0.75
                            },
                            {
                                name : 'Medium fry',
                                price : 1.25
                            },
                            {
                                name : 'Large fry',
                                price : 2.00
                            }
                        ]
                    },
                    Alterations : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'No pickles',
                                price : -0.40,
                            },
                            {
                                name : 'No onions',
                                price : -0.20
                            },
                            {
                                name : 'No cheese',
                                price : -1.00
                            }
                        ]
                    }
                }
            },
            {
                name : 'McDouble',
                description : 'Two 100% pure beef patties seasoned with just a pinch of salt and pepper. It’s topped with tangy pickles, chopped onions, ketchup, mustard and a slice of melty American cheese.',
                price : 2.99,
                image : mRoot+'/mcdonalds/burgers/mcdouble.jpg',
                options : {
                    Extras : {
                        type : 'radio',
                        data : [
                            {
                                name : 'Small fry',
                                price : 0.75
                            },
                            {
                                name : 'Medium fry',
                                price : 1.25
                            },
                            {
                                name : 'Large fry',
                                price : 2.00
                            }
                        ]
                    },
                    Alterations : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'No pickles',
                                price : -0.40,
                            },
                            {
                                name : 'No onions',
                                price : -0.20
                            },
                            {
                                name : 'No cheese',
                                price : -1.00
                            }
                        ]
                    }
                }
            },
            {
                name : 'Cheeseburger',
                description : "Our simple, classic cheeseburger begins with a 100% pure beef patty seasoned with just a pinch of salt and pepper. It's topped with a tangy pickle, chopped onions, ketchup, mustard, and a slice of melty American cheese.",
                price : 1.99,
                image : mRoot+'/mcdonalds/burgers/cheeseburger.jpg',
                options : {
                    Extras : {
                        type : 'radio',
                        data : [
                            {
                                name : 'Small fry',
                                price : 0.75
                            },
                            {
                                name : 'Medium fry',
                                price : 1.25
                            },
                            {
                                name : 'Large fry',
                                price : 2.00
                            }
                        ]
                    },
                    Alterations : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'No pickles',
                                price : -0.40,
                            },
                            {
                                name : 'No onions',
                                price : -0.20
                            },
                            {
                                name : 'No cheese',
                                price : -1.00
                            }
                        ]
                    }
                }
            }
        ],
        'Chicken And Sandwiches' : [
            {
                name : 'Chicken McNuggets',
                description : 'Our tender, juicy Chicken McNuggets® are made with 100% white meat chicken and no artificial colors, flavors or preservatives.',
                price : 2.99,
                image : mRoot+'/mcdonalds/chickenAndSandwiches/nuggets.jpg',
                options : {
                    Quantity : {
                        type : 'radio',
                        data : [
                            {
                                name : '4',
                                price : 2.99
                            },
                            {
                                name : '10',
                                price : 5.99
                            },
                            {
                                name : '20',
                                price : 10.99
                            },
                            {
                                name : '40',
                                price : 22.00
                            }
                        ]
                    },
                    Sauces : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'Sweet & Sour',
                                price : 0.50
                            },
                            {
                                name : 'Sweet & Sour',
                                price : 0.50
                            },
                            {
                                name : 'Sweet & Sour',
                                price : 0.50
                            },
                            {
                                name : 'BBQ',
                                price : 0.50
                            },
                            {
                                name : 'BBQ',
                                price : 0.50
                            },
                            {
                                name : 'BBQ',
                                price : 0.50
                            }
                        ]
                    }
                }
            },
            {
                name : 'Buttermilk Crispy Chicken Sandwich',
                description : "McDonald's Buttermilk Crispy Chicken Sandwich is made with all white meat chicken and no added colors. It's layered with crisp, green leaf lettuce and tasty tomato and mayonnaise and served up on a delectable artisan roll.",
                price : 5.99,
                image : mRoot+'/mcdonalds/chickenAndSandwiches/crispy.jpg',
                options : {
                    Extras : {
                        type : 'radio',
                        data : [
                            {
                                name : 'Small fry',
                                price : 0.75
                            },
                            {
                                name : 'Medium fry',
                                price : 1.25
                            },
                            {
                                name : 'Large fry',
                                price : 2.00
                            }
                        ]
                    },
                    Alterations : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'No onions',
                                price : -0.20
                            }
                        ]
                    }
                }
            },
            {
                name : 'McChicken',
                description : 'A delightfully crispy chicken sandwich with a crispy chicken fillet topped with mayonnaise, shredded iceberg lettuce, and served on a perfectly toasty bun.',
                price : 4.99,
                image : mRoot+'/mcdonalds/chickenAndSandwiches/mcChicken.jpg',
                options : {
                    Extras : {
                        type : 'radio',
                        data : [
                            {
                                name : 'Small fry',
                                price : 0.75
                            },
                            {
                                name : 'Medium fry',
                                price : 1.25
                            },
                            {
                                name : 'Large fry',
                                price : 2.00
                            }
                        ]
                    },
                    Alterations : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'No mayo',
                                price : -0.20,
                            },
                            {
                                name : 'No lettuce',
                                price : -0.20
                            },
                        ]
                    }
                }
            },
            {
                name : 'Filet-O-Fish',
                description : 'Sourced from sustainable fisheries, topped with melty American cheese and creamy tartar sauce, and served on a soft, steamed bun.',
                price : 3.99,
                image : mRoot+'/mcdonalds/chickenAndSandwiches/fish.jpg',
                options : {
                    Extras : {
                        type : 'radio',
                        data : [
                            {
                                name : 'Small fry',
                                price : 0.75
                            },
                            {
                                name : 'Medium fry',
                                price : 1.25
                            },
                            {
                                name : 'Large fry',
                                price : 2.00
                            }
                        ]
                    },
                    Alterations : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'No tartar sauce',
                                price : -0.40,
                            },
                            {
                                name : 'No cheese',
                                price : -1.00
                            }
                        ]
                    }
                }
            }
        ],
        'Desserts' : [
            {
                name : 'Vanilla Cone',
                description : 'Enjoy our creamy vanilla soft serve in a crispy cone!',
                price : 0.99,
                image : mRoot+'/mcdonalds/desserts/cone.jpg',
                options : {

                }
            },
            {
                name : 'Baked Apple Pie',
                description : "McDonald's Baked Apple Pie is loaded with 100% American-grown apples, with a lattice crust baked to perfection and topped with sprinkled sugar.",
                price : 1.99,
                image : mRoot+'/mcdonalds/desserts/apple.jpg',
                options : {

                }
            },
            {
                name : 'McFlurry with Oreo Cookies',
                description : 'The McDonald’s McFlurry with OREO Cookies is an popular combination of OREO pieces and vanilla soft serve!',
                price : 3.99,
                image : mRoot+'/mcdonalds/desserts/flurry.jpg',
                options : {

                }
            },
            {
                name : 'Chocolate Shake',
                description : 'McDonald’s Chocolate Shake is a delicious chocolate dessert made with our creamy vanilla soft serve and chocolate syrup, topped with whipped topping.',
                price : 3.99,
                image : mRoot+'/mcdonalds/desserts/shake.jpg',
                options : {

                }
            }
        ],
        'Drinks' : constDrinks
    },
    'Olive Garden' : {
        'Appetizers' : [
            {
                name : 'Calamari',
                description : 'Tender calamari, lightly breaded and fried. Served with marinara sauce.',
                price : 13.29,
                image : mRoot+'/olive_garden/appetizer/calamari.jpg',
                options : {
                    Additions : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'Add extra sauce',
                                price : 1.00
                            }
                        ]
                    }
                }
            },
            {
                name : 'Stuffed Ziti Fritta',
                description : 'Crispy fried ziti filled with five cheeses. Served with alfredo and marinara dipping sauces.',
                price : 9.99,
                image : mRoot+'/olive_garden/appetizer/stuffed.jpg',
                options : {
                    Additions : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'Add extra sauce',
                                price : 1.00
                            }
                        ]
                    }
                }
            },
            {
                name : 'Spinach-Artichoke Dip',
                description : 'A blend of spinach, artichokes and five cheeses served warm with NEW flatbread crisps, tossed with parmesan and garlic salt.',
                price : 11.99,
                image : mRoot+'/olive_garden/appetizer/spinach.jpg',
                options : {

                }
            },
            {
                name : 'Classic Shrimp Scampi Fritta',
                description : 'Lightly breaded, fried and tossed in our signature scampi sauce.',
                price : 13.29,
                image : mRoot+'/olive_garden/appetizer/shrimp.jpg',
                options : {

                }
            }
        ],
        'Entrees' : [
            {
                name : 'Chicken Alfredo',
                description : 'Not everyone knows our signature alfredo sauce is made from scratch daily. This homemade sauce combines simple, fresh ingredients like butter, cream and parmesan cheese to make a rich topping to our fettuccine pasta. Then it is topped with tender, sliced grilled chicken.',
                price : 23.29,
                image : mRoot+'/olive_garden/entree/alfredo.jpg',
                options : {
                    Extras : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'Double chicken',
                                price : 4.00
                            }
                        ]
                    },
                }
            },
            {
                name : 'Tour of Italy',
                description : 'Three OG classics all on one plate! Chicken Parmigiana, Lasagna Classico** and our signature Fettuccine Alfredo – all with homemade sauces made fresh every morning.',
                price : 25.49,
                image : mRoot+'/olive_garden/entree/tour.jpg',
                options : {

                }
            },
            {
                name : 'Lasagna Classico',
                description : 'Prepared fresh daily with layers of pasta, parmesan, mozzarella, pecorino romano and our homemade meat sauce.',
                price : 19.29,
                image : mRoot+'/olive_garden/entree/lasagna.jpg',
                options : {

                }
            },
            {
                name : 'Chicken Parmigiana',
                description : 'Two lightly fried parmesan-breaded chicken breasts are smothered with Olive Garden’s homemade marinara sauce and melted Italian cheeses. We serve our Chicken Parmigiana with a side of spaghetti for dinner.',
                price : 22.49,
                image : mRoot+'/olive_garden/entree/tour.jpg',
                options : {
                    Extras : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'Double chicken',
                                price : 4.00
                            }
                        ]
                    },
                }
            }
        ],
        'Desserts' : [
            {
                name : 'Pumpkin Cheesecake',
                description : 'Pumpkin Cheesecake topped with caramel sauce. Served with whipped cream.',
                price : 9.29,
                image : mRoot+'/olive_garden/dessert/pumpkin.jpg',
                options : {
                    Extras : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'Scoop of vanilla icecream',
                                price : 1.50
                            }
                        ]
                    },
                }
            },
            {
                name : 'Tiramisu',
                description : 'The classic Italian dessert. A layer of creamy custard set atop espresso-soaked ladyfingers.',
                price : 8.99,
                image : mRoot+'/olive_garden/dessert/tiramisu.jpg',
                options : {
                    Extras : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'Add whipcream',
                                price : 0.75
                            },
                            {
                                name : 'Scoop of vanilla icecream',
                                price : 1.50
                            }
                        ]
                    },
                }
            },
            {
                name : 'Black Tie Mousse Cake',
                description : 'Rich layers of chocolate cake, dark chocolate cheesecake and creamy custard mousse.',
                price : 8.99,
                image : mRoot+'/olive_garden/dessert/tie.jpg',
                options : {
                    Extras : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'Scoop of vanilla icecream',
                                price : 1.50
                            }
                        ]
                    },
                }
            },
            {
                name : 'Chocolate Brownie Lasagna',
                description : 'Eight decadent layers of rich, fudgy brownie and sweet vanilla cream cheese frosting, topped with chocolate shavings and a chocolate drizzle.',
                price : 8.99,
                image : mRoot+'/olive_garden/dessert/chocolate.jpg',
                options : {
                    Extras : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'Add whipcream',
                                price : 0.75
                            },
                            {
                                name : 'scoop of vanilla icecream',
                                price : 1.50
                            }
                        ]
                    },
                }
            }
        ],
        'Drinks' : constDrinks
    },
    'Mucho Burrito' : {
        'Signature' : [
            {
                name : 'Smoked Peach + Chili Mango Bowl',
                description : 'Chili-mango sauce, peach & mango chili salsa, tomato-cucumber salad, crispy jalapeño chips and chipotle-peach crema.',
                price : 12.99,
                image : mRoot+'/mucho_burrito/signature/peach.png',
                options : {
                    
                }
            },
            {
                name : 'Zesty Chimichurri Bowl',
                description : 'House-made cilantro & lime chimichurri sauce, roasted seasonal squash, in-house pickled red onions, tricoloured tortilla strips and serrano-chili crema.',
                price : 12.99,
                image : mRoot+'/mucho_burrito/signature/zesty.png',
                options : {

                }
            },
            {
                name : 'Grilled Pineapple Chili Bowl',
                description : 'Caramelized pineapple & jalapeño sauce, grilled pineapple, in-house pickled red onions, crispy jalapeño chips and pineapple-habanero crema.',
                price : 12.99,
                image : mRoot+'/mucho_burrito/signature/pineapple.png',
                options : {

                }
            },
            {
                name : 'Ghost Pepper Burrito',
                description : 'Ghost pepper bacon, ghost pepper & fig marmalade, chipotle black beans, salsa, sour cream, Monterey Jack cheese, ghost pepper hot sauce, jalapeños.',
                price : 11.99,
                image : mRoot+'/mucho_burrito/signature/ghost.png',
                options : {
                    Extras : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'Double protein',
                                price : 3.50
                            }
                        ]
                    },
                }
            }
        ],
        'Custom' : [
            {
                name : 'Build Your Own Burrito',
                description : 'Fresh and fantastic, our burritos can be built anyway you like. Customize it with your choice of base, protein, beans, veggies, cheese, toppings, cilantro, jalapeno and sauce.',
                price : 9.99,
                image : mRoot+'/mucho_burrito/build_your_own/burrito.jpg',
                options : buildYourOwnOptions
            },
            {
                name : 'Build Your Own Taco (3)',
                description : 'Fresh and fantastic, our tacos can be built anyway you like. Customize it with your choice of base, protein, beans, veggies, cheese, toppings, cilantro, jalapeno and sauce.',
                price : 8.99,
                image : mRoot+'/mucho_burrito/build_your_own/taco.jpg',
                options : buildYourOwnOptions
            },
            {
                name : 'Build Your Own Bowl',
                description : 'Fresh and fantastic, our bowls can be built anyway you like. Customize it with your choice of base, protein, beans, veggies, cheese, toppings, cilantro, jalapeno and sauce.',
                price : 10.99,
                image : mRoot+'/mucho_burrito/build_your_own/bowl.jpg',
                options : buildYourOwnOptions
            },
            {
                name : 'Build Your Own Quesadilla',
                description : 'Fresh and fantastic, our quesadillas can be built anyway you like. Customize it with your choice of base, protein, beans, veggies, cheese, toppings, cilantro, jalapeno and sauce.',
                price : 9.99,
                image : mRoot+'/mucho_burrito/build_your_own/quesa.jpg',
                options : buildYourOwnOptions
            }
        ],
        'Sides' : [
            {
                name : 'Tortilla Chips with Salsa',
                description : 'Fresh everyday tortilla chips and salsa',
                price : 2.25,
                image : mRoot+'/mucho_burrito/sides/salsa.jpg',
                options : {
                    Upscale : {
                        type : 'radio',
                        data : [
                            {
                                name : 'Large',
                                price : 3.50
                            },
                            {
                                name : 'Huge',
                                price : 6.00
                            }
                        ]
                    },
                }
            },
            {
                name : 'Tortilla Chips with Queso',
                description : 'Fresh everyday tortilla chips and queso',
                price : 2.75,
                image : mRoot+'/mucho_burrito/sides/queso.jpg',
                options : {
                    Upscale : {
                        type : 'radio',
                        data : [
                            {
                                name : 'Large',
                                price : 3.50
                            },
                            {
                                name : 'Huge',
                                price : 6.00
                            }
                        ]
                    },
                }
            },
            {
                name : 'Tortilla Chips with Guacamole',
                description : 'Fresh everyday tortilla chips and guacamole',
                price : 3.25,
                image : mRoot+'/mucho_burrito/sides/guac.jpg',
                options : {
                    Upscale : {
                        type : 'radio',
                        data : [
                            {
                                name : 'Large',
                                price : 3.50
                            },
                            {
                                name : 'Huge',
                                price : 6.00
                            }
                        ]
                    },
                }
            },
        ],
        'Drinks' : constDrinks
    },
    'Asia Palace' : {
        'Appetizers' : [
            {
                name : 'Crab Rangoon (5 pcs)',
                description : 'Five deep-fried dumplings filled with cream cheese and crab meat.',
                price : 7.99,
                image : mRoot+'/asia_palace/appetizers/crab.jpg',
                options : {

                }
            },
            {
                name : 'Shrimp Salad Rolls (2 pcs)',
                description : 'Fresh vegetables, rice noodles, steamed shrimp, and herbs wrapped in rice paper.',
                price : 4.99,
                image : mRoot+'/asia_palace/appetizers/shrimp.jpg',
                options : {

                }
            },
            {
                name : 'Tofu Salad Rolls (2 pcs)',
                description : 'Fresh vegetables, rice noodles, tofu, and herbs wrapped in rice paper.',
                price : 3.99,
                image : mRoot+'/asia_palace/appetizers/tofu.png',
                options : {

                }
            },
        ],
        'Chicken' : [
            {
                name : "General's Chicken",
                description : 'Breaded, fried chicken in a sweet and slightly spicy sauce.',
                price : 11.99,
                image : mRoot+'/asia_palace/chicken/general.jpg',
                options : {
                    Spice : {
                        type : 'radio',
                        data : [
                            {
                                name : 'Mild',
                                price : 0.00
                            },
                            {
                                name : 'Medium',
                                price : 0.00
                            },
                            {
                                name : 'High',
                                price : 0.00
                            }
                        ]
                    }
                }
            },
            {
                name : 'Chinese Butter Chicken',
                description : 'Breaded, fried chicken in a creamy sauce made with curry leaves and chilies.',
                price : 12.99,
                image : mRoot+'/asia_palace/chicken/butter.jpg',
                options : {
                    Spice : {
                        type : 'radio',
                        data : [
                            {
                                name : 'Mild',
                                price : 0.00
                            },
                            {
                                name : 'Medium',
                                price : 0.00
                            },
                            {
                                name : 'High',
                                price : 0.00
                            }
                        ]
                    }
                }
            },
            {
                name : 'Kung Pao Chicken with Peanut',
                description : 'Tasty pieces of chicken and roasted peanuts are tossed in a spicy sauce.',
                price : 11.99,
                image : mRoot+'/asia_palace/chicken/peanut.png',
                options : {
                    Spice : {
                        type : 'radio',
                        data : [
                            {
                                name : 'Mild',
                                price : 0.00
                            },
                            {
                                name : 'Medium',
                                price : 0.00
                            },
                            {
                                name : 'High',
                                price : 0.00
                            }
                        ]
                    }
                }
            },
        ],
        'Chow Mein' : [
            {
                name : 'Deluxe Chow Mein',
                description : 'Barbeque pork, chicken, shrimp, scallop, squid, and fresh vegetables are stir-fried in a light sauce, and served over crispy noodles.',
                price : 11.99,
                image : mRoot+'/asia_palace/chow_mein/deluxe.jpg',
                options : {
                    Extras : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'Double beef',
                                price : 4.00
                            },
                            {
                                name : 'Double chicken',
                                price : 3.00
                            },
                            {
                                name : 'Double shrimp',
                                price : 4.00
                            },
                            {
                                name : 'Double scallop',
                                price : 4.50
                            },
                            {
                                name : 'Double squid',
                                price : 5.00
                            },
                        ]
                    }
                }
            },
            {
                name : 'Shrimp Chow Mein',
                description : 'Plump shrimp and fresh vegetables are stir-fried in a light sauce, and served over crispy noodles.',
                price : 13.99,
                image : mRoot+'/asia_palace/chow_mein/shrimp.png',
                options : {
                    Extras : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'Double shrimp',
                                price : 4.00
                            },
                        ]
                    }
                }
            },
            {
                name : 'Beef Chow Mein',
                description : 'Tender slices of beef and fresh vegetables are stir-fried in a light sauce, and served over crispy noodles.',
                price : 12.99,
                image : mRoot+'/asia_palace/chow_mein/beef.png',
                options : {
                    Extras : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'Double beef',
                                price : 4.00
                            },
                        ]
                    } 
                }
            },
        ],
        'Fried Rice' : [
            {
                name : 'Deluxe Fried Rice with BBQ Pork, Chicken, Shrimp',
                description : 'Chinese-style, wok-fried rice with vegetables, eggs, barbeque pork, chicken, and shrimp.',
                price : 14.99,
                image : mRoot+'/asia_palace/fried_rice/deluxe.jpg',
                options : {
                    Extras : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'Double pork',
                                price : 4.00
                            },
                            {
                                name : 'Double chicken',
                                price : 3.00
                            },
                            {
                                name : 'Double shrimp',
                                price : 4.00
                            }
                        ]
                    } 
                }
            },
            {
                name : 'Curry Seafood Fried Rice with Shrimp, Scallop, Pollock, Squid',
                description : '',
                price : 16.99,
                image : mRoot+'/asia_palace/fried_rice/curry.png',
                options : {
                    Alterations : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'No shrimp',
                                price : -1.25,
                            },
                            {
                                name : 'No scallop',
                                price : -1.25
                            },
                            {
                                name : 'No pollock',
                                price : -2.25
                            },
                            {
                                name : 'No squid',
                                price : -2.25
                            }
                        ]
                    },
                    Extras : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'Double shrimp',
                                price : 2.50
                            },
                            {
                                name : 'Double scallop',
                                price : 2.50
                            },
                            {
                                name : 'Double pollock',
                                price : 4.50
                            },
                            {
                                name : 'Double squid',
                                price : 4.50
                            },
                        ]
                    } 
                }
            },
            {
                name : 'Vegetable Fried Rice',
                description : '',
                price : 9.99,
                image : mRoot+'/asia_palace/fried_rice/veg.png',
                options : {
                    
                }
            },
        ],
        'Vietnamese Fusion' : [
            {
                name : 'Vietnamese Beef Noodle Soup',
                description : 'Sliced beef, onions, cilantro, and rice noodles in a flavourful and aromatic broth.',
                price : 9.99,
                image : mRoot+'/asia_palace/vietnamese/noodle.jpg',
                options : {
                    Extras : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'Double meat',
                                price : 4.00
                            }
                        ]
                    } 
                }
            },
            {
                name : 'Deluxe BBQ Pork Vermicelli Bowl',
                description : 'Sliced, seasoned barbecue pork and pork meatballs over a bowl of vermicelli rice noodles, with bean sprouts, cucumbers, carrots, lettuce',
                price : 10.99,
                image : mRoot+'/asia_palace/vietnamese/vermicelli.jpg',
                options : {
                    Extras : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'Double meat',
                                price : 4.00
                            }
                        ]
                    }
                }
            },
            {
                name : 'BBQ Pork Chop with Rice and BBQ Pork Sausage',
                description : 'A bowl of perfectly cooked rice topped with a barbequed pork chop and barbequed pork sausage.',
                price : 10.99,
                image : mRoot+'/asia_palace/vietnamese/pork.jpg',
                options : {
                    Extras : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'Double meat',
                                price : 4.00
                            }
                        ]
                    }
                }
            },
        ],
        'Drinks' : constDrinks
    },
    'Kimchi Sushi' : {
        'Appetizers' : [
            {
                name : 'Creamy Spicy Tempura',
                description : 'Tempura, mango, and green onions tossed in a creamy spicy sauce.',
                price : 6.99,
                image : mRoot+'/kimchi_sushi/appetizers/creamy.png',
                options : {
                }
            },
            {
                name : 'Supreme Shrimp Tempura',
                description : 'Shrimp and cream cheese wrapped in a phyllo pastry, deep-fried and served with a sweet chilli sauce.',
                price : 6.99,
                image : mRoot+'/kimchi_sushi/appetizers/supreme.png',
                options : {
                }
            },
            {
                name : 'Oyster Motoyaki',
                description : 'Spinach, mushrooms, and oysters grilled on a large half shell with miso mayo.',
                price : 7.99,
                image : mRoot+'/kimchi_sushi/appetizers/oyster.png',
                options : {
                }
            },
        ],
        'Entrees' : [
            {
                name : 'Tonkatsu',
                description : 'Deep-fried breaded pork cutlet with sauce on the side, served with house salad.',
                price : 14.99,
                image : mRoot+'/kimchi_sushi/entrees/katsu.jpg',
                options : {
                }
            },
            {
                name : 'Curry Chicken Katsu',
                description : 'Deep-fried breaded chicken cutlet with curry sauce on top, served with house salad.',
                price : 14.99,
                image : mRoot+'/kimchi_sushi/entrees/curry.png',
                options : {
                }
            },
            {
                name : 'Chicken Teriyaki',
                description : 'Grilled chicken and sauteed vegetables in teriyaki sauce.',
                price : 13.99,
                image : mRoot+'/kimchi_sushi/entrees/chicken.jpg',
                options : {
                    Extra : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'Soy sauce',
                                price : 0.00
                            },
                            {
                                name : 'Wasabi',
                                price : 0.10
                            }
                        ]
                    }
                }
            },
        ],
        'Rolls' : [
            {
                name : 'California Roll',
                description : 'Crab meat, avocado, cucumber, mayo, masago, and sesame seeds.',
                price : 8.99,
                image : mRoot+'/kimchi_sushi/rolls/cali.png',
                options : {
                    Extra : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'Soy sauce',
                                price : 0.00
                            },
                            {
                                name : 'Wasabi',
                                price : 0.10
                            }
                        ]
                    }
                }
            },
            {
                name : 'Spicy Salmon Roll',
                description : 'Salmon, cucumber, special spicy sauce, and sesame seeds.',
                price : 9.99,
                image : mRoot+'/kimchi_sushi/rolls/salmon.png',
                options : {
                    Extra : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'Soy sauce',
                                price : 0.00
                            },
                            {
                                name : 'Wasabi',
                                price : 0.10
                            }
                        ]
                    }
                }
            },
            {
                name : 'Bakudan Roll',
                description : 'Tempura crumbs, cucumber, special spicy sauce, and sesame seeds.',
                price : 8.99,
                image : mRoot+'/kimchi_sushi/rolls/bakudan.png',
                options : {
                    Extra : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'Soy sauce',
                                price : 0.00
                            },
                            {
                                name : 'Wasabi',
                                price : 0.10
                            }
                        ]
                    }
                }
            },
        ],
        'Kimchi' : [
            {
                name : 'Kimchi Fried Rice',
                description : 'Rice sauteed with kimchi, assorted vegetables, and assorted meat. Topped with a sunny-side egg.',
                price : 10.99,
                image : mRoot+'/kimchi_sushi/kimchi/rice.png',
                options : {
                    Extra : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'Additional egg',
                                price : 1.25
                            },
                            {
                                name : 'Double protein',
                                price : 3.50
                            }
                        ]
                    }
                }
            },
            {
                name : 'Kimchi Gyoza',
                description : 'Deep-fried dumplings stuffed with assorted meat, vegetables, and kimchi.',
                price : 10.99,
                image : mRoot+'/kimchi_sushi/kimchi/gyoza.png',
                options : {
                    Extra : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'Double protein',
                                price : 3.50
                            }
                        ]
                    }
                }
            },
            {
                name : 'Kimchi Tofu',
                description : 'Choice of fresh or pan-fried tofu topped with stir-fried kimchi, vegetables, and pork.',
                price : 10.99,
                image : mRoot+'/kimchi_sushi/kimchi/tofu.png',
                options : {
                    Style : {
                        type : 'radio',
                        data : [
                            {
                                name : 'pan-fried tofu',
                                price : 0.00
                            },
                            {
                                name : 'fresh tofu',
                                price : 0.00
                            }
                        ]
                    }
                }
            },
        ],
        'Drinks' : constDrinks
    },
    'Boston Pizza' : {
        'Appetizer' : [
            {
                name : 'All Meat Bites',
                description : 'Seasoned chicken breast pieces, lightly breaded and fried.',
                price : 7.99,
                image : mRoot+'/boston_pizza/appetizer/bite.png',
                options : {
                    'Dipping Sauce' : {
                        type : 'radio',
                        data : [
                            {
                                name : 'Sante Fe ranch dip',
                                price : 0.00
                            },
                            {
                                name : 'Ranch dip',
                                price : 0.00
                            },
                            {
                                name : 'Cheese dip',
                                price : 0.00
                            }
                        ]
                    }
                }
            },
            {
                name : 'Bandera Pizza Bread',
                description : 'Pizza bread, Italian spices, pizza mozzarella and freshly grated Parmesan. Served with Santa Fe ranch dip.',
                price : 7.99,
                image : mRoot+'/boston_pizza/appetizer/pizza.png',
                options : {
                    'Dipping Sauce' : {
                        type : 'radio',
                        data : [
                            {
                                name : 'Sante Fe ranch dip',
                                price : 0.00
                            },
                            {
                                name : 'Marinara dip',
                                price : 0.00
                            },
                            {
                                name : 'Cheese dip',
                                price : 0.00
                            }
                        ]
                    }
                }
            },
        ],
        'Main' : [
            {
                name : 'Slow-Roasted Pork Back Ribs',
                description : 'Our tender ribs are slow-cooked with our blend of spices, and finished with your choice of sauce. Served with seasonal vegetables.',
                price : 17.99,
                image : mRoot+'/boston_pizza/main/rib.png',
                options : {
                    Sauce : {
                        type : 'radio',
                        data : [
                            {
                                name : 'House BBQ',
                                price : 0.00
                            },
                            {
                                name : 'Spicy BBQ',
                                price : 0.00
                            },
                            {
                                name : 'Tangy BBQ',
                                price : 0.00
                            }
                        ]
                    }
                }
            },
            {
                name : 'Jambalaya Fettuccini',
                description : 'Chicken breast, shrimp, spicy Italian sausage, tomatoes, green peppers, green onions, Cajun seasoning and marinara sauce.',
                price : 17.99,
                image : mRoot+'/boston_pizza/main/pasta.png',
                options : {
                    Extras : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'Double chicken',
                                price : 3.00
                            },
                            {
                                name : 'Double shrimp',
                                price : 4.00
                            },
                            {
                                name : 'Double sausage',
                                price : 3.50
                            }
                        ]
                    }
                }
            },
        ],
        'Pizza' : [
            {
                name : 'Build Your Own',
                description : 'Classic pizza with our signature pizza sauce and pizza mozzarella.',
                price : 8.99,
                image : mRoot+'/boston_pizza/pizza/pizza.png',
                options : {
                    Protein : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'Pepperoni',
                                price : 1.00
                            },
                            {
                                name : 'Sausage',
                                price : 1.00
                            },
                            {
                                name : 'Bacon',
                                price : 1.25
                            }
                        ]
                    },
                    Sauce : {
                        type : 'radio',
                        data : [
                            {
                                name : 'Classic',
                                price : 0.00
                            },
                            {
                                name : 'White',
                                price : 0.00
                            },
                            {
                                name : 'Spicy',
                                price : 0.00
                            }
                        ]
                    },
                    'Extra Cheese' : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'Feta',
                                price : 0.75
                            },
                            {
                                name : 'Cheddar',
                                price : 0.75
                            },
                            {
                                name : 'Provolone',
                                price : 0.75
                            }
                        ]
                    },
                    Toppings : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'Onions',
                                price : 0.50
                            },
                            {
                                name : 'Mushrooms',
                                price : 0.50
                            },
                            {
                                name : 'Black Olives',
                                price : 0.50
                            }
                        ]
                    }
                }
            },
        ],
        'Drinks' : constDrinks
    },
    'Clay Oven' : {
        'Appetizers' : [
            {
                name : 'Vegetable Samosa (4)',
                description : 'Crispy turnover delicately spiced with potatoes and green peas',
                price : 6.99,
                image : mRoot+'/clay_oven/appetizer/samosa.jpg',
                options : {
                    Sauce : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'Mint Chutney',
                                price : 0.75
                            },
                        ]
                    }
                }
            },
            {
                name : 'Chicken Pakora',
                description : 'Chicken, dipped in spiced batter and fried to golden perfection',
                price : 9.99,
                image : mRoot+'/clay_oven/appetizer/chicken.jpg',
                options : {
                }
            },
        ],
        'Indian Bread' : [
            {
                name : 'Garlic Naan (3)',
                description : 'Naan with garlic Just delicious!',
                price : 3.99,
                image : mRoot+'/clay_oven/bread/garlic.jpg',
                options : {
                }
            },
            {
                name : 'Naan (3)',
                description : 'Traditional bread baked in the clay oven.',
                price : 2.99,
                image : mRoot+'/clay_oven/bread/naan.jpg',
                options : {
                }
            },
        ],
        'Curry' : [
            {
                name : 'Lamb Curry',
                description : 'Chunks of young lamb cooked in a curry sauce.',
                price : 17.99,
                image : mRoot+'/clay_oven/curry/lamb.jpg',
                options : {
                    Extras : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'Additional bowl of rice',
                                price : 1.00
                            },
                        ]
                    }
                }
            },
            {
                name : 'Chicken Curry',
                description : 'Traditional Curried Chicken.',
                price : 15.99,
                image : mRoot+'/clay_oven/curry/chicken.jpg',
                options : {
                    Extras : {
                        type : 'checkbox',
                        data : [
                            {
                                name : 'Additional bowl of rice',
                                price : 1.00
                            },
                        ]
                    }
                }
            },
        ],
        'Drinks' : constDrinks
    },
}


celebs = {
    "kevin" : `<div class="food-options"><div class="checkbox-option"><h3 class="option-category">Protein</h3>
    <div class="food-option-name">
    <input checked class="food-option-item-checkbox" type="checkbox" id="Pepperoni" name="food-options" value="Pepperoni" onclick="updateFoodPrice()"> 
    <label class="food-option-name-label" for="Pepperoni">Pepperoni</label>
    </div>
    <div class="food-option-price">
    <label class="food-option-price-label">+$1.00</label>
    </div>
    
    <div class="food-option-name">
    <input class="food-option-item-checkbox" type="checkbox" id="Sausage" name="food-options" value="Sausage" onclick="updateFoodPrice()"> 
    <label class="food-option-name-label" for="Sausage">Sausage</label>
    </div>
    <div class="food-option-price">
    <label class="food-option-price-label">+$1.00</label>
    </div>
    
    <div class="food-option-name">
    <input checked class="food-option-item-checkbox" type="checkbox" id="Bacon" name="food-options" value="Bacon" onclick="updateFoodPrice()"> 
    <label class="food-option-name-label" for="Bacon">Bacon</label>
    </div>
    <div class="food-option-price">
    <label class="food-option-price-label">+$1.25</label>
    </div>
    </div><div class="radio-button-option"><h3 class="option-category">Sauce</h3>
    <div class="food-option-name">
    <input checked class="food-option-item-radiobtn" type="radio" id="Classic" name="food-options" value="Classic" onclick="updateFoodPrice()"> 
    <label class="food-option-name-label" for="Classic">Classic</label>
    </div>
    <div class="food-option-price">
    <label class="food-option-price-label">$0.00</label>
    </div>
    
    <div class="food-option-name">
    <input class="food-option-item-radiobtn" type="radio" id="White" name="food-options" value="White" onclick="updateFoodPrice()"> 
    <label class="food-option-name-label" for="White">White</label>
    </div>
    <div class="food-option-price">
    <label class="food-option-price-label">$0.00</label>
    </div>
    
    <div class="food-option-name">
    <input class="food-option-item-radiobtn" type="radio" id="Spicy" name="food-options" value="Spicy" onclick="updateFoodPrice()"> 
    <label class="food-option-name-label" for="Spicy">Spicy</label>
    </div>
    <div class="food-option-price">
    <label class="food-option-price-label">$0.00</label>
    </div>
    </div><div class="checkbox-option"><h3 class="option-category">Extra Cheese</h3>
    <div class="food-option-name">
    <input class="food-option-item-checkbox" type="checkbox" id="Feta" name="food-options" value="Feta" onclick="updateFoodPrice()"> 
    <label class="food-option-name-label" for="Feta">Feta</label>
    </div>
    <div class="food-option-price">
    <label class="food-option-price-label">+$0.75</label>
    </div>
    
    <div class="food-option-name">
    <input checked class="food-option-item-checkbox" type="checkbox" id="Cheddar" name="food-options" value="Cheddar" onclick="updateFoodPrice()"> 
    <label class="food-option-name-label" for="Cheddar">Cheddar</label>
    </div>
    <div class="food-option-price">
    <label class="food-option-price-label">+$0.75</label>
    </div>
    
    <div class="food-option-name">
    <input class="food-option-item-checkbox" type="checkbox" id="Provolone" name="food-options" value="Provolone" onclick="updateFoodPrice()"> 
    <label class="food-option-name-label" for="Provolone">Provolone</label>
    </div>
    <div class="food-option-price">
    <label class="food-option-price-label">+$0.75</label>
    </div>
    </div><div class="checkbox-option"><h3 class="option-category">Toppings</h3>
    <div class="food-option-name">
    <input checked class="food-option-item-checkbox" type="checkbox" id="Onions" name="food-options" value="Onions" onclick="updateFoodPrice()"> 
    <label class="food-option-name-label" for="Onions">Onions</label>
    </div>
    <div class="food-option-price">
    <label class="food-option-price-label">+$0.50</label>
    </div>
    
    <div class="food-option-name">
    <input class="food-option-item-checkbox" type="checkbox" id="Mushrooms" name="food-options" value="Mushrooms" onclick="updateFoodPrice()"> 
    <label class="food-option-name-label" for="Mushrooms">Mushrooms</label>
    </div>
    <div class="food-option-price">
    <label class="food-option-price-label">+$0.50</label>
    </div>
    
    <div class="food-option-name">
    <input checked class="food-option-item-checkbox" type="checkbox" id="Black Olives" name="food-options" value="Black Olives" onclick="updateFoodPrice()"> 
    <label class="food-option-name-label" for="Black Olives">Black Olives</label>
    </div>
    <div class="food-option-price">
    <label class="food-option-price-label">+$0.50</label>
    </div>
    </div></div>`,

    "keanu": `<div class="food-options">
    <div class="checkbox-option"><h3 class="option-category">Extras</h3>
        <div class="food-option-name">
            <input class="food-option-item-checkbox" type="checkbox" id="Double beef" name="food-options" value="Double beef" onclick="updateFoodPrice()"> 
            <label class="food-option-name-label" for="Double beef">Double beef</label>
            </div>
            <div class="food-option-price">
            <label class="food-option-price-label">+$4.00</label>
        </div>
        
        <div class="food-option-name">
            <input class="food-option-item-checkbox" type="checkbox" id="Double chicken" name="food-options" value="Double chicken" onclick="updateFoodPrice()"> 
            <label class="food-option-name-label" for="Double chicken">Double chicken</label>
            </div>
            <div class="food-option-price">
            <label class="food-option-price-label">+$3.00</label>
        </div>
        
        <div class="food-option-name">
            <input class="food-option-item-checkbox" type="checkbox" id="Double shrimp" name="food-options" value="Double shrimp" onclick="updateFoodPrice()"> 
            <label class="food-option-name-label" for="Double shrimp">Double shrimp</label>
            </div>
            <div class="food-option-price">
            <label class="food-option-price-label">+$4.00</label>
        </div>
        
        <div class="food-option-name">
            <input class="food-option-item-checkbox" type="checkbox" id="Double scallop" name="food-options" value="Double scallop" onclick="updateFoodPrice()"> 
            <label class="food-option-name-label" for="Double scallop">Double scallop</label>
            </div>
            <div class="food-option-price">
            <label class="food-option-price-label">+$4.50</label>
        </div>
        
        <div class="food-option-name">
            <input class="food-option-item-checkbox" type="checkbox" id="Double squid" name="food-options" value="Double squid" onclick="updateFoodPrice()"> 
            <label class="food-option-name-label" for="Double squid">Double squid</label>
            </div>
            <div class="food-option-price">
            <label class="food-option-price-label">+$5.00</label>
        </div>
    </div>
</div>
    `,

    "zendaya" : `
    <div class="food-options">
    <div class="radio-button-option"><h3 class="option-category">Protein</h3>
    <div class="food-option-name">
    <input class="food-option-item-radiobtn" type="radio" id="Chicken" name="food-options" value="Chicken" onclick="updateFoodPrice()"> 
    <label class="food-option-name-label" for="Chicken">Chicken</label>
    </div>
    <div class="food-option-price">
    <label class="food-option-price-label">$1.00</label>
    </div>
    
    <div class="food-option-name">
    <input class="food-option-item-radiobtn" type="radio" id="Beef" name="food-options" value="Beef" onclick="updateFoodPrice()"> 
    <label class="food-option-name-label" for="Beef">Beef</label>
    </div>
    <div class="food-option-price">
    <label class="food-option-price-label">$1.50</label>
    </div>
    
    <div class="food-option-name">
    <input class="food-option-item-radiobtn" type="radio" id="Pork" name="food-options" value="Pork" onclick="updateFoodPrice()"> 
    <label class="food-option-name-label" for="Pork">Pork</label>
    </div>
    <div class="food-option-price">
    <label class="food-option-price-label">$1.25</label>
    </div>
    
    <div class="food-option-name">
    <input checked class="food-option-item-radiobtn" type="radio" id="Beyond Meat" name="food-options" value="Beyond Meat" onclick="updateFoodPrice()"> 
    <label class="food-option-name-label" for="Beyond Meat">Beyond Meat</label>
    </div>
    <div class="food-option-price">
    <label class="food-option-price-label">$0.75</label>
    </div>
    </div><div class="checkbox-option"><h3 class="option-category">Toppings</h3>
    <div class="food-option-name">
    <input checked class="food-option-item-checkbox" type="checkbox" id="Corn" name="food-options" value="Corn" onclick="updateFoodPrice()"> 
    <label class="food-option-name-label" for="Corn">Corn</label>
    </div>
    <div class="food-option-price">
    <label class="food-option-price-label">+$0.00</label>
    </div>
    
    <div class="food-option-name">
    <input checked class="food-option-item-checkbox" type="checkbox" id="Rice" name="food-options" value="Rice" onclick="updateFoodPrice()"> 
    <label class="food-option-name-label" for="Rice">Rice</label>
    </div>
    <div class="food-option-price">
    <label class="food-option-price-label">+$0.00</label>
    </div>
    
    <div class="food-option-name">
    <input checked class="food-option-item-checkbox" type="checkbox" id="Beans" name="food-options" value="Beans" onclick="updateFoodPrice()"> 
    <label class="food-option-name-label" for="Beans">Beans</label>
    </div>
    <div class="food-option-price">
    <label class="food-option-price-label">+$0.00</label>
    </div>
    
    <div class="food-option-name">
    <input checked class="food-option-item-checkbox" type="checkbox" id="Grilled veg" name="food-options" value="Grilled veg" onclick="updateFoodPrice()"> 
    <label class="food-option-name-label" for="Grilled veg">Grilled veg</label>
    </div>
    <div class="food-option-price">
    <label class="food-option-price-label">+$0.00</label>
    </div>
    
    <div class="food-option-name">
    <input checked class="food-option-item-checkbox" type="checkbox" id="Lettuce" name="food-options" value="Lettuce" onclick="updateFoodPrice()"> 
    <label class="food-option-name-label" for="Lettuce">Lettuce</label>
    </div>
    <div class="food-option-price">
    <label class="food-option-price-label">+$0.00</label>
    </div>
    
    <div class="food-option-name">
    <input checked class="food-option-item-checkbox" type="checkbox" id="Cheese" name="food-options" value="Cheese" onclick="updateFoodPrice()"> 
    <label class="food-option-name-label" for="Cheese">Cheese</label>
    </div>
    <div class="food-option-price">
    <label class="food-option-price-label">+$0.00</label>
    </div>
    </div><div class="checkbox-option"><h3 class="option-category">Sauce</h3>
    <div class="food-option-name">
    <input class="food-option-item-checkbox" type="checkbox" id="Sour cream" name="food-options" value="Sour cream" onclick="updateFoodPrice()"> 
    <label class="food-option-name-label" for="Sour cream">Sour cream</label>
    </div>
    <div class="food-option-price">
    <label class="food-option-price-label">+$0.00</label>
    </div>
    
    <div class="food-option-name">
    <input checked class="food-option-item-checkbox" type="checkbox" id="Salsa" name="food-options" value="Salsa" onclick="updateFoodPrice()"> 
    <label class="food-option-name-label" for="Salsa">Salsa</label>
    </div>
    <div class="food-option-price">
    <label class="food-option-price-label">+$0.00</label>
    </div>
    
    <div class="food-option-name">
    <input checked class="food-option-item-checkbox" type="checkbox" id="Guacamole" name="food-options" value="Guacamole" onclick="updateFoodPrice()"> 
    <label class="food-option-name-label" for="Guacamole">Guacamole</label>
    </div>
    <div class="food-option-price">
    <label class="food-option-price-label">+$1.25</label>
    </div>
    </div></div>
    `
}



/* TEMPLATE Single
{
    name : '',
    description : '',
    price : ,
    image : mRoot+'/',
    
}
*/

/* TEMPLATE complete
    '' : {
        '' : [
            {
                name : '',
                description : '',
                price : ,
                image : mRoot+'/',
                options : {
                }
            },
            {
                name : '',
                description : '',
                price : ,
                image : mRoot+'/',
                options : {
                }
            },
            {
                name : '',
                description : '',
                price : ,
                image : mRoot+'/',
                options : {
                }
            },
            {
                name : '',
                description : '',
                price : ,
                image : mRoot+'/',
                options : {
                }
            }
        ],
        '' : [
            {
                name : '',
                description : '',
                price : ,
                image : mRoot+'/',
                options : {
                }
            },
            {
                name : '',
                description : '',
                price : ,
                image : mRoot+'/',
                options : {
                }
            },
            {
                name : '',
                description : '',
                price : ,
                image : mRoot+'/',
                options : {
                }
            },
            {
                name : '',
                description : '',
                price : ,
                image : mRoot+'/',
                options : {
                }
            }
        ],
        '' : [
            {
                name : '',
                description : '',
                price : ,
                image : mRoot+'/',
                options : {
                }
            },
            {
                name : '',
                description : '',
                price : ,
                image : mRoot+'/',
                options : {
                }
            },
            {
                name : '',
                description : '',
                price : ,
                image : mRoot+'/',
                options : {
                }
            },
            {
                name : '',
                description : '',
                price : ,
                image : mRoot+'/',
                options : {
                }
            }
        ],
        'Drinks' : constDrinks
    },
*/