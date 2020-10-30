function on() {
    document.getElementById("overlay").style.display = "block";
    blurControl();
};

function off(){
    document.getElementById("overlay").style.display = "none";
    blurControl();
};

function blurControl(){
    var containerElement = document.getElementById("background");

    if (containerElement.className == 'blur'){
        containerElement.setAttribute('class', null);
    } else {
        containerElement.setAttribute('class', 'blur');
    }
};

var listFood = [
    {name: 'Burgers',  active: true, item: 'McD - 10m', time:10}, 
    {name: 'Sushi',    active: true, item: "Sushi-Jet - 20m", time:20}, 
    {name: 'Pizza',    active: true, item: "Pizza Palace- 15m", time:15}, 
    {name: 'Italian',  active: true, item: "Olive Garden - 8m", time:8}, 
    {name: 'Mexican',  active: true, item: "Qudoba- 27m", time:27}
];

function sortOnClick(element){
    listFood.forEach(iter => {
        if(iter['name'] == element["target"]['id']){
            iter['active'] = !iter['active'];
        }
    });
    foodOrbs();
    btnList();
}

var sorted = false;
function sortByTime(){

    if(sorted){
        listFood.reverse()
        sorted=false;
    } else {
        listFood.sort(compareByTime);
        sorted=true;
    }
    foodOrbs();
}

function compareByTime(a, b){
    if (a['time'] < b['time']){
        return -1;
    }
    if (a['time'] > b['time']){
        return 1;
    }
    return 0;
}

function btnList(){
    var elList = document.getElementById('btnList');
    clearDiv(elList);

    listFood.forEach(element => {
        var btn = document.createElement("button");
        var t = document.createTextNode(element['name'])
        btn.onclick = sortOnClick;
        btn.id = element['name'];
        if(element['active']){
            btn.style.backgroundColor = "green";
        } else {
            btn.style.backgroundColor = "red";
        }
        btn.appendChild(t);
        elList.appendChild(btn);
    });
}

function foodOrbs() {
    const elList = document.getElementById('sortGroup');
    clearDiv(elList);

    listFood.forEach(element => {
        if (element['active']){
            var obj = document.createElement("h3");
            var t = document.createTextNode(element['item'])
            obj.appendChild(t);
            elList.appendChild(obj);
        }
    });
}

function clearDiv(div){
    while(div.firstChild) { 
        div.removeChild(div.firstChild); 
    }
}