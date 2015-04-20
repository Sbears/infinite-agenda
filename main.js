


//  var getToday = new Date() ;
//  var firstDay = getToday.getDay();
//  //console.log("getToday " + getToday);
//  //console.log("first day " + firstDay);

// var weekArray = ["Sunday ", "Monday ", "Tuesday ", "Wednesday ", "Thursday ", "Friday ", "Saturday "];


// var newArray = weekArray.slice(0,1);
//  for(var i = 0; i < firstDay; i++){
// var shift = weekArray.shift();
// weekArray.push(shift);
// }

// console.log(weekArray);


// $(".day1").prepend(weekArray[0]);
// $(".day2").prepend(weekArray[1]);
// $(".day3").prepend(weekArray[2]);
// $(".day4").prepend(weekArray[3]);
// $(".day5").prepend(weekArray[4]);
// $(".day6").prepend(weekArray[5]);
// $(".day7").prepend(weekArray[6]);



var weekArray = ["Sunday ", "Monday ", "Tuesday ", "Wednesday ", "Thursday ", "Friday ", "Saturday "];

var findDay = function(daysFromToday) {
	var getToday = new Date();
	// console.log("today ", getToday);
	var date = getToday.setDate(getToday.getDate() + daysFromToday);
 	//console.log("Date ", date);
	var arrayIndex = getToday.getDay();
	var dayName = weekArray[arrayIndex];
	return dayName;
};

console.log("Find Day", findDay(0), findDay(1), findDay(2), findDay(25));

$(".day1").append(findDay(0));
$(".day2").append(findDay(1));
$(".day3").append(findDay(2));
$(".day4").append(findDay(3));
$(".day5").append(findDay(4));
$(".day6").append(findDay(5));
$(".day7").append(findDay(6));
$(".day8").append(findDay(7));
$(".day9").append(findDay(8));
$(".day10").append(findDay(9));
$(".day11").append(findDay(10));
$(".day12").append(findDay(11));
$(".day13").append(findDay(12));
$(".day14").append(findDay(13));

$(document).on("click", ".span-button", function(){
//	 var button = $(this);
	$(this).parent().find("ul").append("<li><input type='text'></li>");
	console.log($(this));
});


