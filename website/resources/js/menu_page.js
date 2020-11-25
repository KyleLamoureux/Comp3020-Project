'use strict'; 
//needed to load the content of the menu page and functionalities such as remove, add, etc.
if(document.readyState === "loading"){
  document.addEventListener("DOMContentLoaded",main);
}else{
  main();
} //end if-else 


const ALTERATION_TYPE = "Alterations";
const EXTRAS_TYPE = "Extras";
const STYLE_TYPE = "Style";
const CHECKBOX_TYPE = "checkbox";
const RADIOBTN_TYPE = "radio"; 
const TYPE = "type";
const DATA = "data";
let modalOn = false;
let isRadiobtnClicked = false;
let selectedOptions = []; //selected options per cart item.
let savedPrice = null;

function main(){
  let removeCartItemButtons = document.getElementsByClassName("btn-remove");

  for(let i = 0; i < removeCartItemButtons.length; i++){
      let button = removeCartItemButtons[i];
      button.addEventListener('click',removeCartItem);
  }//end for
  
  //CHOSEN RESTAURANT GOES HERE.
  let restaurantName = localStorage.getItem('restaurant');

  //display the restaurant's name
  let titleName = document.getElementsByClassName("heading-text")[0];
  titleName.innerText = restaurantName;

  for(let restaurant in menus){//iterate through the restaurants
    if(menus.hasOwnProperty(restaurant)){

      if(restaurantName === restaurant){//find the restaurant the user has clicked.

        for(let category in menus[restaurant]){
          if(menus[restaurant].hasOwnProperty(category)){
              //category categories
              addMenuCategory(category, menus[restaurant][category][0].image);
              //food item list for each category.
              let categoryFoodItems = menus[restaurant][category]; //list of food items from the category.
              for(let j = 0; j < categoryFoodItems.length; j++){
              
                addFoodItems(category,categoryFoodItems[j].name,categoryFoodItems[j].price,
                                categoryFoodItems[j].description,categoryFoodItems[j].image, categoryFoodItems[j].options);
              }//end nested for
         
            }//end if
        }//end for
      }
    }//end if
  }//end for

  $(".menu-category-item").click(openFoodModal)
  
  
  if(localStorage.getItem('dish') !== null)
    var orb = document.getElementById(presetDish()).click();
  
}//end main

/**
 * presetDish - Finds the 'random dish' dish in the menu of the restaurnt and returns which category it belongs to.
 */
function presetDish(){
  var result = "";
  var dishName = localStorage.getItem('dish');
  var restMenu = menus[localStorage.getItem('restaurant')];
  var keys = Object.keys(restMenu);

  keys.forEach(key => {
    restMenu[key].forEach(item => {
      if(item['name']===dishName){
        result =  "hidden_category_"+key
      }
    });
  });
  return result;
}

/**
 * addMenuCategory - a function that adds menu category 'orb' to the menu page.
 * @param {*} categoryName the category that will be added to the menu page.
 */
function addMenuCategory(categoryName, img){
  let categoryDiv = document.getElementsByClassName("scrollbar-category")[0];
  let aTag = document.createElement("a");
  aTag.href = "#category_"+categoryName;
  aTag.id = "hidden_category_"+categoryName;

  let aTagContent = `
  <div class="category-item">
  <img src="${img}" alt="${categoryName}">
  <div class="category-item-overlay">
          <p>${categoryName}</p>
  </div>


  </div>
  `;

  aTag.innerHTML = aTagContent;
  categoryDiv.append(aTag);
  addMenuCategoryTitle(categoryName);//add the category title to the menu list section.
}//end addMenuCategory

/**
 * addMenuCategoryTitle - a function that adds the title of the category on the menu list section.
 * @param {*} categoryName is the name to be displayed (underlined) to the menu page.
 */
function addMenuCategoryTitle(categoryName){
  let menuList = document.getElementsByClassName("menulist")[0];
  let menuCategory = document.createElement("div");
  menuCategory.classList.add("menu-categories");//add the css to the created div.

  let menuCategoryID = "category_"+categoryName;
  let menuCategoryContent = `
  <div class="huh"></div>
  <h3 id="${menuCategoryID}" class="menu-category-namee">${categoryName}</h3>
  <hr class="menu-category-name-underlined">
  <div class="menu-category-grouped-items">
      <!--Food items for Appetizer are inserted in menu_page.js-->
  </div> 
  `;
 
  menuCategory.innerHTML = menuCategoryContent;
  menuList.append(menuCategory);

}//end addMenuCategoryTitle

