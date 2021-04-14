$(document).ready(function(){
    $("button").on("click", updateTotals);
    $("#numHeight").on("change", updateTotals);
    $("#numWeight").on("change", updateTotals);
});

updateTotals();

function updateTotals () {
    //determine inches in height and pounds in weight
    var numHeight = parseFloat($("#numHeight").val());
    console.log("Height in inches: " + numHeight);

    var numWeight = parseFloat($("#numWeight").val());
    console.log("Weight in pounds: " + numWeight);

    var personsBMI = (numWeight / (numHeight * numHeight)) * 703
    $("#personsBMI").text(personsBMI.toFixed(2));

    weight();

    $(".output").show();

    function weight(){
        var weightStr;

        if (personsBMI < 18.5){
            weightStr = "underweight";
        }
        else if (personsBMI >= 18.5 && personsBMI < 25.0){
            weightStr = "normal";
        }
        else if (personsBMI >= 25.0 && personsBMI < 30.0){
            weightStr = "overweight";
        }
        else {
            weightStr = "obese";
        }
        console.log(weightStr);

        $("#weight").text(weightStr);
    }
}








