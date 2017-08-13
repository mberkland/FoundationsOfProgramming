var phrase = "This is a simple phrase.";
alert(phrase.length);

// string methods...like functions that belong to a string
alert(phrase.toUpperCase());

var str1 = "Hello";
var str2 = "hello";
// str1 != str2

if (str1.toLowerCase() == str2.toLowerCase()) {
	alert("Yes, equal");
}

// indexof

var pharse = "We want a groovy keyword.";
var position = phrase.indexOf("groovy"); // 10

// it returns -1 if the term is not found
if (phrase.indexOf("DDDD") == -1) {
	alert("That word does not occur.");
}

// there is also .lastIndeOf() method

// slice - breaking strings apart
var phrase = "Yet another phrase.";
var segment = phrase.slice(6, 11);
alert(segment);

// string comparison
var str1 = "aardvark";
var str2 = "beluga";

if (str1 < str2) {
	alert("beluga is less than aardvark");
}

var str3 = "Beluga";

if (str3 < str1) {
	alert("aardvark is less than Beluga"); // the uppercase B comes before the lowercase a
}

