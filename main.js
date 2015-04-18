


 var getToday = new Date() ;
 var firstDay = getToday.getDay();
 console.log("getToday " + getToday);
 console.log("first day " + firstDay);

var weekArray = ["Sun  ", "Mon  ", "Tues ", "Wed  ", "Thurs", "Fri  ", "Sat"];
var indexArray = [0,1,2,3,4,5,6];

//var newArray = weekArray.slice(0,1);
 for(var i = 0; i < firstDay; i++){
var shift = weekArray.shift();
weekArray.push(shift);
}

console.log(weekArray);

var indexMatch = _.object(indexArray, weekArray);
console.log(indexMatch);
$(".day1").prepend(indexMatch[0]);
$(".day2").prepend(indexMatch[1]);
$(".day3").prepend(indexMatch[2]);
$(".day4").prepend(indexMatch[3]);
$(".day5").prepend(indexMatch[4]);
$(".day6").prepend(indexMatch[5]);
$(".day7").prepend(indexMatch[6]);

$(".agenda").on("click", function(){
	var currentState = $(this);

	currentState.hide();
	currentState.after("<textarea class='write-here'>" + currentState.text() + "</textarea>");
//	$(".write-here").val(save);
	$(".write-here").focus();
});

$(document).on("blur", ".write-here", function(){
	console.log("Test", $(this));

	$(this).hide();
	var newSave = $(".write-here").val();
	console.log("newSave", newSave);
//	$(this).before(newSave);
	var listitem = $(this).siblings(".agenda");
	listitem.show();
	listitem.text(newSave);
	console.log(listitem);
//	$(".agenda").text(newSave);
//	$(".agenda").after(newSave);


// $( ".day1" ).text(function( index ) {
//   return "item number " + ( index + 1 );
// });





});



// var weekArray = ["Sun  ", "Mon  ", "Tues ", "Wed  ", "Thurs", "Fri  ", "Sat"];
// var getToday = new Date();
// //getToday.setDate(getToday.getDate() + 1);

// //var date =
//  getToday.setDate(getToday.getDate() + 0);
// //console.log("Date ", date);
// var arrayIndex = getToday.getDay();
// var dayName = weekArray[arrayIndex];

// console.log("today ", getToday);

// $(".day1").append(dayName);
// $(".day2").append();
// $(".day3").append();
// $(".day4").append();
// $(".day5").append();
// $(".day6").append();
// $(".day7").append();