const mRoot = "../resources/images/restaurant-page/restaurants";

const constDrinks = [
    {
        name : 'Coca-Cola',
        description : '',
        price : 0.99,
        image : mRoot+'/global_menu/coke.jpg',
        nutrition : ''
    },
    {
        name : 'Diet Coke',
        description : '',
        price : 0.99,
        image : mRoot+'/global_menu/dietCoke.png',
        nutrition : ''
    },
    {
        name : 'Root Beer',
        description : '',
        price : 0.99,
        image : mRoot+'/global_menu/rootBeer.jpg',
        nutrition : ''
    },
    {
        name : 'Ginger Ale',
        description : '',
        price : 0.99,
        image : mRoot+'/global_menu/ginger.jpg',
        nutrition : ''
    }
]


const menus = {
    'Perkins' : {
        omelets : [
            {
                name : 'Granny’s Country',
                description : 'Filled with diced grilled ham, onions, green peppers, American cheese, cheese sauce and crispy hash browns. Topped with all of the same!',
                price : 9.99,
                image : mRoot+'/perkins/omelets/granny.jpg',
                nutrition : ''
            },
            {
                name : 'The Everything',
                description : 'Diced grilled ham, crimini mushrooms, tomatoes, onions, green peppers and American cheese – this classic omelet has it all!',
                price : 10.99,
                image : mRoot+'/perkins/omelets/everything.jpg',
                nutrition : ''
            },
            {
                name : 'Meat ‘n Potatoes',
                description : 'Pork sausage, Applewood smoked bacon, smoked ham, grilled red onions and Cheddar atop an omelet stuffed with more of the same, plus crispy tots.',
                price : 9.99,
                image : mRoot+'/perkins/omelets/ham.jpg',
                nutrition : ''
            },
            {
                name : 'HAM ‘N CHEESE',
                description : 'A traditional favorite of diced grilled ham and American cheese. Served with three buttermilk pancakes. No sides',
                price : 9.99,
                image : mRoot+'/perkins/omelets/meat.jpg',
                nutrition : ''
            }
        ],
        griddle : [
            {
                name : 'Scratch-Made Belgian Waffle Platter',
                description : 'A Belgian Waffle dusted with powdered sugar for the perfect dash of sweetness.',
                price : 9.99,
                image : mRoot+'/perkins/griddle/waffle.jpg',
                nutrition : ''
            },
            {
                name : 'Strawberry Crepes Platter',
                description : 'Two light delicate crepes with a sweet vanilla cream cheese, topped with fresh glazed strawberries, powdered sugar and whipped topping.',
                price : 11.99,
                image : mRoot+'/perkins/griddle/crepe.jpg',
                nutrition : ''
            },
            {
                name : 'Brioche French Toast Platter',
                description : 'Two slices of thick-cut brioche bread dipped in our signature batter, grilled and sprinkled with powdered sugar.',
                price : 10.99,
                image : mRoot+'/perkins/griddle/french.jpg',
                nutrition : ''
            },
            {
                name : 'Blueberry Buttermilk Pancake Platter',
                description : 'Three buttermilk pancakes loaded with juicy blueberries, grilled and sprinkled with powdered sugar.',
                price : 9.99,
                image : mRoot+'/perkins/griddle/pancake.jpg',
                nutrition : ''
            }
        ],
        sandwiches : [
            {
                name : 'Sonoma Chicken Salad Croissant',
                description : 'A flaky, buttery croissant loaded with a blend of smoked, pulled chicken, red grapes, celery, walnuts and fresh leaf lettuce.',
                price : 9.99,
                image : mRoot+'/perkins/sandwiches/sonoma.jpg',
                nutrition : ''
            },
            {
                name : 'Triple Decker Club',
                description : 'Oven-roasted turkey, Applewood smoked bacon, tomato, lettuce and mayo on white or whole wheat toast.',
                price : 11.99,
                image : mRoot+'/perkins/sandwiches/club.jpg',
                nutrition : ''
            },
            {
                name : 'French Dip',
                description : 'Warm, sliced roast beef, Swiss cheese and grilled onions on a grilled hoagie with au jus for dipping.',
                price : 10.99,
                image : mRoot+'/perkins/sandwiches/dip.jpg',
                nutrition : ''
            },
            {
                name : 'Ham ‘N Cheese Melt',
                description : 'Warm, deli-shaved ham, Applewood smoked bacon and melted American cheese on grilled sourdough bread with Honey Mustard dipping sauce.',
                price : 9.99,
                image : mRoot+'/perkins/sandwiches/hamCheese.jpg',
                nutrition : ''
            }
        ],
        dessert : [
            {
                name : 'Banana Cream',
                description : 'Loaded with hand-sliced bananas and topped with real whipped cream and chopped walnuts.',
                price : 6.99,
                image : mRoot+'/perkins/desserts/banana.jpg',
                nutrition : ''
            },
            {
                name : 'Homestyle Apple',
                description : 'Juicy sweet apples baked fresh inside a golden flaky crust.',
                price : 6.99,
                image : mRoot+'/perkins/desserts/apple.jpg',
                nutrition : ''
            },
            {
                name : 'Cherry',
                description : 'Sweet and tangy cherries baked inside a golden double crust.',
                price : 6.99,
                image : mRoot+'/perkins/desserts/cherry.jpg',
                nutrition : ''
            },
            {
                name : 'Chocolate French Silk',
                description : 'Creamy chocolate topped with real whipped cream and dark chocolate curls.',
                price : 6.99,
                image : mRoot+'/perkins/desserts/chocolate.jpg',
                nutrition : ''
            }
        ],
        drinks : constDrinks 
    },
    'McDonalds' : {
        burgers : [
            {
                name : 'Big Mac',
                description : 'Mouthwatering perfection starts with two 100% pure beef patties and Big Mac sauce sandwiched between a sesame seed bun. It’s topped off with pickles, crisp shredded lettuce, finely chopped onion and American cheese.',
                price : 6.99,
                image : mRoot+'/mcdonalds/burgers/bigmac.jpg',
                nutrition : ''
            },
            {
                name : 'Quarter Pounder',
                description : '¼ lb. of 100% fresh beef that’s hot, deliciously juicy and cooked when you order. It’s seasoned with just a pinch of salt and pepper, sizzled on a flat iron grill, then topped with slivered onions, tangy pickles and two slices of melty American cheese on a sesame seed bun.',
                price : 5.99,
                image : mRoot+'/mcdonalds/burgers/quarter.jpg',
                nutrition : ''
            },
            {
                name : 'McDouble',
                description : 'Two 100% pure beef patties seasoned with just a pinch of salt and pepper. It’s topped with tangy pickles, chopped onions, ketchup, mustard and a slice of melty American cheese.',
                price : 2.99,
                image : mRoot+'/mcdonalds/burgers/mcdouble.jpg',
                nutrition : ''
            },
            {
                name : 'Cheeseburger',
                description : "Our simple, classic cheeseburger begins with a 100% pure beef patty seasoned with just a pinch of salt and pepper. It's topped with a tangy pickle, chopped onions, ketchup, mustard, and a slice of melty American cheese.",
                price : 1.99,
                image : mRoot+'/mcdonalds/burgers/cheeseburger.jpg',
                nutrition : ''
            }
        ],
        chickenAndSandwiches : [
            {
                name : 'Chicken McNuggets',
                description : 'Our tender, juicy Chicken McNuggets® are made with 100% white meat chicken and no artificial colors, flavors or preservatives.',
                price : 2.99,
                image : mRoot+'/mcdonalds/chickenAndSandwiches/nuggets.jpg',
                nutrition : ''
            },
            {
                name : 'Buttermilk Crispy Chicken Sandwich',
                description : "McDonald's Buttermilk Crispy Chicken Sandwich is made with all white meat chicken and no added colors. It's layered with crisp, green leaf lettuce and tasty tomato and mayonnaise and served up on a delectable artisan roll.",
                price : 5.99,
                image : mRoot+'/mcdonalds/chickenAndSandwiches/crispy.jpg',
                nutrition : ''
            },
            {
                name : 'McChicken',
                description : 'A delightfully crispy chicken sandwich with a crispy chicken fillet topped with mayonnaise, shredded iceberg lettuce, and served on a perfectly toasty bun.',
                price : 4.99,
                image : mRoot+'/mcdonalds/chickenAndSandwiches/mcChicken.jpg',
                nutrition : ''
            },
            {
                name : 'Filet-O-Fish',
                description : 'Sourced from sustainable fisheries, topped with melty American cheese and creamy tartar sauce, and served on a soft, steamed bun.',
                price : 3.99,
                image : mRoot+'/mcdonalds/chickenAndSandwiches/fish.jpg',
                nutrition : ''
            }
        ],
        desserts : [
            {
                name : 'Vanilla Cone',
                description : 'Enjoy our creamy vanilla soft serve in a crispy cone!',
                price : 0.99,
                image : mRoot+'/mcdonalds/desserts/cone.jpg',
                nutrition : ''
            },
            {
                name : 'Baked Apple Pie',
                description : "McDonald's Baked Apple Pie is loaded with 100% American-grown apples, with a lattice crust baked to perfection and topped with sprinkled sugar.",
                price : 1.99,
                image : mRoot+'/mcdonalds/desserts/apple.jpg',
                nutrition : ''
            },
            {
                name : 'McFlurry with Oreo Cookies',
                description : 'The McDonald’s McFlurry with OREO Cookies is an popular combination of OREO pieces and vanilla soft serve!',
                price : 3.99,
                image : mRoot+'/mcdonalds/desserts/flurry.jpg',
                nutrition : ''
            },
            {
                name : 'Chocolate Shake',
                description : 'McDonald’s Chocolate Shake is a delicious chocolate dessert made with our creamy vanilla soft serve and chocolate syrup, topped with whipped topping.',
                price : 3.99,
                image : mRoot+'/mcdonalds/desserts/shake.jpg',
                nutrition : ''
            }
        ],
        drinks : constDrinks
    }
}



/* TEMPLATE
{
    name : '',
    description : '',
    price : ,
    image : '',
    nutrition : ''
}
*/