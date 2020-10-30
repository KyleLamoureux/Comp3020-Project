'use strict';  

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
    var containerElement = document.getElementById("background");

    if (containerElement.className == 'blur'){
        containerElement.setAttribute('class', null);
    } else {
        containerElement.setAttribute('class', 'blur');
    }
};
