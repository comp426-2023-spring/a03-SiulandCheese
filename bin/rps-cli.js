#!/usr/bin/env node
import minimist from 'minimist';
import { rps } from "../lib/rpsls.js"

var args = minimist(process.argv.slice(2));

if (args.h || args.help) { // If someone asks for help, print message 
	console.log(
  `Usage: node-rps [SHOT]
  Play Rock Paper Scissors (RPS)
  
    -h, --help      display this help message and exit
    -r, --rules     display the rules and exit
  
  Examples:
    node-rps        Return JSON with single player RPS result.
                    e.g. {"player":"rock"}
    node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                    e.g {"player":"rock","opponent":"scissors","result":"win"}`);

	process.exit(0);
}

if (args.r || args.rules) { // If someone asks for the rules, print rules 
	console.log(
  `Rules for Rock Paper Scissors:
  - Scissors CUTS Paper
  - Paper COVERS Rock
  - Rock CRUSHES Scissors`);

	process.exit(0);
}

let shot = args._[0] // Take in shot 

try {
	console.log(JSON.stringify(rps(shot))); // Start game 
} catch (e) {
	console.log(help_message); // Show em how to play if they mess up
	console.log(rules);
}      