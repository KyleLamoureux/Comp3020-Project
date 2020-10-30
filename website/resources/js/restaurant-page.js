/* Data */
const restaurants = [
    {
        name: "Perkins",
        id: "perkins",
        img: "../resources/images/restaurant-page/restaurants/perkins/perkins.png",
        type: ["Breakfast"],
        foodItems: [
            {
                name: "Pancakes",
                img: "../resources/images/restaurant-page/restaurants/perkins/pancake.jpg"
            },
            {
                name: "Sandwiches",
                img: "../resources/images/restaurant-page/restaurants/perkins/sandwich.jpg"
            },
            {
                name: "Omelet",
                img: "../resources/images/restaurant-page/restaurants/perkins/omelet.jpg"
            }
        ],
        distance: 3.8,
        time: 25,
        description: "Restaurant description :)",
        href: "link"
    }
    ,
    {
        name: "McDonalds",
        id: "mcdonalds",
        img: "../resources/images/restaurant-page/restaurants/mcdonalds/mcdonalds.png",
        type: ["Burger"],
        foodItems: [
            {
                name: "Big Mac",
                img: "../resources/images/restaurant-page/restaurants/mcdonalds/bigmac.jpg"
            },
            {
                name: "Fries",
                img: "../resources/images/restaurant-page/restaurants/mcdonalds/fries.jpg"
            },
            {
                name: "Ice Cream",
                img: "../resources/images/restaurant-page/restaurants/mcdonalds/icecream.jpg"
            }
        ],
        distance: 6.3,
        time: 37,
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
function sortby(type){
    try{
        document.getElementById("dropdownblock").style.display = "none";
        /**
         * @kyle do your shit here
         */
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

    restaurants.forEach(element => {
        if (!element["type"].some(item => types.includes(item)))
            eleList.appendChild(createRestListItem(element));
    });
};

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
    route.innerText = "Click here to proceed to the menu page";
    imgOverlay = appendMultiple(imgOverlay, [restName, desc, route]);

    // Combine
    itemDiv = appendMultiple(itemDiv, [img, menuItems, infoDiv, imgOverlay]);

    li.appendChild(itemDiv);
    return li;
};

// Creates <div id="food-item-list">...
function createItemOrb(element){
    var div = document.createElement("div")
    div.id = "food-item-list";
    element.forEach(e => {
        var subDiv = document.createElement("div");
        subDiv.className = "restaurant-food-item";

        var img = document.createElement("img");
        img.src = e["img"];
        img.alt = e["name"];

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
        if(iter["name"] == element["target"]["id"]){
            iter["active"] = !iter["active"];
        }
    });
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