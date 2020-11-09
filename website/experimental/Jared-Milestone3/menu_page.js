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
  
  
  let listFoodItems = [
    {
      foodCategory:"Appetizer",
      foodName:"Omelet",
      foodPrice:12.99,
      foodDesc:"Food description for omelet",
      foodImg:"images/omelet.jpg",
      foodNutrition:"some image.."
    },
    {
      foodCategory:"Appetizer",
      foodName:"Sandwich",
      foodPrice:1.99,
      foodDesc:"Food description for sandwich",
      foodImg:"images/sandwich.jpg",
      foodNutrition:"some image.."
    },
    {
      foodCategory:"Main",
      foodName:"Sandwich",
      foodPrice:1.99,
      foodDesc:"Food description for sandwich",
      foodImg:"images/sandwich.jpg",
      foodNutrition:"some image.."
    }

  ];

  for(let i = 0; i < listFoodItems.length;i++){
    console.log("Food Category: " + listFoodItems[i].foodCategory 
                  +", Food Name: " + listFoodItems[i].foodName 
                  + ", food Price: " + listFoodItems[i].foodPrice
                  + ", Food Description: " + listFoodItems[i].foodDesc
                  + ", Food Image: " + listFoodItems[i].foodImg
                  + ", Food Nutrition: " + listFoodItems[i].foodNutrition);
  }

  addAllFoodItems(listFoodItems);
}//end main


/**
 * addAllFoodItems - a function that adds all the food items for the menu.
 * @param listFoodItems contains a list of food items to be displayed on the menu page.
 */
function addAllFoodItems(listFoodItems){

  
  for(let i = 0; i < listFoodItems.length;i++){
    let foodCategory = listFoodItems[i].foodCategory;
    let foodName = listFoodItems[i].foodName;
    let foodPrice = listFoodItems[i].foodPrice;
    let foodDesc = listFoodItems[i].foodDesc;
    let foodImg = listFoodItems[i].foodImg;
    let foodNutrition = listFoodItems[i].foodNutrition;

    addFoodItems(foodCategory,foodName,foodPrice,foodDesc,foodImg);
  }//end for



  /*
  //ADD FOOD ITEMS HERE (Name of the category,foodName,foodPrice,foodDescription,foodImage)
  addFoodItems("Appetizer","Omelet",6.92,"This is the food description for Omelet","images/omelet.jpg");
  addFoodItems("Appetizer","Sandwich",5.99,"This is the food description for Sandwich","images/sandwich.jpg");
  addFoodItems("Appetizer","Pancake",3.99,"This is the food description for Pancake","images/pancake.jpg");
  addFoodItems("Main","Burger",8.12,"This is the food description for Burger","images/burger.jpg");
  addFoodItems("Main","Pizza",18.99,"This is the food description for Pizza","images/pizza.jpg");
  addFoodItems("Main","Pasta",12.99,"This is the food description for Pasta","images/italian_main.jpeg");
  addFoodItems("Dessert","Some dessert",5.99,"This is the food description for the dessert","images/italian_dessert.jpg");
  addFoodItems("Side","French Fries",2.50,"This is the food description for french fries","images/burger_side.jpeg");
  addFoodItems("Dessert","Sliced Chocolate Cake",7.99,"This is the food description for the Sliced Chocolate Cake","images/pizza_dessert.jpg");

  let x = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam rem consequuntur delectus culpa voluptas laborum ea, maiores doloribus quas adipisci, vel dolorem incidunt inventore odit atque veritatis a, minus deleniti?";
  addFoodItems("Dessert","Sliced Chocolate Cake",7.99,x,"images/pizza_dessert.jpg");
  addFoodItems("Appetizer","Onion Rings", 7.99, "This is the food description for Onion rings", "images/burger_appe.jpg");
  addFoodItems("Appetizer", "Dumplings", 6.99, "This is the food description for Dumplings", "images/chinese_appe.jpg");
  addFoodItems("Main","Chicken Stir-Fry",13.99,"This is the food description for Chicken Stir Fry", "images/chinese_main.jpg");
  addFoodItems("Side","Wonton soup", 9.99, "This is the food description for Wonton soup", "images/chinese_side.jpg");
  addFoodItems("Side", "Meat ball", 10.99, "This is food description for Meat ball", "images/italian_side.jpg");
  addFoodItems("Side", "Salad", 6.99, "This is food description for Salad", "images/pizza_side.jpg");
  addFoodItems("Side", "Salad2", 8.99, "This is food description for Salad2", "images/italian_appe.jpg");
  */

}//end addAllFoodItems


/**
 * addFoodItems - add food items on the menu section depending on the given food category.
 * @param {*} foodCategory is the name of the food category. i.e. Appetizer, Main, Side, Drinks, etc.
 * @param {*} foodName is the name of the food to be inserted.
 * @param {*} foodPrice is the price of the food.
 * @param {*} foodDesc is the description of the food.
 * @param {*} foodImg  is the image of the food.
 * @return it does not return anything.
 */
function addFoodItems(foodCategory,foodName,foodPrice,foodDesc,foodImg){

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
    <h5 class="menu-category-item-price">$${foodPrice}</h5>
  `;


  newFood.innerHTML = newFoodContent;
  foodItems.append(newFood);//add the new food to the list (inside menu-category-grouped-items)
  newFood.addEventListener("click",openFoodModal);//image is clicked
 
}//end addFoodItems



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
    console.log(foodItem);
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

  alert(foodItemTitle + " with a price of" + foodItemPrice.replace("Price:","") + " has been added to the cart.");
  closeMenuModal();
}//end addToCartClicked


/**
 * addItemToCart - a function that adds the given information from the food modal to the cart.
 * @param {*} foodItemTitle is the name of the food.
 * @param {*} foodItemPrice is the price of the food.
 * @param {*} foodItemImage  is the image of the food.
 */
function addItemToCart(foodItemTitle,foodItemPrice,foodItemImage){
  var cartRow = document.createElement("div");//row to be created
  cartRow.classList.add("cart-row");//get the css style for this div.

  cartRow.innerText = foodItemTitle;
  var cartItems = document.getElementsByClassName("cart-items")[0];//get the div from html

  var cartRowContents = `
  <div class="cart-item cart-column">
    <img class="cart-item-image" src="${foodItemImage}" width="80px" height="80px" alt=${foodItemTitle}>
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
      let price = parseFloat(priceElement.innerHTML.replace("Price: $",""));//get the text inside the priceElement.
      //console.log(price);

      total = total + price;
  }
  
  total = Math.round(total *100)/100;
  document.getElementsByClassName("total-order")[0].innerText = "Subtotal: $" + total;

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