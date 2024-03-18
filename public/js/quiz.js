const questions = [
  {
      question: "מה פירוש התמרור ?",
      choices: ["תן זכות קדימה", "זהירות עליה", "זהירות ירידה תלולה", "עמדת שטרימל למכירה"],
      correctAnswer: 3
  },
  {
    question: "מה פירוש התמרור ?",
    
  }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const scoreElement = document.getElementById("scoreValue");
const nextButton = document.getElementById("nextButton");

function displayQuestion() {
  const q = questions[currentQuestion];
  questionElement.textContent = q.question;
  choicesElement.innerHTML = "";
  q.choices.forEach((choice, index) => {
      const button = document.createElement("button");
      button.textContent = choice;
      button.addEventListener("click", () => checkAnswer(index));
      choicesElement.appendChild(button);
  });
}

function checkAnswer(choice) {
  if (choice === questions[currentQuestion].correctAnswer) {
      score++;
      scoreElement.textContent = score;
  }
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
      displayQuestion();
  } else {
      endGame();
  }
}

function endGame() {
  questionElement.textContent = "Quiz Over!";
  choicesElement.innerHTML = "";
  nextButton.style.display = "none";
}

nextButton.addEventListener("click", nextQuestion);

displayQuestion();

