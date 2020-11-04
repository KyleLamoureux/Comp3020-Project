/* Data */
restaurants = [
    {
        name: "Perkins",
        id: "perkins",
        img: "../resources/images/restaurant-page/restaurants/perkins/perkins.png",
        type: ["Breakfast"],
        foodItems: [
            {
                name: "Pancakes",
                img: "../resources/images/restaurant-page/restaurants/perkins/pancake.jpg",
                restaurant: "Perkins"
            },
            {
                name: "Sandwiches",
                img: "../resources/images/restaurant-page/restaurants/perkins/sandwich.jpg",
                restaurant: "Perkins"
            },
            {
                name: "Omelet",
                img: "../resources/images/restaurant-page/restaurants/perkins/omelet.jpg",
                restaurant: "Perkins"
            }
        ],
        distance: 3.8,
        time: 25,
        price: 20,
        popularity: 4,
        description: "Restaurant description :)",
        href: "link"
    },
    {
        name: "McDonalds",
        id: "mcdonalds",
        img: "../resources/images/restaurant-page/restaurants/mcdonalds/mcdonalds.png",
        type: ["Burgers"],
        foodItems: [
            {
                name: "Big Mac",
                img: "../resources/images/restaurant-page/restaurants/mcdonalds/bigmac.jpg",
                restaurant: "McDonalds"
            },
            {
                name: "Fries",
                img: "../resources/images/restaurant-page/restaurants/mcdonalds/fries.jpg",
                restaurant: "McDonalds"
            },
            {
                name: "Ice Cream",
                img: "../resources/images/restaurant-page/restaurants/mcdonalds/icecream.jpg",
                restaurant: "McDonalds"
            }
        ],
        distance: 6.3,
        time: 37,
        price: 5,
        popularity: 2,
        description: "Restaurant description :)",
        href: "link"
    },
    
];

var restaurants_categories = [
    {
        name: "Burgers",
        img: "../resources/images/restaurant-page/categories/burger.jpg",
        active: true
    },
    {
        name: "Pizza", 
        img: "../resources/images/restaurant-page/categories/pizza.jpg",
        active: true
    },
    {
        name: "Mexican", 
        img: "../resources/images/restaurant-page/categories/mexican.jpg",
        active: true
    },
    {
        name: "Sushi", 
        img: "../resources/images/restaurant-page/categories/sushi.jpg",
        active: true
    },
    {
        name: "Pasta", 
        img: "../resources/images/restaurant-page/categories/pasta.jpg",
        active: true
    },
    {
        name: "Breakfast",
        img: "../resources/images/restaurant-page/categories/breakfast.jpg",
        active: true
    }
];

/**
 * Js hook for sortby dropdown
 * @param type a string, either 'price', 'distance', 'popularity' or 'relevance'
 */
var lastSort = '';
function sortby(type){
    try{
        document.getElementById("dropdownblock").style.display = "none";
        restaurants.sort((a,b) => (a[type] > b[type]) ? 1 : ((b[type] > a[type]) ? -1 : 0));
        if (lastSort == type){
            restaurants.reverse();
            lastSort = '';
        } else {
            lastSort = type;
        }
        createRestaurants();
    }catch(e){
        alert(e);
    }
}

/**
 * A reset function for the dropdown hover.
 * Please don't touch this lol
 */
function reset(){
    document.getElementById("dropdownblock").style.display = "";
}


// Call this to refresh restaurants UI
function createRestaurants(){
    var eleList = document.getElementById("restaurant-ul");
    clearDiv(eleList);

    types = hiddenTypes();

    eleList.appendChild(createRandomization());
    restaurants.forEach(element => {
        if (!element["type"].some(item => types.includes(item)))
            eleList.appendChild(createRestListItem(element));
    });

};

function createRandomization() {
    var listOfMenuItems = [];
    types = hiddenTypes();
    restaurants.forEach(e => {
        if (!e["type"].some(item => types.includes(item)))
        listOfMenuItems = listOfMenuItems.concat(e['foodItems']);
    });
    for (var i = listOfMenuItems.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = listOfMenuItems[i];
        listOfMenuItems[i] = listOfMenuItems[j];
        listOfMenuItems[j] = temp;
    }
    
    var li = document.createElement("li");
    li.className = "restaurant-li";

    // Create sub div
    var itemDiv = document.createElement("div");
    itemDiv.className = "restaurant-item";

    // Create img
    var orbDiv = document.createElement("div");
    var txt = document.createElement("h2");
    txt.className = "random-restaurant-text";
    txt.textContent = "Random Meals"
    orbDiv.appendChild(txt);
    
    // Create random menu item orbs
    var menuItems = createItemOrb(listOfMenuItems.slice(0, 3), true);
    itemDiv = appendMultiple(itemDiv, [orbDiv, menuItems]);

    li.appendChild(itemDiv);
    return li; 
}

