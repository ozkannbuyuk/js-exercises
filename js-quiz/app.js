const questions = [
  {
    question: "Which CSS property is used to change the text color?",
    answer1: "text-color",
    answer2: "color",
    correctAnswer: "color",
  },
  {
    question: 'What does the "font-weight" property control in CSS?',
    answer1: "Font color",
    answer2: "Font size",
    correctAnswer: "How bold text will be",
  },

  {
    question: "Which CSS syntax is correct?",
    answer1: "font-size = 20px",
    answer2: "background-color : 2rem",
    correctAnswer: "display : flex;",
  },

  {
    question: "What is the abbreviation CSS stands for? ",
    answer1: "Current style state",
    answer2: "Cascading super style",
    correctAnswer: "Cascading style sheet",
  },

  {
    question: "Which of the following is considered a CSS pre-processor?",
    answer1: "React",
    answer2: "Vue",
    correctAnswer: "Sass",
  },
];

const startScreen = document.querySelector(".start-screen");
const startBtn = document.querySelector(".start-btn");
const questionContainer = document.querySelector(".question-container");
const answers = document.querySelectorAll(".answer");
const answerList = document.querySelector(".answer-list");
const nextBtn = document.querySelector(".next-btn");

const question = document.querySelector("h3");
const answer1 = document.querySelector(".answer-1");
const answer2 = document.querySelector(".answer-2");
const answer3 = document.querySelector(".answer-3");

let questionCounter = 0;
let score = 0;
let guess;

startBtn.addEventListener("click", function () {
  questionContainer.style.display = "flex";
  startScreen.style.display = "none";
});

answerList.addEventListener("click", function (e) {
  answers.forEach((answer) => {
    answer.classList.remove("active");
  });

  if (e.target.classList.contains("answer")) {
    e.target.classList.add("active");
    guess = e.target.textContent;
    console.log(guess);
  }
});

nextBtn.addEventListener("click", function () {
  if (questions[questionCounter].correctAnswer === guess) {
    score++;
  }
  if (questionCounter === 4) {
    return (questionContainer.innerHTML = `Your score is ${score}`);
  }
  questionCounter++;

  answers.forEach((answer) => {
    answer.classList.remove("active");
  });
  question.textContent = `Q${questionCounter + 1}: ${
    questions[questionCounter].question
  }`;
  let order = randomizeQuestion();
  console.log(order);
  answer1.textContent = order[0];
  answer2.textContent = order[1];
  answer3.textContent = order[2];
});

function randomizeQuestion() {
  let questionOrder = [
    [
      questions[questionCounter].answer1,
      questions[questionCounter].answer2,
      questions[questionCounter].correctAnswer,
    ],
    [
      questions[questionCounter].correctAnswer,
      questions[questionCounter].answer1,
      questions[questionCounter].answer2,
    ],
    [
      questions[questionCounter].answer2,
      questions[questionCounter].correctAnswer,
      questions[questionCounter].answer1,
    ],
  ];

  let selectedOrder = Math.floor(Math.random() * 3);
  return questionOrder[selectedOrder];
}
