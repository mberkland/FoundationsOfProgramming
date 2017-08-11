var a = 1;
var b = 1;

if (a == b) {
	//execute this code
	a += 1
}

// remember assignment (using one a = b) 
// is not the same as testing for equality

if (a = b) { // this is assignment, a is now equal to b
	
}

// === strict equality operator

var c = 123
var d = "123"

// equality check
if (c == d) {
	alert ("Yes, they ARE equal");
} else {
	alert("NO they're NOT equal")
}

// strick equality check
if (c === d) {
	alert ("Yes, they ARE equal");
} else {
	alert("No, they're NOT equal")
}

