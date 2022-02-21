var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

updateGradient();

function updateGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", updateGradient);
color2.addEventListener("input", updateGradient);

// method to generate a random color from: https://www.educative.io/edpresso/how-to-generate-a-random-color-in-javascript
function generateRandomColor(){
    let maxVal = 0xFFFFFF;
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}

button.addEventListener("click", function() {
	var randcolor1 = generateRandomColor();
	var randcolor2 = generateRandomColor();
	color1.value = randcolor1;
	color2.value = randcolor2;

	body.style.background = "linear-gradient(to right, " + randcolor1 + ", " + randcolor2 + ")";
	css.textContent = body.style.background + ";";
})