/**
 * addFoodItems - add food items on the menu section depending on the given food category.
 * @param {*} foodCategory is the name of the food category. i.e. Appetizer, Main, Side, Drinks, etc.
 * @param {*} foodName is the name of the food to be inserted.
 * @param {*} foodPrice is the price of the food.
 * @param {*} foodDesc is the description of the food.
 * @param {*} foodImg  is the image of the food.
 * @param {*} foodItemOptions is the options for the selected food. 
 * @return it does not return anything.
 */
function addFoodItems(foodCategory,foodName,foodPrice,foodDesc,foodImg, foodItemOptions){
  let categoryNames = document.getElementsByClassName("menu-categories");

  //need to determine which category the food belongs to. 
  let index = 0;
  for(let i = 0; i < categoryNames.length; i++){
    if(foodCategory === categoryNames[i].getElementsByClassName("menu-category-namee")[0].innerText){
      index = i;
    }//end if
  }//end for


  categoryNames = document.getElementsByClassName("menu-categories")[index];
  let foodItems = categoryNames.getElementsByClassName("menu-category-grouped-items")[0];
  

  let newFood = document.createElement("div");//new menu-category-item 
  newFood.classList.add("menu-category-item");//add the css for the new div.

  //insert the food-item
  let newFoodContent = `
    <img class="menu-category-item-image" src="${foodImg}" alt="${foodName}">
    <div class="menu-category-item-image-overlay">
        <p class="menu-category-item-description">${foodDesc}</p>
    </div>
    <h5 class="menu-category-item-title">${foodName}</h5>
    <h5 class="menu-category-item-price">$${foodPrice.toFixed(2)}</h5>
  `;


  newFood.innerHTML = newFoodContent;
  foodItems.append(newFood);//add the new food to the list (inside menu-category-grouped-items)
  newFood.options = foodItemOptions;

  // newFood.addEventListener("click",openFoodModal);//image is clicked
 
}//end addFoodItems


/**
 * openFoodModal - once a food item is clicked, a window will be shown containing different options 
 *              for the food item and its price.
 */
function openFoodModal(event){
  var item = $(this);
  //console.log("openfoodmodal..");
  let foodItemTitle = null;
  let foodItemImage = null;
  //let foodItemDescription = null;
  let foodItemPrice = null;
  let foodItemQuantity = 1;
  let foodItemOptions = null;
  let buttonsContent = null;
  let foodOptionsDiv = null;

  if(!modalOn){
      
    //get the information:
    let edtFoodItem = event.target;
    let edtFoodTitle = edtFoodItem.editFoodTitle;
    let edtFoodPrice = edtFoodItem.editFoodPrice;
    let edtFoodImage = edtFoodItem.editFoodImage;
    let edtFoodQuantity = edtFoodItem.editFoodQuantity;
    let edtFoodOptionsDiv = edtFoodItem.editFoodOptionsDiv;

    //check if the click is from the edit button or from the food item.
    let isFromEditClick = !(edtFoodTitle === undefined && edtFoodPrice === undefined 
                            && edtFoodImage === undefined && edtFoodQuantity === undefined 
                                && edtFoodOptionsDiv === undefined);
   
  
    if(isFromEditClick){
      //console.log("edit button is clicked." + edtFoodTitle + ", " + edtFoodPrice);
      foodItemTitle = edtFoodTitle;
      foodItemPrice = edtFoodPrice;
      foodItemImage = edtFoodImage;
      foodItemQuantity = edtFoodQuantity;
      foodOptionsDiv = edtFoodOptionsDiv;
      console.log(foodOptionsDiv);
      //"Save" buton instead of "add to cart" if the click is from edit btn
      buttonsContent = `
      <button class="button-save-to-cart">Save</button><br>
      <button class="button-cancel-cart" onclick="closeMenuModal()">Cancel</button>
      `;

    }else{
      //console.log("edit button is not clicked.");
      foodItemTitle = item.find(".menu-category-item-title").first().text();
      foodItemImage = item.find(".menu-category-item-image").first().attr('src');
      //foodItemDescription = item.find(".menu-category-item-description").first().text();
      foodItemPrice = item.find(".menu-category-item-price").first().text();

      foodOptionsDiv = document.createElement("div");//wrapper for the food options.
      foodItemOptions = item.get(0).options;
      foodOptionsDiv.classList.add("food-options");
      addOptions(foodItemOptions,foodOptionsDiv);
      
      //add to cart button if the click is from the food item.
      buttonsContent = `
      <button class="button-add-to-cart">Add to cart</button><br>
      <button class="button-cancel-cart" onclick="closeMenuModal()">Cancel</button>
      `;
    
    }//end if-else
    
    
    //show the content based on the given information.
    let modal = document.getElementById("menu-modal");
    let foodModalContent = `
    <div id="modal-description">
        <h4 class="modal-food-title">${foodItemTitle}</h4>
        <h5 class="modal-food-price">Price: ${foodItemPrice}</h5>
    </div>`;
    
    //TODO:FUNCTIONALITY FOR THE QUANTITY
    let foodNumBtns = document.createElement("div");
    foodNumBtns.classList.add("food-number-button");
    foodNumBtns.innerHTML = `
    <input class="num-food-input" type="number" value="${foodItemQuantity}">
    `;

    let buttonsDiv = document.createElement("div");//add and cancel button in the modal.
    buttonsDiv.classList.add("modify-cart"); 
    buttonsDiv.innerHTML = buttonsContent; //add the buttons in the div.

    //add all content to the modal.
    modal.innerHTML = foodModalContent;
    modal.append(foodOptionsDiv);
    modal.append(foodNumBtns);
    modal.append(buttonsDiv);
    modal.style.display = "block";
    blurControl();
    modalOn = true;
  
    addFunctionality(foodItemImage,foodOptionsDiv);
    quantityFunctionality();
    saveFunctionality(foodItemTitle,foodItemPrice,foodItemQuantity,selectedOptions);
    savedPrice = null;
  }//end if


}//end openFoodModal

