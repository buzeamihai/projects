var possibilities = ["rock", "paper", "scissors"];

// function choose (range) {
//     return Math.round( Math.random() * range);
// }
// console.log ( possibilities[choose(possibilities.length - 1)]);

function choose (range) {
    var x = Math.round( Math.random() * range);
    return (possibilities[x]);
}

//Prima varianta la fct play

// function play() {
//   var computer, user;
//   computer = choose(possibilities.length-1);
//   console.log("Computer choice: ", computer);
//   user = choose(possibilities.length-1);
//   console.log("User choice: ", user);
//   if (computer === user) {
//     console.log ("Egalitate");
//   } else if (computer === "rock" && user === "scissors") {
//       console.log ("Computer wins!");
//   } else if (computer === "rock" && user === "paper") {
//     console.log ("User wins!");
//   } else if (computer === "paper" && user === "scissors") {
//     console.log ("User wins!");
//   } else if (computer === "paper" && user === "rock") {
//     console.log ("Computer wins!");
//   } else if (computer === "scissors" && user === "rock") {
//     console.log ("User wins!");
//   } else if (computer === "scissors" && user === "paper") {
//     console.log ("Computer wins!");
//   }
// }

// A doua varianta la fct play

// function play() {
//   var computer, user;
//   computer = choose(possibilities.length-1);
//   console.log("Computer choice: ", computer);
//   user = choose(possibilities.length-1);
//   console.log("User choice: ", user);
//   if (computer === user) {
//     console.log ("Egalitate");
//   } else if ((computer === "rock" && user === "scissors")||(computer === "paper" && user === "rock")||(computer === "scissors" && user === "paper")) {
//       console.log ("Computer wins!");
//   } else if (computer === "rock" && user === "paper") {
//     console.log ("User wins!");
//   } else if (computer === "paper" && user === "scissors") {
//     console.log ("User wins!");  
//   } else if (computer === "scissors" && user === "rock") {
//     console.log ("User wins!");
//   }
// }


// Varianta finala la fct play

function play() {
  var computer, user;
  computer = choose(possibilities.length-1);
  console.log("Computer choice: ", computer);
  user = choose(possibilities.length-1);
  console.log("User choice: ", user);
  if (computer === user) {
    console.log ("Egalitate");
  } else if ((computer === "rock" && user === "scissors")||(computer === "paper" && user === "rock")||(computer === "scissors" && user === "paper")) {
      console.log ("Computer wins!");
  } else {
    console.log ("User wins!");
  }
}

play();

