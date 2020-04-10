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
    //console.log(scheduleInputs);
    var inputsLocation = $(this).siblings(".event").attr("id");
    //console.log(inputsLocation);
    localStorage.setItem(inputsLocation,scheduleInputs);
});

function renderStoredInputs(){
    $(".event").each(function(){
        var inputId = $(this).attr("id")
        //console.log(inputId);
        $(this).val(localStorage.getItem(inputId));
        //console.log(localStorage.getItem(inputId));
    });
};
renderStoredInputs();
});


