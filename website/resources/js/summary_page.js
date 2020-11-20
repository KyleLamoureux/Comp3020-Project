'use strict';  
//needed to load the content of the summary page
if(document.readyState === "loading"){
  document.addEventListener("DOMContentLoaded",main);
}else{
  main();
} //end if-else 


function main(){
}//end main

/**
 * getOrderedItems - a function that gets the ordered items from the cart section and display it
 *                  in the summary modal.
 */
function getOrderedItems(){
    let cartItemsDiv = document.getElementsByClassName("cart-items")[0];
    let listCartItems = cartItemsDiv.getElementsByClassName("cart-item");
  
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


    let orderedItemNames = document.getElementsByClassName("ordered-item-title");
  
    //TODO: NEED TO FIX DUPLICATE CALCULATION
    let isDuplicate = false;
    let index = 0;
    let quantity = 1;
    for(let i = 0; i < orderedItemNames.length && !isDuplicate; i++){
      if(orderedItemNames[i].innerText === cartItemTitle){
        //duplicate - dont insert duplicates to order summary.
        return;
        /*
        console.log(orderedItemNames[i])
        isDuplicate = true;
        index = i;
        quantity++;
        */
      }//end if
    }//end for

    let orderedItem = null;
    if(isDuplicate){
      //change the quantity of the ordered item.
      orderedItem = document.getElementsByClassName("ordered-row")[index];
      orderedItem.getElementsByClassName("ordered-quantity")[0].innerText = quantity;
      //console.log();
      console.log("with duplicate.")
    }else{
      console.log("no duplicate");
      let newOrderedItem = document.createElement("div");
      newOrderedItem.classList.add("ordered-row");  
      let orderedItemContent = `
      <img class="ordered-item-image" src="${cartItemImg}" alt=${cartItemTitle}>
      <span class="ordered-item-title">${cartItemTitle}</span>
      <span class="ordered-quantity">Quantity:${cartItemPrice}</span>
      `;
      newOrderedItem.innerHTML = orderedItemContent;
      orderedListDiv.append(newOrderedItem);
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