// Main file where you will put your exported RPS and RPSLS function(s).
export { rps, rpsls }

function rps(shot) {
	let enemyPlay = Math.floor(Math.random()*3);

	enemyPlay = enemyPlay == 0 ? "rock" :
					enemyPlay == 1 ? "paper" :
					"scissors";

	if (shot == undefined) { // If no shot, playing solo! 
		return { player: enemyPlay };
	}

	let user = shot.toLowerCase();

	let options = ['rock', 'paper', 'scissor'];

	if (!options.includes(user)) {
			if (user === "lizard" || user === "spock") {
				console.error(`${shot} is out of range.`);
				throw new RangeError();
			} else {
				console.error(`${shot} is not a valid choice.`);
				throw new RangeError();
			}
		}

	let result = '';

	if (enemyPlay === user) {
		result = "tie";
	} else if (
		enemyPlay === "rock" && user === "scissors" 
		|| enemyPlay === "paper" && user === "rock" 
		|| enemyPlay === "scissors" && user === "paper") 
		{result = "lose";}
	else {result = "win";}

	return { player: user,
		opponent: enemyPlay,
		result: result
	};
}

function rpsls(shot) {
	let enemyPlay = Math.floor(Math.random()*5);

	if (enemyPlay == 0) enemyPlay = "rock" // Determine the enemy play 
	else if (enemyPlay == 1) enemyPlay = "paper"
	else if (enemyPlay == 2) enemyPlay = "spock"
	else if (enemyPlay == 3) enemyPlay = "lizard"
	else enemyPlay = "scissors"

	if (shot == undefined) { // Look in rps 
		return { player: enemyPlay };
	}
	
	let options = ['rock', 'paper', 'scissor', 'lizard', 'spock'];

	let user = shot.toLowerCase();

	if (!options.includes(user)) {
		console.error(`${shot} is not a valid choice.`);
		throw new RangeError();
	}

	let result;

	if (enemyPlay === userPlay) { result = "tie";}  
	else if ( // Way more ways to lose now ... 
		enemyPlay === "rock" && userPlay === "scissors" 
		|| enemyPlay === "rock" && userPlay === "lizard"
		|| enemyPlay === "paper" && userPlay === "spock"
		|| enemyPlay === "paper" && userPlay === "rock" 
		|| enemyPlay === "scissors" && userPlay === "lizard"
		|| enemyPlay === "scissors" && userPlay === "paper" 
		|| enemyPlay === "lizard" && userPlay === "spock"
		|| enemyPlay === "lizard" && userPlay === "paper"
		|| enemyPlay === "spock" && userPlay === "rock"
		|| enemyPlay === "spock" && userPlay === "scissors"
		) { result = "lose";} 
	else { result = "win"; }

	return { player: user,
		opponent: enemyPlay,
		result: result
	};
}