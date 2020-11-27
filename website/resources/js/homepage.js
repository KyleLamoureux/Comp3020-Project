var text = "";

function onLoad(){
    var input = document.getElementById('user-address-input');
    input.addEventListener('input', function(event) {
        // console.log(">>> " + event.target.value);
        text = event.target.value;
    });

    input.addEventListener("keyup", function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            saveAddress();
        }
    });
}

function saveAddress(){
    console.log(text);
    localStorage.setItem('user-address', text);
    window.location.href='./app/restaurant-page.html';
}