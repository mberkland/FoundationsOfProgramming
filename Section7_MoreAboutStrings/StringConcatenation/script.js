var foo = 5;
var bar = 5;
alert(foo + bar); // 10

var foo = "5";
var bar = "5";
alert(foo + bar); // 55 - string concatenation

var foo = 5;
var bar = "5";
alert(foo + bar); // 55 - one is  string

var foo = 5;
var bar = "b";
alert(foo * bar); // NaN - Not a Number

var foo = "55"; // could be "abc"
var myNumber = Number(foo); // make it a number

if (isNaN(myNumber)) {
	alert("It's not  number!");
}

// double negative - if NOT NOT a number
if (!isNaN(myNumber)) {
	alert("It IS a number");
}
