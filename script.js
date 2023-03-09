
const quizQuestions = [
  {
      question: "The total coloumn in web page are?",
      answers: {
          a: "12",
          b: "11",
          c: "9",
          d: "8"
      },
      correctAnswer: "12"
  },
  {
      question: "What is full form of HTML?",
      answers: {
          a: "Hyper Text Markup Language",
          b: "Hyper Hypwe language",
          c: "Higher Text Markup Language",
          d: "None"
      },
      correctAnswer: "a"
  },
  {
      question: "Full Form of CSS?",
      answers: {
          a: "Cascading Style Sheet",
          b: "Conciding Style Sheet",
          c: "Style Sheet",
          d: "none"
      },
      correctAnswer: "a"
  }
];

const quizContainer = document.querySelector(".quiz-container");
const questionElement = document.querySelector("#question");
const answerElements = document.querySelectorAll(".Answer");
const answerTextElements = document.querySelectorAll("label[for]");
const submitButton = document.querySelector("#Submit");

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
  const currentQuizQuestion = quizQuestions[currentQuestion];
  questionElement.innerText = currentQuizQuestion.question;
  answerTextElements.forEach((answerTextElement, index) => {
      const answerLetter = answerTextElement.getAttribute("for").toLowerCase();
      answerTextElement.innerText = currentQuizQuestion.answers[answerLetter];
      answerElements[index].checked = false;
  });
}

function checkAnswer() {
  const currentQuizQuestion = quizQuestions[currentQuestion];
  answerElements.forEach(answerElement => {
      if (answerElement.checked) {
          if (answerElement.getAttribute("id").toLowerCase() === currentQuizQuestion.correctAnswer) {
              score++;
          }
          currentQuestion++;
          if (currentQuestion >= quizQuestions.length) {
              endQuiz();
          } else {
              displayQuestion();
          }
      }
  });
}


function endQuiz() {
  quizContainer.innerHTML = `<h2>Your final score is ${score} out of ${quizQuestions.length}</h2>`;
}

submitButton.addEventListener("click", checkAnswer);

displayQuestion();


