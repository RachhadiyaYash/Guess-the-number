
const nuMgen = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMassage = function (massage) {
	document.querySelector('.message').textContent = massage;
}

document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);


	if (!guess) {
		displayMassage("plz select the NUM 😒😒🚫");
	}


	else if (guess === nuMgen) {

		displayMassage("Wow  Right.....!");
		document.querySelector('.number').textContent = nuMgen;

		document.body.style.backgroundColor = "red";
		document.querySelector('.number').style.width = "30rem";

		if (score > highscore) {
			highscore = score;
			document.querySelector('.highscore').innerHTML = highscore;
		}
	}

	else if (guess > nuMgen) {

		if (score > 1) {
			displayMassage("Too High......");
			score--;
			document.querySelector('.score').textContent = score;
		} else {
			displayMassage("You Loooseeeeee......");
			document.querySelector('.score').textContent = 0;
		}
	}


	else if (guess < nuMgen) {
		if (score > 1) {
			displayMassage("Too Lawwww......");
			score--;
			document.querySelector('.score').textContent = score;
		} else {
			displayMassage("You Loooseeeeee......");
			document.querySelector('.score').textContent = 0;
		}
	}
})


document.querySelector('.again').addEventListener('click', function () {

	displayMassage("Start Guessing....");

	document.body.style.backgroundColor = "black";
	const nuMgen = Math.floor(Math.random() * 20) + 1;
	document.querySelector('.score').textContent = "20";
	document.querySelector('.number').textContent = "?";
	score = 20;
	document.querySelector('.guess').value = '';
})