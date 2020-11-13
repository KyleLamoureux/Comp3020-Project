const mRoot = "../resources/images/restaurant-page/restaurants";

const constDrinks = [
    {
        name : 'Coca-Cola',
        description : '',
        price : 0.99,
        image : mRoot+'/global_menu/coke.jpg',
    },
    {
        name : 'Diet Coke',
        description : '',
        price : 0.99,
        image : mRoot+'/global_menu/dietCoke.png',
    },
    {
        name : 'Root Beer',
        description : '',
        price : 0.99,
        image : mRoot+'/global_menu/rootBeer.jpg',
    },
    {
        name : 'Ginger Ale',
        description : '',
        price : 0.99,
        image : mRoot+'/global_menu/ginger.jpg',
    }
]


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
                description : 'Diced grilled ham, crimini mushrooms, tomatoes, onions, green peppers and American cheese – this classic omelet has it all!',
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
        'Appetizer' : [
            {
                name : 'Calamari',
                description : 'Tender calamari, lightly breaded and fried. Served with marinara sauce.',
                price : 13.29,
                image : mRoot+'/olive_garden/appetizer/calamari.jpg',
            },
            {
                name : 'Stuffed Ziti Fritta',
                description : 'Crispy fried ziti filled with five cheeses. Served with alfredo and marinara dipping sauces.',
                price : 9.99,
                image : mRoot+'/olive_garden/appetizer/stuffed.jpg',
            },
            {
                name : 'Spinach-Artichoke Dip',
                description : 'A blend of spinach, artichokes and five cheeses served warm with NEW flatbread crisps, tossed with parmesan and garlic salt. ',
                price : 11.99,
                image : mRoot+'/olive_garden/appetizer/spinach.jpg',
            },
            {
                name : 'Classic Shrimp Scampi Fritta',
                description : 'Lightly breaded, fried and tossed in our signature scampi sauce. ',
                price : 13.29,
                image : mRoot+'/olive_garden/appetizer/shrimp.jpg',
            }
        ],
        'Entree' : [
            {
                name : 'Chicken Alfredo',
                description : 'Not everyone knows our signature alfredo sauce is made from scratch daily. This homemade sauce combines simple, fresh ingredients like butter, cream and parmesan cheese to make a rich topping to our fettuccine pasta. Then it is topped with tender, sliced grilled chicken.',
                price : 23.29,
                image : mRoot+'/olive_garden/entree/alfredo.jpg',
            },
            {
                name : 'Tour of Italy',
                description : 'Three OG classics all on one plate! Chicken Parmigiana, Lasagna Classico** and our signature Fettuccine Alfredo – all with homemade sauces made fresh every morning.',
                price : 25.49,
                image : mRoot+'/olive_garden/entree/tour.jpg',
            },
            {
                name : 'Lasagna Classico',
                description : 'Prepared fresh daily with layers of pasta, parmesan, mozzarella, pecorino romano and our homemade meat sauce.',
                price : 19.29,
                image : mRoot+'/olive_garden/entree/lasagna.jpg',
            },
            {
                name : 'Chicken Parmigiana',
                description : 'Two lightly fried parmesan-breaded chicken breasts are smothered with Olive Garden’s homemade marinara sauce and melted Italian cheeses. We serve our Chicken Parmigiana with a side of spaghetti for dinner.',
                price : 22.49,
                image : mRoot+'/olive_garden/entree/tour.jpg',
            }
        ],
        'Dessert' : [
            {
                name : 'Pumpkin Cheesecake',
                description : 'Pumpkin Cheesecake topped with caramel sauce. Served with whipped cream.',
                price : 9.29,
                image : mRoot+'/olive_garden/dessert/pumpkin.jpg',
            },
            {
                name : 'Tiramisu',
                description : 'The classic Italian dessert. A layer of creamy custard set atop espresso-soaked ladyfingers.',
                price : 8.99,
                image : mRoot+'/olive_garden/dessert/tiramisu.jpg',
            },
            {
                name : 'Black Tie Mousse Cake',
                description : 'Rich layers of chocolate cake, dark chocolate cheesecake and creamy custard mousse.',
                price : 8.99,
                image : mRoot+'/olive_garden/dessert/tie.jpg',
            },
            {
                name : 'Chocolate Brownie Lasagna',
                description : 'Eight decadent layers of rich, fudgy brownie and sweet vanilla cream cheese frosting, topped with chocolate shavings and a chocolate drizzle.',
                price : 8.99,
                image : mRoot+'/olive_garden/dessert/chocolate.jpg',
            }
        ],
        'Drinks' : constDrinks
    },
    'Muncho Burrito' : {
        'Signature' : [
            {
                name : 'Smoked Peach + Chili Mango Bowl',
                description : 'Chili-mango sauce, peach & mango chili salsa, tomato-cucumber salad, crispy jalapeño chips and chipotle-peach crema.',
                price : 12.99,
                image : mRoot+'/muncho_burrito/signature/speach.png',
            },
            {
                name : 'Zesty Chimichurri Bowl',
                description : 'House-made cilantro & lime chimichurri sauce, roasted seasonal squash, in-house pickled red onions, tricoloured tortilla strips and serrano-chili crema.',
                price : 12.99,
                image : mRoot+'/muncho_burrito/signature/zesty.png',
            },
            {
                name : 'Grilled Pineapple Chili Bowl',
                description : 'Caramelized pineapple & jalapeño sauce, grilled pineapple, in-house pickled red onions, crispy jalapeño chips and pineapple-habanero crema.',
                price : 12.99,
                image : mRoot+'/muncho_burrito/signature/pineapple.png',
            },
            {
                name : 'Ghost Pepper Burrito',
                description : 'Ghost pepper bacon, ghost pepper & fig marmalade, chipotle black beans, salsa, sour cream, Monterey Jack cheese, ghost pepper hot sauce, jalapeños.',
                price : 11.99,
                image : mRoot+'/muncho_burrito/signature/ghost.png',
            }
        ],
        'Custom' : [
            {
                name : 'Build Your Own Burrito',
                description : 'Fresh and fantastic, our burritos can be built anyway you like. Customize it with your choice of base, protein, beans, veggies, cheese, toppings, cilantro, jalapeño and sauce.',
                price : 9.99,
                image : mRoot+'/',
            },
            {
                name : 'Build Your Own Taco (3)',
                description : 'Fresh and fantastic, our tacos can be built anyway you like. Customize it with your choice of base, protein, beans, veggies, cheese, toppings, cilantro, jalapeño and sauce.',
                price : 8.99,
                image : mRoot+'/',
            },
            {
                name : 'Build Your Own Bowl',
                description : 'Fresh and fantastic, our bowls can be built anyway you like. Customize it with your choice of base, protein, beans, veggies, cheese, toppings, cilantro, jalapeño and sauce.',
                price : 10.99,
                image : mRoot+'/',
            },
            {
                name : 'Build Your Own Quesadilla',
                description : 'Fresh and fantastic, our quesadillas can be built anyway you like. Customize it with your choice of base, protein, beans, veggies, cheese, toppings, cilantro, jalapeño and sauce.',
                price : 9.99,
                image : mRoot+'/',
            }
        ],
        'Sides' : [
            {
                name : 'Tortilla Chips with Salsa',
                description : '',
                price : 2.25,
                image : mRoot+'/muncho_burrito/sides/salsa.jpg',
            },
            {
                name : 'Tortilla Chips with Queso',
                description : '',
                price : 2.75,
                image : mRoot+'/muncho_burrito/sides/queso.jpg',
            },
            {
                name : 'Tortilla Chips with Guacamole',
                description : '',
                price : 3.25,
                image : mRoot+'/muncho_burrito/sides/guac.jpg',
            },
        ],
        'Drinks' : constDrinks
    },
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
                
            },
            {
                name : '',
                description : '',
                price : ,
                image : mRoot+'/',
                
            },
            {
                name : '',
                description : '',
                price : ,
                image : mRoot+'/',
                
            },
            {
                name : '',
                description : '',
                price : ,
                image : mRoot+'/',
                
            }
        ],
        '' : [
            {
                name : '',
                description : '',
                price : ,
                image : mRoot+'/',
                
            },
            {
                name : '',
                description : '',
                price : ,
                image : mRoot+'/',
                
            },
            {
                name : '',
                description : '',
                price : ,
                image : mRoot+'/',
                
            },
            {
                name : '',
                description : '',
                price : ,
                image : mRoot+'/',
                
            }
        ],
        '' : [
            {
                name : '',
                description : '',
                price : ,
                image : mRoot+'/',
                
            },
            {
                name : '',
                description : '',
                price : ,
                image : mRoot+'/',
                
            },
            {
                name : '',
                description : '',
                price : ,
                image : mRoot+'/',
                
            },
            {
                name : '',
                description : '',
                price : ,
                image : mRoot+'/',
                
            }
        ],
        'Drinks' : constDrinks
    },
*/