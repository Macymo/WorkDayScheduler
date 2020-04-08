var day = document.getElementById("currentDay");
//console.log("current day");
var schedule = document.getElementById("scheduler");


$(day).text(moment().format('MMMM Do YYYY, h:mm:ss a'));

var timeOfDay = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM"];
for (var i = 0; i < timeOfDay.length; i++) {
var row = $("<div>"); 
row.attr("class","row");
console.log(timeOfDay);

//inside of each row
var hourCol = $("<div>");
hourCol.text(timeOfDay[i]);
hourCol.attr("class", "col hour");
row.append(hourCol);
console.log(hourCol);

//inside each hour col, schedule input
var scheduleInput = $("<input>");
scheduleInput.attr("class", "event col-9");
row.append(scheduleInput);
console.log(scheduleInput);

//Save btn div attaches to row
var saveBtn = $("<div>");
saveBtn.attr("class", "saveBtn col");
row.append(saveBtn);
console.log(saveBtn);

//Actual button attaches to save btn div
var Btn = $("<button>")
Btn.attr("class", "fas fa-save");
saveBtn.append(Btn);

// append to container
$(schedule).append(row);
};
