'use strict';  

/**
 * getOrderedItems - a function that gets the ordered items from the cart section and display it
 *                  in the summary modal.
 * @param listOrderedItems - the orders from the menu page.
 */
function getOrderedItems(listOrderedItems){

    for(let i = 0; i < listOrderedItems.length; i++){

      let cartItemTitle = listOrderedItems[i][0].name;
      let cartItemPrice =listOrderedItems[i][1].price;
      let cartItemQuantity = listOrderedItems[i][2].quantity;
      let cartItemImg = listOrderedItems[i][3].image;
      let cartItemInstruction = listOrderedItems[i][5].instruction;

      let options = [];
      for(let j = 0; j < listOrderedItems[i][4].options.length; j++){
        options.push(listOrderedItems[i][4].options[j]);
      }//end nested for
      
      displayOrderedItem(cartItemTitle,cartItemPrice,cartItemQuantity,cartItemImg,options,cartItemInstruction);
    }//end for

    displayTotalPrice();
  }//end getOrderedItems
  
  
/**
 * displayOrderedItem - display a single ordered item in the order summary section.
 * @param {*} cartItemTitle is the name of the food item.
 * @param {*} cartItemprice is the price of the food item.
 * @param {*} cartItemQuantity is the quantity of the food item.
 * @param {*} cartItemImg  is the image of the food item.
 * @param {*} options list of selected options.
 */
function displayOrderedItem(cartItemTitle,cartItemPrice,cartItemQuantity,cartItemImg,options,cartItemInstruction){
  let orderedListDiv = document.getElementById("ordered-list");

  let newOrderedItem = document.createElement("div");
  newOrderedItem.classList.add("order-row");  

  let topContent = `
  <div class="cart-item-info">
    <img class="cart-item-image" src="${cartItemImg}" alt=${cartItemTitle}>               
    <h4 class="cart-item-title">${cartItemTitle}</h4>
  <div class="cart-item-quantity">Quantity: ${cartItemQuantity}</div>
  </div>
  `;
  
  //mid content
  let optionDiv = document.createElement("div");
  optionDiv.classList.add("options");

  let ulTag = document.createElement("ul");
  ulTag.classList.add("list-options");

  
  for(let i = 0; i < options.length; i++){
    let liTag = document.createElement("li");
    liTag.classList.add("list-option-item");
    liTag.innerText = options[i];
    ulTag.append(liTag);
  }//end for

  
  if(cartItemInstruction.length !== 0){
    let liTag = document.createElement("li");
    liTag.classList.add("list-option-item");
    liTag.innerText = "  Special Instruction - " + cartItemInstruction;
    ulTag.append(liTag);
  }
  
  optionDiv.append(ulTag);

  //bot content
  let botContent = `
  <div class="cart-bottom-section">
    <h4 class="cart-price">Price:${cartItemPrice}</h4>
  </div>
  `;

  newOrderedItem.innerHTML = topContent;
  newOrderedItem.append(optionDiv);
  newOrderedItem.innerHTML += botContent;
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
  let expiryYear = document.getElementById("expiry-year").value;
  let expiryMonth = document.getElementById("expiry-month").value;


  if((userFirstName.length > 0 && userLastName.length > 0 
      && userAddress.length > 0 && userCard.length  > 0
      && userSecurityCode.length > 0 && expiryYear.length > 0
      && expiryMonth > 0)){
        window.location.href = "../app/restaurant-page.html"; 
        return false;
  }

}//end payOrder


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
    document.getElementById("subtotal").innerHTML = totalPrice.toFixed(2);
    document.getElementById("gst").innerHTML = (totalPrice * gstRate).toFixed(2);
    document.getElementById("pst").innerHTML = (totalPrice * pstRate).toFixed(2);
    document.getElementById("delivery").innerHTML = deliveryFee.toFixed(2);
    document.getElementById("total").innerHTML = (totalPrice + (totalPrice * (gstRate + pstRate)) + deliveryFee).toFixed(2);
    
}// end displayTotalPrice

