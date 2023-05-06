// Main file where you will put your exported RPS and RPSLS function(s).
export { rps, rpsls }

function rps(shot) {
	let enemyPlay = Math.floor(Math.random()*3);

	if (enemyPlay == 0) enemyPlay = "rock"
	else if (enemyPlay == 1) enemyPlay = "paper"
	else enemyPlay = "scissors"

	if (shot == undefined) {
		return { player: enemyPlay };
	}

	let userPlay = shot.toLowerCase();

	let options = ['rock', 'paper', 'scissor'];

	if (!options.includes(userPlay)) {
			if (userPlay === "lizard" || userPlay === "spock") {
				console.error(`${shot} is out of range.`);
				throw new RangeError();
			} else {
				console.error(`${shot} is not a valid choice.`);
				throw new RangeError();
			}
		}

	let result;
	
	if (enemyPlay === "rock" && userPlay === "scissors" || enemyPlay === "paper" && userPlay === "rock" || enemyPlay === "scissors" && userPlay === "paper") {result = "loss";} 
	else if (enemyPlay === userPlay) {result = "tie";}
	else {result = "win";}

	return { player: userPlay, opponent: enemyPlay, result: result};
}

function rpsls(shot) {
	let enemyPlay = Math.floor(Math.random()*5);
	enemyPlay = enemyPlay == 0 ? "rock" :
		enemyPlay == 1 ? "paper" :
		enemyPlay == 2 ? "scissors" :
		enemyPlay == 3 ? "lizard" :
		"spock";

	if (shot == undefined) {
		return { player: enemyPlay };
	}
	
	let options = ['rock', 'paper', 'scissor', 'lizard', 'spock'];

	let userPlay = shot.toLowerCase();

	if (!options.includes(userPlay)) {
		console.error(`${shot} is not a valid choice.`);
		throw new RangeError();
	}

	let result = '';

	if (enemyPlay === userPlay) {
		result = "tie";
	} else if (enemyPlay === "rock" && userPlay === "scissors" || enemyPlay === "paper" && userPlay === "rock" || enemyPlay === "scissors" && userPlay === "paper") {
		result = "lose";
	} else if (enemyPlay === "rock" && userPlay === "lizard" || enemyPlay === "lizard" && userPlay === "spock" || enemyPlay === "spock" && userPlay === "rock") {
		result = "lose";
	} else if (enemyPlay === "spock" && userPlay === "scissors" || enemyPlay === "scissors" && userPlay === "lizard" || enemyPlay === "paper" && userPlay === "spock" || enemyPlay === "lizard" && userPlay === "paper") {
		result = "lose";
	} else {
		result = "win";
	}

	return { player: userPlay,
		opponent: enemyPlay,
		result: result
	};
}