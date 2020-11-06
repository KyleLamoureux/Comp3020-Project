'use strict';  
if(document.readyState === "loading"){
  document.addEventListener("DOMContentLoaded",main);
}else{
  main();
}

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
  }


  function blurControl(){
    let containerElement = document.getElementById("background");

    if (containerElement.className == 'blur'){
        containerElement.setAttribute('class', null);
    } else {
        containerElement.setAttribute('class', 'blur');
    }
  }

  
  function main(){
    let removeCartItemButtons = document.getElementsByClassName("btn-remove");

    for(let i = 0; i < removeCartItemButtons.length; i++){
        let button = removeCartItemButtons[i];
        button.addEventListener('click',removeCartItem);
    }//end for


  }//end main

  function removeCartItem(event){
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();

  }
