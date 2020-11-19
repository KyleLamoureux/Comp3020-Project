

/**
 * Homepage Data
 */
userAddress = localStorage.getItem('user-address');
function fillAddress(){
    if(userAddress === null || userAddress.length === 0){
        document.getElementById("user-address").innerText = "No Address Input";
    } else {
        document.getElementById("user-address").innerText = userAddress;
    }
}

/**
 * Js hook for sortby dropdown
 * @param type a string, either 'price', 'distance', 'popularity' or 'relevance'
 */
var lastSort = '';
function sortby(type){
    try{
        $()
        restaurants.sort((a,b) => (a[type] > b[type]) ? 1 : ((b[type] > a[type]) ? -1 : 0));
        if (lastSort == type){
            restaurants.reverse();
            lastSort = '';
        } else {
            lastSort = type;
        }
        var search = document.getElementById("searchbox").value;
        if(search){
            createSearchedRestaurants(search);
        }else{
            createRestaurants();
        }

    }catch(e){
        alert(e);
    }
}
/**
 * A reset function for the dropdown hover.
 * Please don't touch this lol
 */
// function reset(){
//     document.getElementById("dropdownblock").style.opacity = "";
// }

// This variable supports reverse sorting... boy is this getting messy lmao. Glad they don't look at the code.
var activeCategories = allCats();

function createSearchedRestaurants(query){
    var eleList = document.getElementById("restaurant-ul");
    clearDiv(eleList);
    restaurants.forEach(element => {
        if (element.name.toLowerCase().includes(query.toLowerCase()))
            eleList.appendChild(createRestListItem(element));
    });
}
// Call this to refresh restaurants UI
function createRestaurants(){
    var eleList = document.getElementById("restaurant-ul");
    clearDiv(eleList);

    types = hiddenTypes();
    if (activeCategories.length !== allCats().length){
        types = activeCategories;
    }

    eleList.appendChild(createRandomization());
    restaurants.forEach(element => {
        if (doIContain(element["type"], types))
            eleList.appendChild(createRestListItem(element));
    });

};

/*
* check for types overlap.
*/
function doIContain(element, types){
    var anwser = false;
    for(var i = 0; i < element.length; i++){
        if(!types.includes(element[i])){
            var anwser = true;
            break;
        }
    }
    return anwser;
}

function createRandomization() {
    var listOfMenuItems = [];
    types = hiddenTypes();
    if (activeCategories.length !== allCats().length){
        types = activeCategories;
    }
    restaurants.forEach(e => {
        if (doIContain(e["type"], types))
        listOfMenuItems = listOfMenuItems.concat(e['foodItems']);
    });
    for (var i = listOfMenuItems.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = listOfMenuItems[i];
        listOfMenuItems[i] = listOfMenuItems[j];
        listOfMenuItems[j] = temp;
    }
    
    var li = document.createElement("li");
    li.className = "restaurant-li random";

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
    var menuItems = createItemOrb(listOfMenuItems.slice(0, 3), true. false);
    itemDiv = appendMultiple(itemDiv, [orbDiv, menuItems]);

    li.appendChild(itemDiv);
    return li; 
}

// When you click on a random food item it will take you to that restaurnts menu
function randomItemClick(item){
    console.log(item['target']['alt']);
}

function clearSelection(){
    restaurants_categories.forEach(iter => {
        iter["active"] = true;
    });
    activeCategories = allCats();
    $(".food-item-check").css("opacity", "0%");
    $(".cancelButton").css("visibility", "hidden");
    createRestaurants();
}

/**
 * Called when a string of text is entered into the search box
 */
function onSearch(){
    var x = document.getElementById("searchbox").value;
    if(!x){
         clearSearch();
    }else{
        $('#xicon').css("visibility", "visible");
        $('#categories-overlay').css("visibility", "visible").css("opacity", "65%");
        createSearchedRestaurants(x);
    }

}

/**
 * Called when the little 'x' is clicked in the search bar
 */
function clearSearch(){
    document.getElementById("searchbox").value = "";
    $('#xicon').css("visibility", "hidden");
    $('#categories-overlay').css("visibility", "hidden").css("opacity", "0%");
    createRestaurants();
}

