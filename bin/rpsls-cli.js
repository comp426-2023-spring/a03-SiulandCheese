#!/usr/bin/env node
import minimist from "minimist";
import { rpsls } from "../lib/rpsls.js"

var args = minimist(process.argv.slice(2));

const help_message = `Usage: node-rps [SHOT]
Play Rock Paper Scissors Lizard Spock(RPSLS)

    -h, --help      display this help message and exit
    -r, --rules     display the rules and exit
                
Examples:
    node-rps        Return JSON with single player RPSLS result.
                        e.g. {"player":"rock"}
     node-rps rock   Return JSON with results for RPSLS played against a simulated opponent.
                        e.g {"player":"lizard","opponent":"spock","result":"win"}`

const rules = `Rules for Rock Paper Scissors:
  - Scissors CUTS Paper
  - Paper COVERS Rock
  - Rock CRUSHES Scissors`; 

if (args.h || args.help) {
	console.log(help_message);
	process.exit(0);
}

if (args.r || args.rules) {
	console.log(rules);
	process.exit(0);
}

let shot = args._[0]

try {
    console.log(JSON.stringify(rpsls(shot)));
} catch (e) {
    console.log(rules);
}