/**
 * addOptions - creates tags and put all the food option information in those tags.
 * @param {*} foodItemOptions the list of options for the food.
 * @param {*} foodOptionsDiv the parent tag for the entire options section.
 */
function addOptions(foodItemOptions,foodOptionsDiv){
  for(let optionType in foodItemOptions){//iterate through the options for each food item.
    
    let foodOptionType = document.createElement("div");//create a div for the option type(checkbox/radio).
    if(foodItemOptions.hasOwnProperty(optionType)){//ensures that the option type (Alteration,Extras,Style) is in the menus data.

      let foodOptionTypeContent = `<h3 class="option-category">${optionType}</h3>`;
      if(foodItemOptions[optionType].hasOwnProperty(TYPE) 
           && foodItemOptions[optionType].hasOwnProperty(DATA)){//ensures that option has a "type" key

        if(foodItemOptions[optionType][TYPE] === CHECKBOX_TYPE){
          foodOptionType.classList.add("checkbox-option");

          //create checkboxes

          for(let i = 0; i < foodItemOptions[optionType][DATA].length; i++ ){
            let dataName = foodItemOptions[optionType][DATA][i].name;
            let dataPrice = foodItemOptions[optionType][DATA][i].price;

            let displayPrice = "";
            if(dataPrice < 0){
              dataPrice *= -1;
              displayPrice = "-$" + dataPrice.toFixed(2);
            }else{
              displayPrice = "+$" + dataPrice.toFixed(2);
            }
          
            foodOptionTypeContent +=`
            <div class="food-option-name">
            <input class="food-option-item-checkbox" type="checkbox" id="${dataName}" name="food-options" value="${dataName}" onclick="updateFoodPrice()" > 
            <label class="food-option-name-label" for="${dataName}">${dataName}</label>
            </div>
            <div class="food-option-price">
            <label class="food-option-price-label">${displayPrice}</label>
            </div>
            `;

          } //end nested-for

        }else if(foodItemOptions[optionType][TYPE] === RADIOBTN_TYPE){
          foodOptionType.classList.add("radio-button-option");
          //create radiobtns

          for(let i = 0; i < foodItemOptions[optionType][DATA].length; i++ ){
            let dataName = foodItemOptions[optionType][DATA][i].name;
            let dataPrice = foodItemOptions[optionType][DATA][i].price;
          
            foodOptionTypeContent +=`
            <div class="food-option-name">
            <input class="food-option-item-radiobtn" type="radio" id="${dataName}" name="food-options" value="${dataName}" onclick="updateFoodPrice()" > 
            <label class="food-option-name-label" for="${dataName}">${dataName}</label>
            </div>
            <div class="food-option-price">
            <label class="food-option-price-label">${"$" + dataPrice.toFixed(2)}</label>
            </div>
            `;

          } //end nested-for

        }//end if-elseif

        
      }
      
      foodOptionType.innerHTML = foodOptionTypeContent;
  
    }//end if
    foodOptionsDiv.append(foodOptionType);

  }//end for
}//end addOptions

/**
 * updateFoodPrice - function that updates the price from the food modal when 
 *                  a checkbox/radibtn is clicked from the given options.
 */
