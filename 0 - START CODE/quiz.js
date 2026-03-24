// DOM ELEMENTS  ---------------------------------------------------------
const dom_quiz = document.querySelector("#quiz");
const dom_question = document.querySelector("#question");
const dom_choiceA = document.querySelector("#A");
const dom_choiceB = document.querySelector("#B");
const dom_choiceC = document.querySelector("#C");
const dom_choiceD = document.querySelector("#D");
const dom_score = document.querySelector("#score");
const dom_start = document.querySelector("#start");
const dom_image = document.querySelector("#image");

dom_start.addEventListener("click", onStart);

// DATA  ---------------------------------------------------------
let questions = [
  {
    title: "What does HTML stand for?",
    choiceA: "Hi Thierry More Laught",
    choiceB: "How To move Left",
    choiceC: "Ho Theary Missed the Laundry !",
    choiceD: "Hypertext Markup Language",
    correct: "D",
  },
  {
    title: "What does CSS stand for?",
    choiceA: "Cisco and Super Start",
    choiceB: "Ci So Sa",
    choiceC: "Cascading Style Sheets",
    choiceD: "I don't know !",
    correct: "C",
  },
  {
    title: "What does JS stand for?",
    choiceA: "Junior stars",
    choiceB: "Justing Star",
    choiceC: "Javascript",
    choiceD: "RonanScript",
    correct: "C",
  },
];

let runningQuestionIndex = 0;
let score = 0;

// FUNCTIONS ---------------------------------------------------------

function hide(element) {
  element.style.display = "none";
}

function show(element) {
  element.style.display = "block";
}

function onStart() {
  runningQuestionIndex = 0;
  score = 0;

  renderQuestion();
  hide(dom_start);
  show(dom_quiz);
}

function renderQuestion() {
  let question = questions[runningQuestionIndex];

  dom_question.textContent = question.title;
  dom_choiceA.textContent = question.choiceA;
  dom_choiceB.textContent = question.choiceB;
  dom_choiceC.textContent = question.choiceC;
  dom_choiceD.textContent = question.choiceD;
}

function checkAnswer(answer) {
  if (runningQuestionIndex >= questions.length) return;

  let current = questions[runningQuestionIndex];

  if (answer === current.correct) {
    score++;
  }

  if (runningQuestionIndex < questions.length - 1) {
    runningQuestionIndex++;
    renderQuestion();
  } else {
    renderScore();
  }
}

function renderScore() {
  hide(dom_quiz);
  show(dom_score);

  let percent = Math.round((score / questions.length) * 100);
  dom_score.textContent = "Your Score: " + percent + "%";

  // IMAGE LOGIC
  if (!dom_image) return;

  if (percent === 100) {
    dom_image.src = "https://media1.tenor.com/m/oExlwt8_0XwAAAAd/coding-what.gif";
  } else if (percent >= 80) {
    dom_image.src = "https://media1.tenor.com/m/2roX3uxz_68AAAAC/good-job.gif";
  } else if (percent >= 60) {
    dom_image.src = "https://media1.tenor.com/m/Okj3t1z1Yw0AAAAC/not-bad.gif";
  } else if (percent >= 40) {
    dom_image.src = "https://media1.tenor.com/m/Z6gmDPeM6dgAAAAC/try-again.gif";
  } else {
    dom_image.src = "https://media1.tenor.com/m/dofkOmsOZmwAAAAd/sliped-banana.gif";
  }
}

// INITIAL STATE ---------------------------------------------------------
show(dom_start);
hide(dom_quiz);
hide(dom_score);