let num = Math.floor(Math.random() * 3) + 1;
let computerChoice;
let playerChoice;

if (num === 1) {
  computerChoice = "rock";
} else if (num === 2) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
}

console.log(num);
console.log(computerChoice);