function updateFoodPrice(){
  let priceDifference = 0;  
 
  selectedOptions = [];

  //for radiobtn
  let radioBtnDiv = document.getElementsByClassName("radio-button-option");
  for(let i = 0; i < radioBtnDiv.length; i++){
    let radiobtns = radioBtnDiv[i].getElementsByClassName("food-option-item-radiobtn");
    let optionItemName = radioBtnDiv[i].getElementsByClassName("food-option-name-label");
    let optionItemPrice = radioBtnDiv[i].getElementsByClassName("food-option-price-label");
    for(let j = 0; j < radiobtns.length; j++){

      if(radiobtns[j].checked){
        //console.log(optionItemName[j].innerText + " is clicked with price " + optionItemPrice[j].innerText);
        priceDifference += parseFloat(optionItemPrice[j].innerText.replace("$",""));
        isRadiobtnClicked = true;

        //save the selected radiobtn. no duplicates.
        if(!selectedOptions.includes(optionItemName[j].innerText)){
          //console.log("inserting (radiobtn) " + optionItemName[j].innerText)
          selectedOptions.push(optionItemName[j].innerText);
        }

      }

    }//end nested for

  }//end for    

  //for checkbox
  let checkboxDiv = document.getElementsByClassName("checkbox-option");
  for(let i = 0; i < checkboxDiv.length; i++){
    let checkboxes = checkboxDiv[i].getElementsByClassName("food-option-item-checkbox");
    let optionItemName = checkboxDiv[i].getElementsByClassName("food-option-name-label");
    let optionItemPrice = checkboxDiv[i].getElementsByClassName("food-option-price-label");
    for(let j = 0; j < checkboxes.length; j++){

      if(checkboxes[j].checked){
        //console.log(optionItemName[j].innerText + " is clicked with price " + optionItemPrice[j].innerText);
        priceDifference += parseFloat(optionItemPrice[j].innerText.replace("$",""));

        //save the selected checkbox. no duplicates.
        if(!selectedOptions.includes(optionItemName[j].innerText)){
          //console.log("inserting (checkbox) " + optionItemName[j].innerText)
          selectedOptions.push(optionItemName[j].innerText);
        }

      }

    }//end nested for
  }//end for


  //console.log("from updatefoodprice method: " + selectedOptions + " with length " + selectedOptions.length +"\n");  
  //change the displayed price on the food modal.
  let modalFoodPrice = document.getElementsByClassName("modal-food-price")[0];
  let originalPrice = parseFloat(modalFoodPrice.innerText.replace("Price: $",""));
  //console.log("Total difference = " + priceDifference.toFixed(2) + "\n");  

  if(priceDifference == 0){
    modalFoodPrice.innerText = "Price: $" + originalPrice.toFixed(2);
  }else if(priceDifference > 0 ){
    modalFoodPrice.innerText = "Price: $" + originalPrice.toFixed(2) + " (+$" + priceDifference.toFixed(2) + ")";
    savedPrice = modalFoodPrice.innerText;
  }else{
    priceDifference *= -1;
    modalFoodPrice.innerText = "Price: $" + originalPrice.toFixed(2) + " (-$" + priceDifference.toFixed(2) + ")";
    savedPrice = modalFoodPrice.innerText;
  }

}//end updateFoodPrice

/**
 * addFunctionality - implements the add to cart functionality when adding an item from the food modal.
 * @param foodItemImage - contains the image of the food.
 * @param foodOptionsDiv - the div that contains all the options (including the selected options) for the food item.
 */
function addFunctionality(foodItemImage,foodOptionsDiv){
  let addToCartButtons = document.getElementsByClassName("button-add-to-cart");  
  for(let i = 0; i < addToCartButtons.length; i++){
     let button = addToCartButtons[i];
     button.addEventListener('click',addToCartClicked);
     button.foodItemImg = foodItemImage;
     button.foodItemOptions = foodOptionsDiv;    
  }//end for

}//end addFunctionality

/**
 * saveFunctionality - implements the save functionality when editing an item from the food modal.
 * @param {*} foodItemTitle is name of the food
 * @param {*} foodItemPrice is the price of the food.
 * @param {*} foodItemQuantity is the quantity of the item.
 * @param {*} optionsSelected the selected options of the food.
 */
function saveFunctionality(foodItemTitle,foodItemPrice,foodItemQuantity,optionsSelected){
  let saveButtons = document.getElementsByClassName("button-save-to-cart");

  for(let i = 0; i < saveButtons.length; i++){
    let button = saveButtons[i];
    button.addEventListener('click',saveClicked);
    button.foodItemTitle = foodItemTitle;
    button.foodItemPrice = foodItemPrice;
    button.foodItemQuantity = foodItemQuantity;
    button.foodItemOptions = optionsSelected;    
 }//end for

}//end saveFunctionality.

/**
 * quantityFunctionality - implements the quantity functionality when a quantity is entered from the food modal.
 */
