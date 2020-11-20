'use strict'; 
//needed to load the content of the menu page and functionalities such as remove, add, etc.
if(document.readyState === "loading"){
  document.addEventListener("DOMContentLoaded",main);
}else{
  main();
} //end if-else 

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
              addMenuCategory(category);
              //food item list for each category.
              let categoryFoodItems = menus[restaurant][category]; //list of food items from the category.
              for(let j = 0; j < categoryFoodItems.length; j++){
                
                /*
                for(let optionType in categoryFoodItems[j].options){
                  if(optionType === "Alterations" && categoryFoodItems[j].options[optionType].hasOwnProperty("data")){

                    for(let x = 0; x < categoryFoodItems[j].options[optionType]["data"].length; x++ ){
                    console.log(categoryFoodItems[j].name + ": " + optionType + " (Alterations) with data " + categoryFoodItems[j].options[optionType]["data"][x].name);
                    }
                  }else if(optionType === "Extras"){
                    console.log(categoryFoodItems[j].name + ": " + optionType + " (Extras)");
                  }//end if-elseif
                }//end for
                */
                addFoodItems(category,categoryFoodItems[j].name,categoryFoodItems[j].price,
                                categoryFoodItems[j].description,categoryFoodItems[j].image, categoryFoodItems[j].options);
              }//end nested for
         
            }//end if
        }//end for
      }
    }//end if
  }//end for

  //TODO: OPTIONS FOR A FOOD ITEM:
  //ACCESSING THE OPTIONS BY: 
  //menus["Perkins"]["Omelets"][0].options["Alterations"]["type"]//to get the type (checkbox)
  //menus["Perkins"]["Omelets"][0].options["Extras"]["type"]//to get the type (checkbox)
  //menus["Perkins"]["Omelets"][0].options["Alterations"]["data"][0] ////to get the data (data is a list)
  //==================
  //Do a check if options contain "Alterations"/"Extras".
  //
  $(".menu-category-item").click(openFoodModal)
  /*
  //INSERT RESTAURANT NAME HERE.
  
  */
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
function addMenuCategory(categoryName){
  let categoryDiv = document.getElementsByClassName("scrollbar-category")[0];
  let aTag = document.createElement("a");
  aTag.href = "#category_"+categoryName;
  aTag.id = "hidden_category_"+categoryName;

  let aTagContent = `
  <div class="category-item">
  <h5>${categoryName}</h5>
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
  <h3 id="${menuCategoryID}" class="menu-category-name">${categoryName}</h3>
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
    if(foodCategory === categoryNames[i].getElementsByClassName("menu-category-name")[0].innerText){
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


let modalOn = false;
const ALTERATION_TYPE = "Alterations";
const EXTRAS_TYPE = "Extras";
const STYLE_TYPE = "Style";
const CHECKBOX_TYPE = "checkbox";
const RADIOBTN_TYPE = "radio"; 
const TYPE = "type";
const DATA = "data";
/**
 * openFoodModal - once a food item is clicked, a window will be shown containing different options 
 *              for the food item and its price.
 */
function openFoodModal(){
  var item = $(this);
  
  if(!modalOn){
    
    //get the information:
    // let foodItem = event.target.parentElement;
    //console.log(foodItem);
    // let foodItemTitle = foodItem.getElementsByClassName("menu-category-item-title")[0].innerText;
    // let foodItemImage = foodItem.getElementsByClassName("menu-category-item-image")[0].src;
    // let foodItemDescription = foodItem.getElementsByClassName("menu-category-item-description")[0].innerText;
    // let foodItemPrice = foodItem.getElementsByClassName("menu-category-item-price")[0].innerText;

    let foodItemTitle = item.find(".menu-category-item-title").first().text();
    let foodItemImage = item.find(".menu-category-item-image").first().attr('src');
    let foodItemDescription = item.find(".menu-category-item-description").first().text();
    let foodItemPrice = item.find(".menu-category-item-price").first().text();

    let foodItemOptions = item.get(0).options;
    //TODO : DISPLAY THE DATA IN HTML. 
    let foodOptionsDiv = document.createElement("div");//wrapper for the food options.
    foodOptionsDiv.classList.add("food-options");

   for(let optionType in foodItemOptions){//iterate through the options for each food item.
    
    let foodOptionType = document.createElement("div");//create a div for the option type(checkbox/radio).
      if(foodItemOptions.hasOwnProperty(optionType)){//ensures that the option type (Alteration,Extras,Style) is in the menus data.

        let foodOptionTypeContent = `<h3 class="option-category">${optionType}</h3>`;
        if(foodItemOptions[optionType].hasOwnProperty(TYPE) 
             && foodItemOptions[optionType].hasOwnProperty(DATA)){//ensures that option has a "type" key

          if(foodItemOptions[optionType][TYPE] === CHECKBOX_TYPE){
            foodOptionType.classList.add("checkbox-option");

            //create checkboxes
            console.log("1)option type: " + optionType + " with " +foodItemOptions[optionType][TYPE] + " !" );

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
            console.log("2)option type: " + optionType + " with " +foodItemOptions[optionType][TYPE] + " !" );

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
    
    //show the content based on the given information.
    let modal = document.getElementById("menu-modal");
    let foodModalContent = `
    <div id="modal-description">
        <h4 class="modal-food-title">${foodItemTitle}</h4>
        <h5 class="modal-food-price">Price: ${foodItemPrice}</h5>
    </div>`;
    
    let foodNumBtns = document.createElement("div");
    foodNumBtns.classList.add("food-number-button");
    foodNumBtns.innerHTML = `
    <button id="plus">-</button>
    <input id="num-food" type="number" value="1">
    <button id="minus">+</button>
    `;

    let buttonsDiv = document.createElement("div");//add and cancel button in the modal.
    buttonsDiv.classList.add("add-to-cart");
    buttonsDiv.innerHTML = `
    <button class="button-add-to-cart">Add to cart</button><br>
    <button class="button-cancel-cart" onclick="closeMenuModal()">Cancel</button>
    `;
    
    modal.innerHTML = foodModalContent;
    modal.append(foodOptionsDiv);
    modal.append(foodNumBtns);
    modal.append(buttonsDiv);
    modal.style.display = "block";
    blurControl();
    modalOn = true;

    addFunctionality(foodItemImage);
  }
}//end openFoodModal

/**
 * updateFoodPrice - function that updates the price from the food modal when 
 *                  a checkbox is clicked from the given options.
 */
function updateFoodPrice(){
  let priceDifference = 0;  

  //for checkbox
  let checkboxDiv = document.getElementsByClassName("checkbox-option");
  for(let i = 0; i < checkboxDiv.length; i++){
    let checkboxes = checkboxDiv[i].getElementsByClassName("food-option-item-checkbox");
    let optionItemName = checkboxDiv[i].getElementsByClassName("food-option-name-label");
    let optionItemPrice = checkboxDiv[i].getElementsByClassName("food-option-price-label");
    for(let j = 0; j < checkboxes.length; j++){

      if(checkboxes[j].checked){
        console.log(optionItemName[j].innerText + " is clicked with price " + optionItemPrice[j].innerText);
        priceDifference += parseFloat(optionItemPrice[j].innerText.replace("$",""));
      }//end if

    }//end nested for
  }//end for


  //for radiobtn
  let radioBtnDiv = document.getElementsByClassName("radio-button-option");

  for(let i = 0; i < radioBtnDiv.length; i++){
    let radiobtns = radioBtnDiv[i].getElementsByClassName("food-option-item-radiobtn");
    let optionItemName = radioBtnDiv[i].getElementsByClassName("food-option-name-label");
    let optionItemPrice = radioBtnDiv[i].getElementsByClassName("food-option-price-label");
    for(let j = 0; j < radiobtns.length; j++){

      if(radiobtns[j].checked){
        console.log(optionItemName[j].innerText + " is clicked with price " + optionItemPrice[j].innerText);
        priceDifference += parseFloat(optionItemPrice[j].innerText.replace("$",""));
      }//end if

    }//end nested for
  }//end for

  
  //change the displayed price on the food modal.
  let modalFoodPrice = document.getElementsByClassName("modal-food-price")[0];
  let originalPrice = parseFloat(modalFoodPrice.innerText.replace("Price: $",""));
  //console.log("Total difference = " + priceDifference.toFixed(2) + "\n");  

  if(priceDifference == 0){
    modalFoodPrice.innerText = "Price: $" + originalPrice.toFixed(2);
  }else if(priceDifference > 0 ){
    modalFoodPrice.innerText = "Price: $" + originalPrice.toFixed(2) + " (+$" + priceDifference.toFixed(2) + ")";
  }else{
    priceDifference *= -1;
    modalFoodPrice.innerText = "Price: $" + originalPrice.toFixed(2) + " (-$" + priceDifference.toFixed(2) + ")";
  }

}//end updateFoodPrice

/**
 * addFunctionality - implements the add to cart functionality when adding an item from the food modal.
 */
function addFunctionality(foodItemImage){
  
  let addToCartButtons = document.getElementsByClassName("button-add-to-cart");  
  for(let i = 0; i < addToCartButtons.length; i++){
     let button = addToCartButtons[i];
     button.addEventListener('click',addToCartClicked);
     button.foodItemImg = foodItemImage;
  }//end for
}//end addFunctionality


/**
 * addToCartClicked - event click listener when the add button is clicked in the food modal window. Also updates the cart subtotal.
 * @param{event} event will provide the information of the food-item in order to pass it to the cart section.
 */
function addToCartClicked(event){
  let addButton = event.target;//target is the add button.
  let foodModalInfo = addButton.parentElement.parentElement;//moves to the modal div (the parent element of the whole content)
  
  //get the information from the modal.
  let foodItemTitle = foodModalInfo.getElementsByClassName("modal-food-title")[0].innerText;
  let foodItemPrice = foodModalInfo.getElementsByClassName("modal-food-price")[0].innerText;
  let foodItemImage = event.target.foodItemImg;

  //check if the price needs to be updated.
  foodItemPrice = foodItemPrice.replace("Price:","");
  let posOne = foodItemPrice.indexOf("(");
  let posTwo = foodItemPrice.indexOf(")");

  if(posOne === -1 || posTwo === -1){//no changes to the price
    addItemToCart(foodItemTitle,foodItemPrice,foodItemImage);
    //alert(foodItemTitle + " with a price of" + foodItemPrice.replace("Price:","") + " has been added to the cart.");
  }else{

    let updatePrice = foodItemPrice.substring(posOne);//additional price based on the options selected.
    let originalPrice =foodItemPrice.replace(updatePrice,""); //price displayed from the menu page.

    originalPrice = parseFloat(originalPrice.replace("$",""));//convert to float.

    updatePrice = foodItemPrice.substring(posOne + 1, posTwo); //remove all the brackets.
    updatePrice = parseFloat(updatePrice.replace("$",""));//convert to float

    console.log(typeof(updatePrice))
    let newPrice = originalPrice + updatePrice;
    newPrice = "Price: $" + newPrice.toFixed(2);
    addItemToCart(foodItemTitle,newPrice,foodItemImage);
    //alert(foodItemTitle + " with a price of " + originalPrice + " + " + updatePrice + " = " + newPrice);
   
  }//end if-else

   updateCartTotal();

   closeMenuModal();
}//end addToCartClicked


/**
 * addItemToCart - a function that adds the given information from the food modal to the cart.
 * @param {*} foodItemTitle is the name of the food.
 * @param {*} foodItemPrice is the price of the food.
 * @param {*} foodItemImage  is the image of the food.
 */
function addItemToCart(foodItemTitle,foodItemPrice,foodItemImage){
  let cartRow = document.createElement("div");//row to be created
  cartRow.classList.add("cart-row");//get the css style for this div.

  cartRow.innerText = foodItemTitle;
  let cartItems = document.getElementsByClassName("cart-items")[0];//get the div from html

  foodItemPrice = foodItemPrice.replace("Price:","");
  let cartRowContents = `
  <div class="cart-item cart-column">
    <img class="cart-item-image" src="${foodItemImage}" alt=${foodItemTitle}>
    <span class="cart-item-title">${foodItemTitle}</span>
  </div>
  <span class="cart-price cart-column">${foodItemPrice}</span>
  <div class="cart-modify cart-column">
      <button class="btn-edit" type="button">EDIT</button>
      <button class="btn btn-remove" type="button">REMOVE</button>
  </div>
  `;

  cartRow.innerHTML = cartRowContents;

  cartItems.append(cartRow);//add the new row to the last row.
  
  //add the functionality to the (new) remove button since its been added after the document has been loaded
  cartRow.getElementsByClassName("btn-remove")[0].addEventListener("click",removeCartItem);
  

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
} //end closeMenuModal

/**
 * removeCartItem - removes the selected item from the cart. Also updates the cart total.
 * @param {*} event 
 */
function removeCartItem(event){
  let buttonClicked = event.target;
  if(confirm("Do you want to delete this item?")){
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();//update the subtotal after removing an item.
  }
}//end removeCartItem

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