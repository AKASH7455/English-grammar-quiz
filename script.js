// =========================
// QUIZ QUESTIONS
// =========================

const questions = [
  {
    q: "Which of the following is a noun?",
    options: ["Run", "Happiness", "Quickly", "Blue"],
    answer: 1
  },
  {
    q: "Identify the adjective:",
    options: ["Table", "Eat", "Beautiful", "He"],
    answer: 2
  },
  {
    q: "“An” is used before words that:",
    options: [
      "Start with consonant sound",
      "Start with vowel sound",
      "Are plural",
      "Are proper nouns"
    ],
    answer: 1
  },
  {
    q: "Choose the correct sentence:",
    options: [
      "I saw a elephant.",
      "I saw an elephant.",
      "I saw the elephant always.",
      "I saw elephant."
    ],
    answer: 1
  },
  {
    q: "Identify the verb:",
    options: ["Teacher", "Walking", "Happiness", "Red"],
    answer: 1
  },
  {
    q: "Present Simple is used for:",
    options: [
      "Actions happening right now",
      "Past habits",
      "Daily routine",
      "Future plans"
    ],
    answer: 2
  },
  {
    q: "Choose the Present Simple sentence:",
    options: [
      "He is eating food.",
      "He eats food everyday.",
      "He ate food.",
      "He will eat food."
    ],
    answer: 1
  },
  {
    q: "Choose the Present Continuous sentence:",
    options: [
      "They play football.",
      "They played football.",
      "They are playing football.",
      "They will play football."
    ],
    answer: 2
  },
  {
    q: "“I am feeling tired.” — yeh kis pattern ka example hai?",
    options: ["I want + thing", "I am + feeling", "Don’t + verb", "Please + verb"],
    answer: 1
  },
  {
    q: "I ___ a laptop.",
    options: ["am have", "have", "having", "has"],
    answer: 1
  },
  {
    q: "Which sentence is correct?",
    options: ["I need water.", "I needing water.", "I am need water.", "I needs water."],
    answer: 0
  },
  {
    q: "I want ___ tea.",
    options: ["a", "an", "the", "(no article)"],
    answer: 3
  },
  {
    q: "Which sentence follows 'Don’t + verb' pattern?",
    options: [
      "Don’t speak loudly.",
      "Please close the door.",
      "I am happy.",
      "I have a car."
    ],
    answer: 0
  },
  {
    q: "Identify the pronoun:",
    options: ["Book", "She", "Dance", "Colorful"],
    answer: 1
  },
  {
    q: "“He is running” — verb kaunsa hai?",
    options: ["He", "running", "is", "both B & C"],
    answer: 3
  },
  {
    q: "Choose the correct adjective order:",
    options: [
      "A wooden small beautiful box",
      "A beautiful small wooden box",
      "A small wooden beautiful box",
      "A wooden beautiful small box"
    ],
    answer: 1
  },
  {
    q: "I ___ watching a movie.",
    options: ["is", "are", "am", "be"],
    answer: 2
  },
  {
    q: "Correct sentence:",
    options: [
      "Please to close the door.",
      "Please close the door.",
      "Please closing the door.",
      "Please closes the door."
    ],
    answer: 1
  },
  {
    q: "“They don’t like tea.” — yeh kaunsa tense hai?",
    options: ["Present Continuous", "Present Simple (negative)", "Past Simple", "Future"],
    answer: 1
  },
  {
    q: "I bought ___ umbrella.",
    options: ["a", "an", "the", "(no article)"],
    answer: 1
  }
];


// =========================
// ELEMENTS
// =========================
const startScreen = document.getElementById("startScreen");
const startBtn = document.getElementById("startBtn");
const quiz = document.getElementById("quiz");
const questionText = document.getElementById("question");
const optionsList = document.getElementById("options");

const currentSpan = document.getElementById("current");
const totalSpan = document.getElementById("total");

const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

const resultBox = document.getElementById("result");
const scoreText = document.getElementById("scoreText");


// =========================
// QUIZ STATE VARIABLES
// =========================
let index = 0;
let score = 0;
totalSpan.textContent = questions.length;


// =========================
// START QUIZ (Your Fix Applied Properly)
// =========================
startBtn.addEventListener("click", () => {

  // HIDE EVERYTHING (your request)
  document.querySelector("header").style.display = "none";
  document.querySelector("footer").style.display = "none";
  startScreen.style.display = "none";

  // SHOW QUIZ
  quiz.hidden = false;
  quiz.style.display = "block";

  loadQuestion();
});


// =========================
// LOAD QUESTION
// =========================
function loadQuestion() {
  nextBtn.disabled = true;
  optionsList.innerHTML = "";
  resultBox.hidden = true;

  const q = questions[index];
  questionText.textContent = q.q;
  currentSpan.textContent = index + 1;

  q.options.forEach((opt, i) => {
    const li = document.createElement("li");
    li.textContent = opt;
    li.dataset.index = i;

    li.addEventListener("click", () => selectOption(li));
    optionsList.appendChild(li);
  });
}


// =========================
// OPTION SELECT
// =========================
function selectOption(selectedLi) {
  const q = questions[index];
  const options = Array.from(optionsList.children);

  options.forEach(li => li.style.pointerEvents = "none");

  selectedLi.classList.add("selected");

  if (parseInt(selectedLi.dataset.index) === q.answer) {
    selectedLi.classList.add("correct");
    score++;
  } else {
    selectedLi.classList.add("wrong");
    options[q.answer].classList.add("correct");
  }

  nextBtn.disabled = false;
}


// =========================
// NEXT QUESTION
// =========================
nextBtn.addEventListener("click", () => {
  index++;

  if (index < questions.length) loadQuestion();
  else endQuiz();
});


// =========================
// END QUIZ
// =========================
function endQuiz() {
  quiz.hidden = false;
  questionText.textContent = "Quiz Completed!";
  optionsList.innerHTML = "";
  nextBtn.hidden = true;
  restartBtn.hidden = false;

  scoreText.textContent = `Your Score: ${score} / ${questions.length}`;
  resultBox.hidden = false;
}


// =========================
// RESTART QUIZ
// =========================
restartBtn.addEventListener("click", () => {
  index = 0;
  score = 0;
  nextBtn.hidden = false;
  restartBtn.hidden = true;
  loadQuestion();
});