function quantityFunctionality(){
  let quantityInputs = document.getElementsByClassName("num-food-input");
  for(let i = 0; i < quantityInputs.length; i++){
    let quantity = quantityInputs[i];
    quantity.addEventListener('change',quantityChanged);
 }//end for
}//end quantityFunctionality


/**
 * quantityChanged - function that makes invalid input default to 1.
 */
function quantityChanged(event) {
  let input = event.target
  if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
  }
}//end quantityChanged

/**
 * addToCartClicked - event click listener when the add button is clicked in the food modal window. Also updates the cart subtotal.
 * @param{event} event will provide the information of the food-item in order to pass it to the cart section.
 */
function addToCartClicked(event){
  console.log(" ");
  console.log("addToCartClicked function");
  
  let radioBtnDiv = document.getElementsByClassName("radio-button-option"); 
  //only lets the user add items to the cart if the radiobutton is clicked, or if there is no radiobutton in the food modal i.e. drinks.
  if(isRadiobtnClicked || radioBtnDiv.length === 0){
    let addButton = event.target;//target is the add button.
    let foodModalInfo = addButton.parentElement.parentElement;//moves to the modal div (the parent element of the whole content)
    
    //get the information from the modal.
    let foodItemTitle = foodModalInfo.getElementsByClassName("modal-food-title")[0].innerText;
    let foodItemPrice = foodModalInfo.getElementsByClassName("modal-food-price")[0].innerText;
    let foodItemImage = event.target.foodItemImg;
    let foodItemOptions =event.target.foodItemOptions;
    let foodQuantity = foodModalInfo.getElementsByClassName("num-food-input")[0].value;
    foodQuantity = parseFloat(foodQuantity);

    //check if the price needs to be updated.
    foodItemPrice = foodItemPrice.replace("Price:","");
    let posOne = foodItemPrice.indexOf("(");
    let posTwo = foodItemPrice.indexOf(")");
    
    if(posOne === -1 || posTwo === -1){//no changes to the price
      let newPrice = parseFloat(foodItemPrice.replace("$","")) * foodQuantity;
      newPrice = "Price: $" + newPrice.toFixed(2);
      addItemToCart(foodItemTitle,newPrice,foodQuantity,foodItemImage,foodItemOptions);
      //alert(foodItemTitle + " with a price of" + foodItemPrice.replace("Price:","") + " has been added to the cart.");
    }else{

      let updatePrice = foodItemPrice.substring(posOne);//additional price based on the options selected.
      let originalPrice =foodItemPrice.replace(updatePrice,""); //price displayed from the menu page.

      originalPrice = parseFloat(originalPrice.replace("$",""));//convert to float.

      updatePrice = foodItemPrice.substring(posOne + 1, posTwo); //remove all the brackets.
      updatePrice = parseFloat(updatePrice.replace("$",""));//convert to float

      //console.log(typeof(updatePrice))
      let newPrice = (originalPrice + updatePrice) * foodQuantity;
      newPrice = "Price: $" + newPrice.toFixed(2);

      addItemToCart(foodItemTitle,newPrice, foodQuantity,foodItemImage, foodItemOptions);
      //alert(foodItemTitle + " with a price of " + originalPrice + " + " + updatePrice + " = " + newPrice);
    
    }//end if-else

    updateCartTotal();
    closeMenuModal();
    console.log("selectedOptions = " + selectedOptions);
    selectedOptions = [];
    
  }else{
    //TODO: change the message.
    alert("please select the following option.");
  }//end if-else
  
}//end addToCartClicked


/**
 * saveClicked - event click listener when the save button is clicked from the food modal.
 *              -updates the specific item (price and/or options) from the cart.
 */
function saveClicked(event){
  let saveButton = event.target;//target is the save button.
   
  let foodName = saveButton.foodItemTitle;
  let foodPrice = saveButton.foodItemPrice;
  let foodQuantity = saveButton.foodItemQuantity;
  let foodOptions = saveButton.foodItemOptions;
  
  let posOne = foodPrice.indexOf("(");
  let posTwo = foodPrice.indexOf(")");
  console.log(" ");
  console.log("saveClicked function");
  updateFoodPrice();
  if(posOne !== -1 && posTwo !== -1){
    
    let updatePrice = foodPrice.substring(posOne);//additional price based on the options selected.

    let originalPrice =foodPrice.replace(updatePrice,""); //price displayed from the menu page.
    originalPrice = parseFloat(originalPrice.replace("$",""));//convert to float.

    updatePrice = foodPrice.substring(posOne + 1, posTwo); //remove all the brackets.
    updatePrice = parseFloat(updatePrice.replace("$",""));//convert to float

    let newPrice = originalPrice + updatePrice;
    newPrice = newPrice.toFixed(2);
  }
 
  //find the cart item that has the same information as foodName, foodPrice and foodOptions.
  let whichPosition = findCartItem(foodName,foodPrice,foodOptions);
  
  console.log("THE POSITION WHERE THE CART ITEM IS FOUND IS " + whichPosition);
  console.log("and selected options are : " +selectedOptions);
  if(whichPosition !== -1){
    updateOptionsForCartItem(whichPosition);
  }
  updateCartTotal();
  closeMenuModal();
  console.log("selectedOptions = " + selectedOptions);
  selectedOptions = [];

}//end saveClicked