// Creates li.
function createRestListItem(element){
    var li = document.createElement("li");
    li.className = "restaurant-li";

    // Create sub div
    var itemDiv = document.createElement("div");
    itemDiv.className = "restaurant-item";
    itemDiv.style.backgroundColor = element['backgroundColour'];

    // Create img
    var img = document.createElement("img");
    img.className = "restaurant-image"
    img.src = element['img'];
    img.alt = element['name'];
    
    // Create menu item orbs
    var v = Object.keys(element).includes('textColour');
    var menuItems = createItemOrb(element["foodItems"], false, v);
    
    // Restaurant information div's
    var infoDiv = document.createElement("div");
    infoDiv.className = "restaurant-information";
    var dist = document.createElement("h6");
    dist.className = "restaurant-distance";
    dist.textContent = element["distance"]+" km";
    var time = document.createElement("h6");
    time.className = "restaurant-time";
    time.textContent = element["time"]+" m";
    if(Object.keys(element).includes('textColour')){
        dist.style.color = element['textColour']
        time.style.color = element['textColour']
    }
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
    route.id = element['name'];
    route.onclick = proceedToMenu;
    route.innerText = "Proceed To Menu";
    route.style.textDecoration = "underline"
    imgOverlay = appendMultiple(imgOverlay, [restName, desc, route]);

    // Combine
    itemDiv = appendMultiple(itemDiv, [img, menuItems, infoDiv, imgOverlay]);

    li.appendChild(itemDiv);
    return li;
};

function proceedToMenu(objClicked) {
    console.log(objClicked['target'].id)
    localStorage.setItem('restaurant', objClicked['target'].id);
    window.location.href='./menu_page.html';
}

// Creates <div id="food-item-list">...
function createItemOrb(element, random=false, color=false){
    //console.log(element, random, color)
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
        if(color)
            title.style.color = "black"
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

    $(".food-item").click(function(event){

        // let element = $(this);
        // var e = event.target;
        // alert(event.target["id"]);
        // element.css("opacity: 0%");
        var oneActive = false;
        restaurants_categories.forEach(iter => {
            //console.log("t" + iter["name"] + " ");
            // console.log(event.element["target"]);
            if(iter["name"] === event.target["id"]){
                iter["active"] = !iter["active"];
                if(iter["active"]){
                    $(this).find(".food-item-check").css("opacity", "0%");

                }else{
                    $(this).find(".food-item-check").css("opacity", "75%");
                    oneActive = true;
                }
            } 
        });
        if(oneActive){
            $(".cancelButton").css("visibility", "visible");
        }else{
            $(".cancelButton").css("visibility", "hidden");
        }

        if (activeCategories.includes(event.target["id"])){
            activeCategories.splice(activeCategories.indexOf(event.target["id"]), 1);
        } else {
            activeCategories.push(event.target["id"]);
        }
        //console.log(activeCategories);
        createRestaurants();
    });

    $(".scrollbar-food-category").slick({
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        speed: 350,
        initialSlide: 2,
        arrows: true,
        prevArrow: '<div class="chevron">&#8249;</div>',
        nextArrow: '<div class="chevron">&#8250;</div>'
        // prevArrow: '<button class="slide-arrow prev-arrow"></button>',
        // nextArrow: '<button class="slide-arrow next-arrow"></button>'
    });
};

function createDivCat(element){
    var div = document.createElement("div");
    div.className = "food-item";

    
    var img = document.createElement("img");
    img.src = element["img"];
    img.alt = element["name"];
    img.id = element["name"];

    var overlay = document.createElement("div");
    overlay.className="food-item-overlay";
    overlay.id = element["name"];

    //div.onclick = sortOnClick;

    var overlaycheck = document.createElement("div");
    overlaycheck.innerHTML="&#x2713;"
    overlaycheck.className="food-item-check";
    overlaycheck.id = element["name"];

    var title = document.createElement("h5");
    var text = document.createTextNode(element["name"]);
    title.appendChild(text);
    overlay.appendChild(title);
    overlay.appendChild(overlaycheck);
    title.id = element["name"];

    div = appendMultiple(div, [img, overlay]);

    return div;
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

function allCats(){
    all = [];
    restaurants_categories.forEach(item => {
        all.push(item['name']);
    });
    return all;
}