// Main file where you will put your exported RPS and RPSLS function(s).
export { rps, rpsls }

function rps(shot) {
	let enemyPlay = Math.floor(Math.random()*3);

	if (enemyPlay == 0) enemyPlay = "rock" // Determine the enemy play 
	else if (enemyPlay == 1) enemyPlay = "paper"
	else enemyPlay = "scissors"

	if (shot == undefined) { // If no shot, playing solo! 
		return { player: enemyPlay };
	}

	let userPlay = shot.toLowerCase(); // Keep it simple 

	let options = ['rock', 'paper', 'scissor'];

	if (!options.includes(userPlay)) { // Check that you have a valid option 
			if (userPlay === "lizard" || userPlay === "spock") {
				console.error(`${shot} is out of range.`);
				throw new RangeError();
			} else {
				console.error(`${shot} is not a valid choice.`);
				throw new RangeError();
			}
		}

	let result; // Save whether you win or not 
	
	if (enemyPlay === "rock" && userPlay === "scissors" || enemyPlay === "paper" && userPlay === "rock" || enemyPlay === "scissors" && userPlay === "paper") {result = "loss";} // Determine result
	else if (enemyPlay === userPlay) {result = "tie";}
	else {result = "win";}

	return { player: userPlay, opponent: enemyPlay, result: result};
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

	let userPlay = shot.toLowerCase(); // look in rps 

	if (!options.includes(userPlay)) { // look in rps 
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

	return { player: userPlay,
		opponent: enemyPlay,
		result: result
	};
}