/**
 * findCartItem - finds the cart item that has the given foodName, foodPrice, food options.
 * @foodName name of the food.
 * @foodPrice price of the food.
 * @foodOptions is the list of selected options for the entire cart items. (2d array)
 * @return it will return the position of the cart item if found. -1 if not not found.
 */
function findCartItem(foodName,foodPrice,foodOptions){
  //console.log("FIND CART ITEM FUNCTION");
  //console.log(foodName,foodPrice,foodOptions);
  let cartItems = document.getElementsByClassName("cart-row");

  let isFound = false;
  let index = -1;

  for(let i = 0; i < cartItems.length && !isFound; i++){
    let cartItemName = cartItems[i].getElementsByClassName("cart-item-title")[0].innerText;
    let cartItemPrice = cartItems[i].getElementsByClassName("cart-price")[0].innerText;
    cartItemPrice = cartItemPrice.replace("$","");
    
    //console.log(cartItemName,cartItemPrice);
    
    let listOptions = cartItems[i].getElementsByClassName("list-option-item");
    let isOptionFound = false;
    for(let i = 0; i < foodOptions.length; i++){
    
      
      if(foodOptions[i].length === listOptions.length){

        if(foodOptions[i].length === 0 && listOptions.length === 0){
          isOptionFound = true;
        }else{

          for (let j = 0; j < listOptions.length && !isOptionFound; j++){
            let cartItemOptions = listOptions[j].innerText;
            isOptionFound = foodOptions[i][j] === cartItemOptions;
          }//end nested for

        }//end nested-if-else

      }//end if

    }//end for
    

    isFound = (foodName === cartItemName) && isOptionFound;
    index = i;
  }//end for

  //console.log("findcartItem is found? "  + isFound + " at positon " + index);
  return index;

}//end findCartItem

/**
 * updateOptionsForCartItem - updates the options for a cart item when the save button is clicked from food modal.
 * @param index is the position of the cart item that needs to be updated.
 */
function updateOptionsForCartItem(index){
  console.log(" ");
  console.log("updateOptionsForCartItem function");

  let cartItem = document.getElementsByClassName("cart-row")[index];
  //let cartItemName = cartItem.getElementsByClassName("cart-item-title")[0].innerText;
  let cartItemPrice = cartItem.getElementsByClassName("cart-price")[0];
  let cartItemQuantity = cartItem.getElementsByClassName("cart-item-quantity")[0];
  let ulTag = cartItem.getElementsByClassName("list-options")[0];
  let liTag = cartItem.getElementsByClassName("list-option-item");
  
  let savedQuantity = parseFloat(cartItemQuantity.innerText.replace("Quantity: ",""));
  console.log("cartItemQuantity is " + savedQuantity);
  //if(selectedOptions.length !== 0){//new changes
    //remove all the li tags before adding the new changes.
    ulTag.innerHTML = ``; //remove the li tags

    for(let i = 0; i < selectedOptions.length; i++){
      let newOptionItem = document.createElement("li");
      newOptionItem.classList.add("list-option-item");
      newOptionItem.innerText = selectedOptions[i];
      ulTag.append(newOptionItem);
    }//end for

    let modalFoodPrice = document.getElementsByClassName("modal-food-price")[0].innerText;
    let originalPrice = modalFoodPrice.replace("Price: $","");
    
    //document.getElementsByClassName("num-food-input")[0].value = savedQuantity;
    let modalQuantity = document.getElementsByClassName("num-food-input")[0].value;
    console.log("modal quantity " + modalQuantity);
    let quantity = parseFloat(modalQuantity);

    let posOne = originalPrice.indexOf("(");
    let posTwo = originalPrice.indexOf(")");

    if(posOne === -1 && posTwo === -1){
      originalPrice = parseFloat(originalPrice);

      let totalPrice = originalPrice * quantity;
      //cartItemPrice.innerText = "$" + originalPrice;//no additions selected
      cartItemPrice.innerText = "$" + totalPrice.toFixed(2);
      cartItemQuantity.innerText = "Quantity: " + quantity;
      console.log("a)original price is " + originalPrice + " new price is " + totalPrice);
    }else{

      let additionalPrice = originalPrice.substring(posOne + 1,posTwo).replace("$","");
      //convert to float
      originalPrice = parseFloat(originalPrice);
      additionalPrice = parseFloat(additionalPrice);
      let totalPrice = (originalPrice + additionalPrice).toFixed(2) * quantity;
      //console.log("originalprice " + originalPrice + ", additionalPrice " + additionalPrice + " = " + totalPrice);
      cartItemPrice.innerText = "$" + totalPrice.toFixed(2);
      cartItemQuantity.innerText = "Quantity: " + quantity;
      console.log("b)original price is " + originalPrice + " new price is " + totalPrice);

    }//end nested-f-else
    
   
  //}//end if
  




}//end updateOptionsForCartItem

