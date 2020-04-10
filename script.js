$(document).ready(function(){
//current date/time for top of scheduler
function getDate(){
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
};

//set interval timer that updates page every second
setInterval(getDate,1000);

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

$(".saveBtn").click(function(){
    var scheduleInputs = $(this).siblings(".event").val();
    //console.log(events);
    var inputsLocation = $(this).siblings(".event").attr("id");
    //console.log(eventsLocation);
    localStorage.setItem(inputsLocation,scheduleInputs);
});

$(".event").each(function(){
    var renderInputs = $(this).attr("id")
    //console.log(renderInputs);
    $(this).val(localStorage.getItem(renderInputs));
     if(renderInputs === null) {
        return;
    };
});

});


