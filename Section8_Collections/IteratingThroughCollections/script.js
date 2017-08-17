// Iterating Through and Array

var myArray = [10, 20, "test", true, 99];

var i = 0;

while (i < myArray.length) {
	alert("The value is: " + myArray[i]);
	i++;
}

// example

var myOtherArray = [500, 500, 500, 500, 500, 453, 5, 66, 34, 5, 4 , 234];

var total = 0;

for (var i = 0; i < myOtherArray.length; i++) {
	// add the current element to the total
	total += myOtherArray[i];
}

// after we're done with the loop
alert("The total is: " + total);