/**
 * addItemToCart - a function that adds the given information from the food modal to the cart.
 * @param {*} foodItemTitle is the name of the food.
 * @param {*} foodItemPrice is the price of the food.
 * @param {*} foodQuantity is the quantity of the food.
 * @param {*} foodItemImage  is the image of the food.
 * @param {*} foodItemOptions is the div options content for the food including the selected options.
 */
function addItemToCart(foodItemTitle,foodItemPrice,foodQuantity,foodItemImage,foodItemOptions){
  let cartRow = document.createElement("div");//row to be created
  cartRow.classList.add("cart-row");//get the css style for this div.

  let cartItems = document.getElementsByClassName("cart-items")[0];//get the div from html
  foodItemPrice = foodItemPrice.replace("Price:","");
  
  //top section of the div.
  let topContent = `
  <div class="cart-item-info">
    <img class="cart-item-image" src="${foodItemImage}" alt=${foodItemTitle}>               
    <h4 class="cart-item-title">${foodItemTitle}</h4>
    <div class="cart-item-quantity">Quantity: ${foodQuantity}</div>
  </div>
  `;

  //bottom sectioon of div.
  let botContent = `
  <div class="cart-bottom-section">
    <h4 class="cart-price">${foodItemPrice}</h4>
    <div class="btn">
      <button class="btn btn-edit" type="button" title="Edit"><img title ="editImage" src="../resources/images/edit.png"/></button>
      <button class="btn btn-remove" type="button" title="Remove"><img title ="Remove" src="../resources/images/cancel.png"/></button>
    </div>  
  </div> 
  `;

  //mid section of div.
  //need to seperate the options div since we have to loop through the selectedOptions list.
  let optionsDiv = document.createElement("div");
  optionsDiv.classList.add("options");
  let optionsList = document.createElement("ul");
  optionsList.classList.add("list-options");

  for(let i = 0; i < selectedOptions.length; i++){
    let optionItem = document.createElement("li");
    optionItem.classList.add("list-option-item");
    optionItem.innerText = "- " + selectedOptions[i];
    optionsList.append(optionItem);
  }//end for


  optionsDiv.append(optionsList);
  cartRow.innerHTML = topContent;
  cartRow.append(optionsDiv);
  cartRow.innerHTML +=botContent;

  cartItems.append(cartRow);//add the new row to the last row.
  //add the functionality to the (new) remove button since its been added after the document has been loaded
  cartRow.getElementsByClassName("btn-remove")[0].addEventListener("click",removeCartItem);
  cartRow.getElementsByClassName("btn-remove")[0].title = foodItemTitle;
  //pass information from edit to the food modal.
  cartRow.getElementsByClassName("btn-edit")[0].addEventListener("click",editCartItem);
  cartRow.getElementsByClassName("btn-edit")[0].title = foodItemTitle;
  cartRow.getElementsByClassName("btn-edit")[0].price = foodItemPrice;
  cartRow.getElementsByClassName("btn-edit")[0].image = foodItemImage;
  cartRow.getElementsByClassName("btn-edit")[0].quantity = foodQuantity;
  cartRow.getElementsByClassName("btn-edit")[0].options = foodItemOptions;

}//end addItemToCart

/**
 * updateCartTotal - updates the subtotal of the cart.
 */
function updateCartTotal(){
  let cartItemContainer = document.getElementsByClassName("cart-items")[0];//first element
  let cartRows = cartItemContainer.getElementsByClassName("cart-row");
  let total = 0;
  for(let i = 0; i < cartRows.length;i++){
      let cartRow = cartRows[i];//get each cart-item from the list.
      let priceElement = cartRow.getElementsByClassName("cart-price")[0];      
      
      //CASE SENSITIVE. Will result NaN if the first parameter in replace is wrong.
      let price = parseFloat(priceElement.innerHTML.replace("$",""));//get the text inside the priceElement.
      //console.log(price);

      total = total + price;
  }
  
  total = Math.round(total *100)/100;
  document.getElementsByClassName("total-order")[0].innerText = "Subtotal: $" + total.toFixed(2);
  updateNutrition();

}//end updateCartTotal

