'use strict';  
//needed so that functionalities such as remove, add, edit work.
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
  

  //ADD FOOD ITEMS HERE (Name of the category,foodName,foodPrice,foodDescription,foodImage)
  addFoodItems("Appetizer","Omelet1",12.92,"this is the food desc","images/omelet.jpg");
  addFoodItems("Appetizer","Sandwich",5.99,"this is the food desc","images/sandwich.jpg");
  addFoodItems("Main","Burger",8.12,"this is the food desc","images/burger.jpg");
  addFoodItems("Main","Pizza",12.12,"this is the food desc","images/pizza.jpg");
  addFoodItems("Main","Omelet1",12.92,"this is the food desc","images/omelet.jpg");
  addFoodItems("Main","Sandwich",5.99,"this is the food desc","images/sandwich.jpg");
  addFoodItems("Appetizer","Burger",8.12,"this is the food desc","images/burger.jpg");
  addFoodItems("Appetizer","Pizza",12.12,"this is the food desc","images/pizza.jpg");

}//end main


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

  //need to determine which category the food will be added. 
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
        <p class="restaurant-description">${foodDesc}</p>
    </div>
    <h5 class="menu-category-item-title">${foodName}</h5>
    <h5 class="menu-category-item-price">$${foodPrice}</h5>
  `;


  newFood.innerHTML = newFoodContent;
  foodItems.append(newFood);//add the new food to the list (inside menu-category-grouped-items)
  
}//end addFoodItems

function removeCartItem(event){
  let buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();

  
}//end removeCartItem

 // When the user clicks the button, open the modal 
 function proceedCheckout() {
  let modal = document.getElementById("summary-page");
  modal.style.display = "block";
  blurControl();
  loadSummaryPage();
}

// When the user clicks on <span> (x), close the modal
function cancelCheckout() {
  let modal = document.getElementById("summary-page");
  // Get the <span> element that closes the modal
  let span = document.getElementsByClassName("close")[0];
  modal.style.display = "none";
  blurControl();
}//end cancelCheckout

function blurControl(){
  let containerElement = document.getElementById("background");

  if (containerElement.className == 'blur'){
      containerElement.setAttribute('class', null);
  } else {
      containerElement.setAttribute('class', 'blur');
  }
}//end blurControl