// When you click on a random food item it will take you to that restaurnts menu
function randomItemClick(item){
    console.log(item['target']['alt']);
}

// Creates li.
function createRestListItem(element){
    var li = document.createElement("li");
    li.className = "restaurant-li";

    // Create sub div
    var itemDiv = document.createElement("div");
    itemDiv.className = "restaurant-item";

    // Create img
    var img = document.createElement("img");
    img.className = "restaurant-image"
    img.src = element['img'];
    img.alt = element['name'];
    
    // Create menu item orbs
    var menuItems = createItemOrb(element["foodItems"]);
    
    // Restaurant information div's
    var infoDiv = document.createElement("div");
    infoDiv.className = "restaurant-information";
    var dist = document.createElement("h6");
    dist.className = "restaurant-distance";
    dist.textContent = element["distance"]+" km";
    var time = document.createElement("h6");
    time.className = "restaurant-time";
    time.textContent = element["time"]+" m"; 
    infoDiv = appendMultiple(infoDiv, [dist, time]);

    var imgOverlay = document.createElement("div");
    imgOverlay.className = "restaurant-image-overlay";
    var restName = document.createElement("div");
    restName.className = "restaurant-name";
    restName.innerText = element["name"];
    var desc = document.createElement("p");
    desc.className = "restaurant-description";
    desc.innerText = element["description"];
    var route = document.createElement("a");
    route.href = element["href"];
    route.innerText = "Proceed To Menu";
    route.style.textDecoration = "underline"
    imgOverlay = appendMultiple(imgOverlay, [restName, desc, route]);

    // Combine
    itemDiv = appendMultiple(itemDiv, [img, menuItems, infoDiv, imgOverlay]);

    li.appendChild(itemDiv);
    return li;
};


// Creates <div id="food-item-list">...
function createItemOrb(element, random=false){
    var div = document.createElement("div")
    div.id = "food-item-list";
    element.forEach(e => {
        var subDiv = document.createElement("div");
        subDiv.className = "restaurant-food-item";

        var img = document.createElement("img");
        img.src = e["img"];
        img.alt = e["name"] + "," + e['restaurant'];
        if (random)
            img.onclick = randomItemClick;

        var title = document.createElement("h6");
        var text = document.createTextNode(e["name"]);
        title.appendChild(text);

        subDiv = appendMultiple(subDiv, [img, title]);
        div.appendChild(subDiv);
    });

    return div;
}

// Call this to refresh categories UI
function createCategories(){
    var eleList = document.getElementById("scollbarFoodCategory");
    clearDiv(eleList);

    restaurants_categories.forEach(element => {
        eleList.appendChild(createDivCat(element));
    });
};

function createDivCat(element){
    var div = document.createElement("div");
    div.className = "food-item";
    div.onclick = sortOnClick;
    
    var img = document.createElement("img");
    img.src = element["img"];
    img.alt = element["name"];
    img.id = element["name"];

    var overlay = document.createElement("div");
    overlay.className="food-item-overlay";
    overlay.id = element["name"];

    var title = document.createElement("h5");
    var text = document.createTextNode(element["name"]);
    title.appendChild(text);
    overlay.appendChild(title);

    div = appendMultiple(div, [img, overlay]);

    return div;
};

// Sort based on category image click
function sortOnClick(element){
    restaurants_categories.forEach(iter => {
        console.log("t" + iter["name"] + " ");
        console.log(element["target"])
        if(iter["name"] == element["target"]["id"]){
            iter["active"] = !iter["active"];
        }
    });
    console.log(restaurants_categories);
    createCategories();
    createRestaurants();
};



/* Helpers */
function clearDiv(div){
    while(div.firstChild) { 
        div.removeChild(div.firstChild); 
    }
};

function appendMultiple(appendTo, list){
    list.forEach(item => {
        appendTo.appendChild(item);
    });
    return appendTo;
}

function hiddenTypes(){
    disabled = [];
    restaurants_categories.forEach(item => {
        if (!item['active'])
            disabled.push(item['name']);
    });
    return disabled;
}