/**
 * closeMenuModal - closes the menu modal when cancel button is clicked.
 */
function closeMenuModal() {
  let modal = document.getElementById("menu-modal");
  modal.style.display = "none";
  blurControl();
  modalOn = false;  
  isRadiobtnClicked = false;
  selectedOptions = [];
} //end closeMenuModal

/**
 * removeCartItem - removes the selected item from the cart. Also updates the cart total.
 * @param {*} event 
 */
function removeCartItem(event){
  console.log(" ");
  console.log("removeCartItem function: ");

  let buttonClicked = event.target;
  if(confirm("Do you want to delete the order " + buttonClicked.title + "?")){
    let cartItem = buttonClicked.parentElement.parentElement.parentElement;

    cartItem.remove();
    updateCartTotal();//update the subtotal after removing an item.
  }
}//end removeCartItem

/**
 * editCartItem - edit the cart by opening the food modal with the saved information.
 */
function editCartItem(event){
 // alert("edit btn has been clicked");
  let foodItem = event.target;
  foodItem.addEventListener("click",openFoodModal);//eidt btn is clicked
  foodItem.editFoodTitle = foodItem.title;
  foodItem.editFoodImage= foodItem.image;
  foodItem.editFoodQuantity= foodItem.quantity;
  foodItem.editFoodOptionsDiv = foodItem.options;
  
  if(savedPrice !== null){//price has been modified with the selected options.
    savedPrice = savedPrice.replace("Price: ","");
    //console.log("saved price is " + savedPrice)
    foodItem.editFoodPrice = savedPrice;
    
  }else{
    foodItem.editFoodPrice = foodItem.price;
  }
  
  //console.log(foodItem.options.innerHTML);
}//end editCartItem



 /**
  * proceedCheckout - opens the order summary window when checkout button is clicked.
  *                 This will only open when the subtotal is > 0.
  */
 function proceedCheckout() {
  let checkoutOrderContent = document.getElementsByClassName("checkout-div")[0];
  let textPrice = checkoutOrderContent.getElementsByClassName("total-order")[0].innerText.replace("Subtotal: $","");
  let subTotalPrice = parseFloat(textPrice);

  if(subTotalPrice !== 0){
    let modal = document.getElementById("summary-page");
    modal.style.display = "block";
    blurControl();
    getOrderedItems(); //FUNCTION FROM summary_page.js
  }else{
    alert("Please add items to the cart.");
  }//end if-else
}//end proceedCheckout

/**
 * cancelCheckout - closes the order summary window when the x button is clicked.
 */
function cancelCheckout() {
  let modal = document.getElementById("summary-page");
  // Get the <span> element that closes the modal
  let span = document.getElementsByClassName("close")[0];
  modal.style.display = "none";
  blurControl();
}//end cancelCheckout

/**
 * blurControl - controls the blur background when a modal (foodModal, summaryModal) is open.
 */
function blurControl(){
  let containerElement = document.getElementById("background");

  if (containerElement.className == 'blur'){
      containerElement.setAttribute('class', null);
  } else {
      containerElement.setAttribute('class', 'blur');
  }
}//end blurControl



/**
 * addFoodQuantity - increase the food quantity in the food modal by 1
 */
function addFoodQuantity() {
    let currentQuantity = document.getElementsByClassName("num-food-input")[0].value;
    let foodQuantity = document.getElementsByClassName("num-food-input")[0];
    currentQuantity = parseInt(currentQuantity) + 1;
    foodQuantity.setAttribute("value", currentQuantity);
}



/**
 * subtractFoodQuantity - decrease the food quantity in the food modal by 1
 *                        the quantity will not be updated if the current quantity is less than or equal to 1.
 */
function subtractFoodQuantity() {
  let currentQuantity = document.getElementsByClassName("num-food-input")[0].value;
  let foodQuantity = document.getElementsByClassName("num-food-input")[0];
  if (currentQuantity >= 2){
    currentQuantity = parseInt(currentQuantity) - 1;
  }

  foodQuantity.setAttribute("value", currentQuantity);
}



function onlyNumberKey(evt) { 
  // Only ASCII charactar in that range allowed 
  var ASCIICode = (evt.which) ? evt.which : evt.keyCode 
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) 
      return false; 
  return true; 
} 


function checkFoodQuantity(){
    let foodQuantity = document.getElementById("num-food");
    let currentQuantity = parseInt(foodQuantity.value);
    if(currentQuantity === 0 ){
      foodQuantity.setAttribute("value", 1);
    }
}
