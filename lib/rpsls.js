//"""This is going to be the main file and also where you will put your exported RPS and RPSLS function(s)."""

export { rps, rpsls }

function rps(shot) {
	let randInt = Math.ceil(Math.random()*3); // Generate a random # 

    let opponentChoice = "scissors" // Use random # to determine opponenetChoice 
	if (randInt == 1) {let opponentChoice = "rock"} 
    else if (randInt == 2) {let opponentChoice = "paper"}
    
	if (shot == undefined) {return { player: opponentChoice };} // 404 ! 

	let userChoice = shot.toLowerCase(); // Keep things consistent! 

	let options = ['rock', 'paper', 'scissor']; // Check for acceptable inputs 

	if (!(userChoice in options)) {
			console.error(`${shot} is not a valid choice.`);
			throw new RangeError(); }

	let result = ''; 

	if (opponentChoice === userChocie) {result = "tie";}  // Determine Result of the game 
    else if (opponentChoice === "rock" && userChoice === "scissors" || opponentChoice === "paper" && userChocie === "rock" || opponentChoice === "scissors" && userChoice === "paper") {result = "lose";} 
    else {result = "win";}

	return { player: user, opponent: opponentChoice, result: result}; // Finish the game ! 
}

