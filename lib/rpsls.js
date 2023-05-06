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

	if (!options.includes(userChoice)) {
			console.error(`${shot} is not a valid choice.`);
			throw new RangeError(); }

	let result = ''; 

	if (opponentChoice === userChocie) {result = "tie";}  // Determine Result of the game 
    else if (opponentChoice === "rock" && userChoice === "scissors" || opponentChoice === "paper" && userChocie === "rock" || opponentChoice === "scissors" && userChoice === "paper") {result = "lose";} 
    else {result = "win";}
    
    let returnMe = "{player: " + userChoice + ", opponent: " + opponentChoice + ", result: " + result + "}"
	return {returnMe}; // Finish the game ! 
}

function rpsls(shot) {
    let randInt = Math.ceil(Math.random()*5); // Generate a random # 

    let opponentChoice = "scissors" // Use random # to determine opponenetChoice 
	if (randInt == 1) {let opponentChoice = "rock"} 
    else if (randInt == 2) {let opponentChoice = "paper"}
    else if (randInt == 3) {let opponenetChoice = "spock"}
    else if (randInt == 4) {let opponenetChoice = "lizard"}
    
	if (shot == undefined) {return { player: opponentChoice };} // 404 ! 

	let userChoice = shot.toLowerCase(); // Keep things consistent! 

	let options = ['rock', 'paper', 'scissor', 'spock', 'lizard']; // Check for acceptable inputs 

	if (!options.includes(userChoice)) {
			console.error(`${shot} is not a valid choice. Try one of these: ` + options);
			throw new RangeError(); }

	let result = ''; 

	if (opponentChoice === userChoice) {result = "tie";}  // Determine Result of the game 
    else if (
     opponentChoice === "rock" && userChoice === "scissors" ||
     opponentChoice === "paper" && userChoice === "rock" ||
     opponentChoice === "scissors" && userChoice === "paper" || 
     opponentChoice === "rock" && userChoice === "lizard" || 
     opponentChoice === "lizard" && userChoice === "spock" || 
     opponentChoice === "spock" && userChoice === "rock" || 
     opponentChoice === "spock" && userChoice === "scissors" || 
     opponentChoice === "scissors" && userChoice === "lizard" || 
     opponentChoice === "paper" && userChoice === "spock"
     ) {result = "lose";} 
    else {result = "win";}
    
    let returnMe = "{player: " + userChoice + ", opponent: " + opponentChoice + ", result: " + result + "}"

	return {returnMe}; // Finish the game ! 
}