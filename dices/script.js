let images = ["dices/dice-01.svg",
	"dices/dice-02.svg",
	"dices/dice-03.svg",
	"dices/dice-04.svg",
	"dices/dice-05.svg",
	"dices/dice-06.svg"];
let dice = document.querySelectorAll("img");

function roll() {
	dice.forEach(function(die) {
		die.classList.add("shake");
	});
	setTimeout(function() {
		dice.forEach(function(die) {
			die.classList.remove("shake");
		});
		let dieOneValue = Math.floor(Math.random()*6);
		let dieTwoValue = Math.floor(Math.random()*6);

		console.log(dieOneValue, dieTwoValue);

		document.querySelector("#die-1").setAttribute("src",
			images[dieOneValue]);
		document.querySelector("#die-2").setAttribute("src",
			images[dieTwoValue]);

		document.querySelector("#total").innerHTML =
			"Випало " + ((dieOneValue + 1) + (dieTwoValue + 1));
	},
	1050
	);
}
roll();