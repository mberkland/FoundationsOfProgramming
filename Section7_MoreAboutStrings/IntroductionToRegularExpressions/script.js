// regular expressions - built into many programming languages
// strange looking sequences of characters that describe and can match patterns in strings
// not pleasant, but quite useful
// two parts: 1) create expression 2) apply and ask if matches

var myRE = /hello/; // "/" marks the beginning of a regular expression in JavaScript

// or the long version is below

var myRE = new RegExp("hello");

var myString = "Does this sentence have the word hello in it?";
if (myRE.test(myString)) {
	alert("Yes");
}

var myRE = /^hello/; // ^ means must be at the start
         // /hello$/ $ means must be at the end
         // /hel+o/  + means must have one or more l's
				 // /hel*0/  * means zero or more matches
         // /hel?o/  ? meanss zero or one matches
				 // /hello|goodbye/ | means either or
				 // /he..o/  . means any character
         // /\wello/ \w alphnumeric or _
         // /[crnld]ope/ [...] means match based on a range of charcters e.g. dope, lope, rope would all match

// can describe extremely complex patterns by stringing them all together
