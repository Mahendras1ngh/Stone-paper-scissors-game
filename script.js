const vs = document.getElementById("vs");
const result = document.getElementById("result");
const score = document.getElementById("score");
console.log(score);
let pscore = 0;
let cscore = 0;
let choice, comChoice;

function stone() {
  choice = "stone";
  let random = Math.random();

  if (random < 0.33) {
    comChoice = "stone";
    vs.innerHTML = `${choice} Vs ${comChoice}`;
    result.innerHTML = `There is a tie`;
    score.innerHTML = `Your score: ${pscore}, Computer's score: ${cscore}`;
  } else if (random > 0.33 && random < 0.66) {
    comChoice = "paper";
    cscore++;
    vs.innerHTML = `${choice} Vs ${comChoice}`;
    result.innerHTML = `You lose`;
    score.innerHTML = `Your score: ${pscore}, Computer's score: ${cscore}`;
  } else {
    comChoice = "scissor";
    pscore++;
    vs.innerHTML = `${choice} Vs ${comChoice}`;
    result.innerHTML = `you win`;
    score.innerHTML = `Your score: ${pscore}, Computer's score: ${cscore}`;
  }
}

function paper() {
  choice = "paper";
  let random = Math.random();

  if (random < 0.33) {
    comChoice = "paper";
    vs.innerHTML = `${choice} Vs ${comChoice}`;
    result.innerHTML = `There is a tie`;
    score.innerHTML = `Your score: ${pscore}, Computer's score: ${cscore}`;
  } else if (random > 0.33 && random < 0.66) {
    comChoice = "scissor";
    cscore++;
    vs.innerHTML = `${choice} Vs ${comChoice}`;
    result.innerHTML = ` You lose`;
    score.innerHTML = `Your score: ${pscore}, Computer's score: ${cscore}`;
  } else {
    comChoice = "stone";
    pscore++;
    vs.innerHTML = `${choice} Vs ${comChoice}`;
    result.innerHTML = `you win`;
    score.innerHTML = `Your score: ${pscore}, Computer's score: ${cscore}`;
  }
}

function scissor() {
  choice = "scissor";
  let random = Math.random();

  if (random < 0.33) {
    comChoice = "scissor";
    vs.innerHTML = `${choice} Vs ${comChoice}`;
    result.innerHTML = `There is a tie`;
    score.innerHTML = ` Your score: ${pscore}, Computer's score: ${cscore}`;
  } else if (random > 0.33 && random < 0.66) {
    comChoice = "paper";
    cscore++;
    vs.innerHTML = `${choice} Vs ${comChoice}`;
    result.innerHTML = ` You lose`;
    score.innerHTML = ` Your score: ${pscore}, Computer's score: ${cscore} `;
  } else {
    comChoice = "stone";
    cscore++;
    vs.innerHTML = `${choice} Vs ${comChoice}`;
    result.innerHTML = `you lose`;
    score.innerHTML = `Your score: ${pscore}, Computer's score: ${cscore}`;
  }
}
