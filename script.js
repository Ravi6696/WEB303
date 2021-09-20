/*
WEB 303
Starting (file for Assignment 1 
	{Ravi Sanghani}
*/

$(document).ready(function(){
	$("#income").keyup(function(){
		myfun();
	});
	$("#percent").keyup(function(){
		myfun();
	});

});

function myfun(){
	var income = $("#income").val();
	var percent = $("#percent").val();
	var expence = (income * percent) / 100;
	var temp = expence.toFixed( 2 );
	$("#spend").text('$'+ temp);
}