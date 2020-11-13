var data;
var chart;
var options;

function init(){
    console.log("init!");
    data = new google.visualization.DataTable();
    data.addColumn('string', 'Macro');
    data.addColumn('number', 'Amount (g)');
    data.addRows([
        ['Fat', 0],
        ['Carbs',0 ],
        ['Protein', 0]
    ]);
    // Set chart options
    options = {
        chartArea: {
            width: '100%',
            height: '100%',
        },
        colors: ['#FCA103', "#fb5f44", "#03CFEC"],
        titlePosition: 'none',
        backgroundColor: '#E5E5E5',
        legend: {
            position: 'none'
        },
        pieSliceText:'value',
        pieSliceTextStyle: {
            color: 'black'
        },
        fontSize: 12
    };
    chart = new google.visualization.PieChart(document.getElementById('piechart-1'));
}


function toggleNutrition(){
    // Get the checkbox
    var checkBox = document.getElementById("nutritional-info-text");
    var graph = document.getElementById("nutrition");
    // If the checkbox is checked, display the output text
    if (checkBox.checked){
        graph.style.visibility = "visible";
    } else {
        graph.style.visibility = "hidden";
    }
}

/**
 * updateNutrition - updates the subtotal of the cart.
 */
function updateNutrition(){
    let cartItemContainer = document.getElementsByClassName("cart-items")[0];//first element
    let cartRows = cartItemContainer.getElementsByClassName("cart-row");
    var checkBox = document.getElementById("nutritional-info-text");
    var graph = document.getElementById("nutrition");
    if(cartRows.length > 0){
        if (checkBox.checked){
            graph.style.visibility = "visible";
        } else {
            graph.style.visibility = "hidden";
        }
        let fat = 0, carbs = 0, protein=0;
        for(let i = 0; i < cartRows.length;i++){
            let cartRow = cartRows[i];//get each cart-item from the list.
            let rand = new Math.seedrandom(cartRow.innerText);
            fat+=rannum(rand.quick(), 30, 2);
            carbs+=rannum(rand.quick(), 50, 10);
            protein+=rannum(rand.quick(), 30, 0);
        }
        fat = Math.round(fat);
        carbs = Math.round(carbs);
        protein = Math.round(protein);

        let calories = (fat*9) + (carbs*4) + (protein*4);
        $("#nutrition").find("h2").text("Calories: " + calories);
        data.setValue(0, 1, fat);
        data.setFormattedValue(0, 1,'Fat: ' + fat + "g");
        data.setValue(1, 1, carbs);
        data.setFormattedValue(1, 1, 'Carbs: ' + carbs+ "g");
        data.setValue(2, 1, protein);
        data.setFormattedValue(2, 1, 'Protein: ' + protein+ "g");

        chart.draw(data, options);

    }else{
        graph.style.visibility = "hidden";
    }



}//end updateCartTotal

function rannum(rand, max, min){
    return min + (Math.round(rand*(max-min) * 10) / 10);
}