// all variables have a scope

function simpleFunction() {
	var x = 500; // x is a local variable
	alert(x);
}

simpleFunction();

var y; // global variable

function simpleTwo() {
	y = 300;
}

simpleTwo();
alert(y);
