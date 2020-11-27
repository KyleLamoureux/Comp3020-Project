var data;
var chart1, chart2;
var options1,options2;

function init(){
    data = new google.visualization.DataTable();
    data.addColumn('string', 'Macro');
    data.addColumn('number', 'Amount (g)');
    data.addRows([
        ['Fat', 0],
        ['Carbs',0 ],
        ['Protein', 0]
    ]);
    // Set chart options
    options1 = {
        chartArea: {
            width: '90%',
            height: '90%',
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

    options2 = {
        chartArea: {
            width: '100%',
            height: '100%',
            left: '0',
            right: '10%'
        },
        colors: ['#FCA103', "#fb5f44", "#03CFEC"],
        titlePosition: 'none',
        backgroundColor: '#FFFFFF',
        legend: {
            position: 'none'
        },
        pieSliceText:'value',
        pieSliceTextStyle: {
            color: 'black'
        },
        fontSize: 12
    };
    chart1 = new google.visualization.PieChart(document.getElementById('piechart-1'));
    chart2 = new google.visualization.PieChart(document.getElementById('piechart-2'));

    myVar.SetValue(true); // Notify the listening function that init has finished
}


function toggleNutrition1(){
    var checkBox = document.getElementById("nutritional-info-text1");
    var checkBox2 = document.getElementById("nutritional-info-text2");
    // var graph = document.getElementById("nutrition");
    if (checkBox.checked){
        if(document.getElementsByClassName("cart-items")[0].getElementsByClassName("cart-row").length > 0){
            $('.nutrition').css("display", "inline-block");
        }
        checkBox2.checked = true;
    } else {
        $('.nutrition').css("display", "none");
        checkBox2.checked = false;
    }
}

function toggleNutrition2(){
    var checkBox = document.getElementById("nutritional-info-text2");
    var checkBox2 = document.getElementById("nutritional-info-text1");
    // var graph = document.getElementById("nutrition");
    if (checkBox.checked){
        if(document.getElementsByClassName("cart-items")[0].getElementsByClassName("cart-row").length > 0){
            $('.nutrition').css("display", "inline-block");
        }
        checkBox2.checked = true;
    } else {
        $('.nutrition').css("display", "none");
        checkBox2.checked = false;
    }
}

/**
 * updateNutrition - updates the subtotal of the cart.
 */
function updateNutrition(){
    let cartItemContainer = document.getElementsByClassName("cart-items")[0];//first element
    let cartRows = cartItemContainer.getElementsByClassName("cart-row");
    var checkBox = document.getElementById("nutritional-info-text1");
    // var graph = document.getElementById("nutrition");
    if(cartRows.length > 0){
        if (checkBox.checked){
            $('.nutrition').css("display", "inline-block");
            // graph.style.display = "inline-block";
        } else {
            $('.nutrition').css("display", "none");
            // graph.style.display = "none";
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
        $(".nutrition").find("h2").text("Calories: " + calories);
        data.setValue(0, 1, fat);
        data.setFormattedValue(0, 1,'Fat: ' + fat + "g");
        data.setValue(1, 1, carbs);
        data.setFormattedValue(1, 1, 'Carbs: ' + carbs+ "g");
        data.setValue(2, 1, protein);
        data.setFormattedValue(2, 1, 'Protein: ' + protein+ "g");

        chart1.draw(data, options1);
        chart2.draw(data, options2);

    }else{
        // graph.style.display = "none";
        $('.nutrition').css("display", "none");
    }



}//end updateCartTotal

function rannum(rand, max, min){
    return min + (Math.round(rand*(max-min) * 10) / 10);
}