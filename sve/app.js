let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
	const choices = ['r', 'p', 's'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function convertToWord(letter) {
	if (letter === 'r') return "Kamen";
	if (letter === 'p') return "Papir";
	return "Makaze"
}

function win(userChoice, computerChoice) {
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "Igrac".fontsize(3).sub();
	const smallComputerWord = "Kompjuter".fontsize(3).sub();
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} pobjedjuje ${convertToWord(computerChoice)}${smallComputerWord}. Pobjedjujes!`;
	document.getElementById(userChoice).classList.add('green-glow');
	setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow') }, 300);
}

function lose(userChoice, computerChoice) {
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "Igrac".fontsize(3).sub();
	const smallComputerWord = "Kompjuter".fontsize(3).sub();
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} gubi od ${convertToWord(computerChoice)}${smallComputerWord}. Izgubio si....`;
	document.getElementById(userChoice).classList.add('red-glow');
	setTimeout(function() { document.getElementById(userChoice).classList.remove('red-glow') }, 300);
}

function draw(userChoice, computerChoice) {
	const smallUserWord = "Igrac".fontsize(3).sub();
	const smallComputerWord = "Kompjuter".fontsize(3).sub();
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} je isto sto i ${convertToWord(computerChoice)}${smallComputerWord}. Nerjeseno je!`;
	document.getElementById(userChoice).classList.add('gray-glow');
	setTimeout(function() { document.getElementById(userChoice).classList.remove('gray-glow') }, 300)
}

function game (userChoice) {
	const computerChoice = getComputerChoice();
	switch(userChoice + computerChoice) {
		case "rs":
		case "pr":
		case "sp":
			win(userChoice, computerChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice, computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, computerChoice);
			break;
	}
}

function main() {
	rock_div.addEventListener('click', function() {
		game("r");
	})

	paper_div.addEventListener('click', function() {
		game("p");
	})

	scissors_div.addEventListener('click', function() {
		game("s");
	})
}

main();