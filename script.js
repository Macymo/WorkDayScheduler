

//current date/time for top of scheduler
function getDate(){
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
};

//set interval timer that updates page every hour
$(document).ready(function(){
    setInterval(getDate,1000);
});
var hour = moment().hours();
//console.log(hour);

$("input").each(function(){
    var rowHour = $(this).attr("id")
    var rowNumber = parseInt(rowHour);
    //console.log(rowHour);
    if (rowNumber === hour){
        $(this).addClass("present");
    } else if (rowNumber < hour){
        $(this).addClass("past");
    } else {
        $(this).addClass("future");
    };
});
