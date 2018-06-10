var _ = require('lodash');
console.log(_);

var array = [1,2,3,4,5,6];
console.log('answer', _.without(array, 3));

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value + ", " 
	+ color2.value + ")";

	// adding text to h3 element while showing updates
	css.textContent = body.style.background + ";";		
}

//Testing
/*
console.log(css);
console.log(color1);
console.log(color2);
console.log(body);
*/

// addEventListener is better than an onclick (more extensible)
color1.addEventListener("input", setGradient);
	//console.log(color1.value);
color2.addEventListener("input", setGradient);	
	//console.log(color2.value);

/*
1. Write code so that the colour inputs match the background generated on the first page load. 

2. Display the initial CSS linear gradient property on page load.

3. BONUS: Add a random button which generates two random numbers for the colour inputs.
*/