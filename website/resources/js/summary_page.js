'use strict';  

/**
 * getOrderedItems - a function that gets the ordered items from the cart section and display it
 *                  in the summary modal.
 */
function getOrderedItems(){
    let cartItemsDiv = document.getElementsByClassName("cart-items")[0];
    let listCartItems = cartItemsDiv.getElementsByClassName("cart-row");
  
    for(let i = 0; i < listCartItems.length; i++){
        let cartItem = listCartItems[i];
        //console.log(cartItem);
        let cartItemTitle = cartItem.getElementsByClassName("cart-item-title")[0].innerText;
        let cartItemImg = cartItem.getElementsByClassName("cart-item-image")[0].src;
        let cartItemPrices = cartItemsDiv.getElementsByClassName("cart-price");//price is not inside the cartItem div
        let cartItemPrice = cartItemPrices[i].innerText;
        displayOrderedItem(cartItemTitle,cartItemPrice,cartItemImg);
    }//end for
    displayTotalPrice();
  }//end getOrderedItems
  
  
/**
 * displayOrderedItem - display a single ordered item in the order summary section.
 * @param {*} cartItemTitle is the name of the food item.
 * @param {*} cartItemprice is the price of the food item.
 * @param {*} cartItemImg  is the image of the food item.
 */
function displayOrderedItem(cartItemTitle,cartItemPrice,cartItemImg){
  let orderedListDiv = document.getElementById("ordered-list");
  console.log("in display???")

  let orderedItemNames = document.getElementsByClassName("ordered-item-title");

  //TODO: NEED TO FIX DUPLICATE CALCULATION
  //console.log("no duplicate");
  let newOrderedItem = document.createElement("div");
  newOrderedItem.classList.add("order-row");  
  let orderedItemContent = `
  <div class="cart-item-info">
    <img class="cart-item-image" src="${cartItemImg}" alt=${cartItemTitle}>               
    <h4 class="cart-item-title">${cartItemTitle}</h4>
  <div class="cart-item-quantity">Quantity: 1</div>
  </div>
  <div class="options">
    <ul class="list-options">
      <li class="list-option-item">item 1</li>
      <li class="list-option-item">item 2</li>
      <li class="list-option-item">item 3</li>
      <li class="list-option-item">item 4</li>
    </ul>
  </div>
  <div class="cart-bottom-section">
    <h4 class="cart-price">${cartItemPrice}</h4>
  </div>
  `;
  newOrderedItem.innerHTML = orderedItemContent;
  orderedListDiv.append(newOrderedItem);

}//end displayOrderedItem

/**
 * payOrder - Moves to the restaurant page if inputs are valid.
 */
function payOrder(){
  let userFirstName = document.getElementById("user-first-name").value;
  let userLastName = document.getElementById("user-last-name").value;
  let userAddress = document.getElementById("user-address").value;
  let userCard = document.getElementById("user-card").value;
  let userSecurityCode = document.getElementById("user-security-code").value;


  if(userFirstName.length === 0){
    alert("Please enter your first name.");
  }else if(userLastName.length ===0){
    alert("Please enter your last name.");
  }else if(userAddress.length === 0){
    alert("Please enter your addres.");
  }else if(userCard.length < 16){
    alert("Please enter your 16 digit card number.");
  }else if(userSecurityCode.length < 3){//TODO: make security code input box to store only 3 digits.
    alert("Please enter your 3 digit security code.");
  }else{
    location.href = "../app/restaurant-page.html"
    alert("Thank you for your purchase " + userFirstName + " " + userLastName + "!");
  }


  checkValidMonth();
  checkValidYear();


}//end payOrder

/**
 * checkUserInput - check if user information is valid.
 */
function checkUserInput(){

  let userFirstName = document.getElementById("user-first-name").value;
  let userLastName = document.getElementById("user-last-name").value;
  let userAddress = document.getElementById("user-address").value;

  if(userFirstName.length === 0){
    alert("Please enter your first name.");
  }else if(userLastName.length ===0){
    alert("Please enter your last name.");
  }else if(userAddress.length === 0){
    alert("Please enter your addres.");
  }

}//end checkUserInput

/**
 * checkUserCard - check if user's card info is valid.
 */
function checkUserCard(){
  let userCard = document.getElementById("user-card").value;
  let userSecurityCode = document.getElementById("user-security-code").value;

  //TODO: make security code input box to store only 3 digits.
  if(userCard.length < 16){
    alert("Please enter your 16 digit card number.");
  }else if(userSecurityCode.length < 3){
    alert("Please enter your 3 digit security code.");
  }


}//end displayOrderedItem



/**
 * displayTotalPrice - a function that gets the subtotal from the cart section 
 *                     and display subtotal, gst, pst, delivery fee and the total price
 *                     in the summary modal.
 */
function displayTotalPrice(){
    // Get subtotal from cart and convert it to float
    let totalPriceString = document.getElementsByClassName("total-order")[0].innerText;
    totalPriceString = totalPriceString.replace("Subtotal: $", "");
    let totalPrice = parseFloat(totalPriceString);

    // tax rate and delivery fee info
    let gstRate = 0.07;
    let pstRate = 0.05;
    let deliveryFee = 5.00;

    // Display all info in the order summary page
    document.getElementById("subtotal").innerHTML = totalPrice;
    document.getElementById("gst").innerHTML = (totalPrice * gstRate).toFixed(2);
    document.getElementById("pst").innerHTML = (totalPrice * pstRate).toFixed(2);
    document.getElementById("delivery").innerHTML = deliveryFee.toFixed(2);
    document.getElementById("total").innerHTML = (totalPrice + (totalPrice * (gstRate + pstRate)) + deliveryFee).toFixed(2);
    
}// end displayTotalPrice


function checkValidMonth() {
  let expiryMonth = document.getElementById("expiry-month");
  if(parseInt(expiryMonth.value) < 1 || parseInt(expiryMonth.value) > 12 || (expiryMonth.value).length === 1 ){
    alert("Invalid Input");
  }
}

function checkValidYear() {
let expiryMonth = document.getElementById("expiry-year");
if( parseInt(expiryMonth.value) < 20 || (expiryMonth.value).length === 1 ){
  alert("Invalid Input");
}
}
