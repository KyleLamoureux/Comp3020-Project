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
  let restaurantName = "Perkins";

  //display the restaurant's name
  let titleName = document.getElementsByClassName("heading-text")[0];
  titleName.innerText = restaurantName;

  for(let restaurant in menus){//interate through the restaurants
    if(menus.hasOwnProperty(restaurant)){

      if(restaurantName === restaurant){//find the restaurant the user has clicked.

        for(let category in menus[restaurant]){
          if(menus[restaurant].hasOwnProperty(category)){
              //category categorys
              addMenuCategory(category);
              //food item list for each category.
              let categoryFoodItems = menus[restaurant][category]; //list of food items from the category.
              for(let j = 0; j < categoryFoodItems.length; j++){
                addFoodItems(category,categoryFoodItems[j].name,categoryFoodItems[j].price,
                                categoryFoodItems[j].description,categoryFoodItems[j].image,categoryFoodItems[j].nutrition);
              }//end nested for
         
            }//end if
        }//end for
      }
    }//end if
  }//end for
  /*
  //INSERT RESTAURANT NAME HERE.
  
  */
  
}//end main

/**
 * addMenuCategory - a function that adds menu category 'orb' to the menu page.
 * @param {*} categoryName the category that will be added to the menu page.
 */
function addMenuCategory(categoryName){
  let categoryDiv = document.getElementsByClassName("scrollbar-category")[0];
  let aTag = document.createElement("a");
  aTag.href = "#category_"+categoryName;

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
 * @return it does not return anything.
 */
function addFoodItems(foodCategory,foodName,foodPrice,foodDesc,foodImg,foodNutrition){

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
  //addNutritionalInfo(foodNutrition);
  newFood.addEventListener("click",openFoodModal);//image is clicked
 
}//end addFoodItems


function addNutritionalInfo(foodNutrition){
  let nutritionDiv = document.getElementsByClassName("nutritional-info")[0];
  let nutritionImg = document.createElement("img");
  nutritionImg.className("nutritional-info-img");
  nutritionImg.src = foodNutrition;
}//end addNutritionalInfo



let modalOn = false;
/**
 * openFoodModal - once a food item is clicked, a window will be shown containing different options 
 *              for the food item and its price.
 * @param {event} event will contain all the information i.e. food title, price, image, description 
 *              to pass to the foodModal window.
 */
function openFoodModal(event){

  if(!modalOn){
  
    //get the information:
    let foodItem = event.target.parentElement;
    //console.log(foodItem);
    //NOTE: IT DOES NOT OPEN THE MODAL WHEN CLICKING THE DESCIPTION.
    let foodItemTitle = foodItem.getElementsByClassName("menu-category-item-title")[0].innerText;
    let foodItemImage = foodItem.getElementsByClassName("menu-category-item-image")[0].src;
    let foodItemDescription = foodItem.getElementsByClassName("menu-category-item-description")[0].innerText;
    let foodItemPrice = foodItem.getElementsByClassName("menu-category-item-price")[0].innerText;

    //console.log(foodItemTitle,foodItemImage,foodItemDescription,foodItemPrice);

    //show the content based on the given information.
    let modal = document.getElementById("menu-modal");
    let foodModalContent = `
    <img class="food-item-modal-image" src="${foodItemImage}">
    <div id="modal-description">
        <h4 class="modal-food-title">${foodItemTitle}</h4>
        <h5 class="modal-food-price">Price: ${foodItemPrice}</h5>
    </div>
    <div class="food-options">
        <input type="radio" id="option1" name="food-options" value="option1">
        <label for="option1">Option 1</label>
        <input type="radio" id="option2" name="food-options" value="option2">
        <label for="option1">Option 2</label>
        <input type="radio" id="option3" name="food-options" value="option3">
        <label for="option1">Option 3</label>
    </div>
    <div class="food-number-button">
        <button id="plus">-</button>
        <input id="num-food" type="number">
        <button id="minus">+</button>
    </div>
    <div id="add-to-cart">
        <button class="button-cancel-cart" onclick="closeMenuModal()">Cancel</button>
        <button class="button-add-to-cart">Add to cart</button>
    </div>
    `;
    
    modal.innerHTML = foodModalContent;
    modal.style.display = "block";
    blurControl();
    modalOn = true;

    addFunctionality();
  }
}//end openFoodModal


/**
 * addFunctionality - implements the add to cart functionality when adding an item from the food modal.
 */
function addFunctionality(){
  
  let addToCartButtons = document.getElementsByClassName("button-add-to-cart");  
  for(let i = 0; i < addToCartButtons.length; i++){
     let button = addToCartButtons[i];
     button.addEventListener('click',addToCartClicked);
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
  let foodItemImage = foodModalInfo.getElementsByClassName("food-item-modal-image")[0].src;

  addItemToCart(foodItemTitle,foodItemPrice,foodItemImage);
  updateCartTotal();


  // alert(foodItemTitle + " with a price of" + foodItemPrice.replace("Price:","") + " has been added to the cart.");
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