const corectAnswers = [
  "C",
  "C",
  "B",
  "B",
  "C",
  "D",
  "E",
  "D",
  "C",
  "C",
  "C",
  "B",
  "C",
  "C",
  "B",
  "D",
  "E",
  "E",
  "B",
  "C",
  "D",
  "B",
  "D",
  "D",
  "C",
  "D",
  "D",
  "D",
  "B",
  "A",
  "B",
  "A",
  "B",
  "C",
  "D",
  "D",
  "E",
  "C",
  "D",
  "A",
  "B",
  "A",
  "C",
  "B",
  "E",
  "D",
  "B",
  "C",
  "C",
  "A",
  "D",
  "D",
  "B",
  "D",
  "E",
  "A",
  "B",
  "D",
  "B",
  "C",
];
const form = document.querySelector(".quiz-form");
const showGrade = document.querySelector(".result");
const grade = document.querySelector("span");
const time = document.querySelector(".timer");
const body = document.querySelector("body");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
    form.q6.value,
    form.q7.value,
    form.q8.value,
    form.q9.value,
    form.q10.value,
    form.q11.value,
    form.q12.value,
    form.q13.value,
    form.q14.value,
    form.q15.value,
    form.q16.value,
    form.q17.value,
    form.q18.value,
    form.q19.value,
    form.q20.value,
    form.q21.value,
    form.q22.value,
    form.q23.value,
    form.q24.value,
    form.q25.value,
    form.q26.value,
    form.q27.value,
    form.q28.value,
    form.q29.value,
    form.q30.value,
    form.q31.value,
    form.q32.value,
    form.q33.value,
    form.q34.value,
    form.q35.value,
    form.q36.value,
    form.q37.value,
    form.q38.value,
    form.q39.value,
    form.q40.value,
    form.q41.value,
    form.q42.value,
    form.q43.value,
    form.q44.value,
    form.q45.value,
    form.q46.value,
    form.q47.value,
    form.q48.value,
    form.q49.value,
    form.q50.value,
    form.q51.value,
    form.q52.value,
    form.q53.value,
    form.q54.value,
    form.q55.value,
    form.q56.value,
    form.q57.value,
    form.q58.value,
    form.q59.value,
    form.q60.value,
  ];

  //check answers

  userAnswers.forEach((answer, index) => {
    if (answer === corectAnswers[index]) {
      score += 2.5;
    }
  });

  window.scrollTo(0, 0);

  showGrade.classList.remove("d-none");
  grade.innerText = score;
});

let i = 0;

const timer = setInterval(() => {
  i++;
  if (i === 3600) {
    clearInterval(timer);
  }

  time.textContent = `${i} s`;
}, 1000);

if (i === 3600) {
  body.style.display = "none";
  body.innerText = "The time has gone!";
}
//node

// async function fetchQuizTextFile() {
//   try {
//     const response = await fetch("quiz.txt");
//     const data = await response.text();
//     return data;
//   } catch (err) {
//     console.error("Error fetching quiz file:", err);
//   }
// }

// function parseQuizText(text) {
//   const questionPattern = /^(\d+)\./gm;
//   const questionSplit = text
//     .split(questionPattern)
//     .filter((item) => item.trim() !== "");

//   const questions = [];
//   for (let i = 0; i < questionSplit.length; i += 2) {
//     const questionNumber = questionSplit[i].trim();
//     const questionText = questionSplit[i + 1].trim().split("\n");
//     const question = questionText[0];
//     const options = questionText.slice(1);

//     questions.push({
//       number: questionNumber,
//       question: question,
//       options: options,
//     });
//   }

//   return questions;
// }

// function displayQuiz(quiz) {
//   const quizContainer = document.getElementById("quiz-container");

//   quiz.forEach((question) => {
//     const questionElement = document.createElement("div");
//     questionElement.classList.add("question");

//     const questionText = document.createElement("p");
//     questionText.textContent = `${question.number}. ${question.question}`;
//     questionElement.appendChild(questionText);

//     const optionsList = document.createElement("ul");
//     question.options.forEach((option) => {
//       const optionItem = document.createElement("li");
//       optionItem.textContent = option;
//       optionsList.appendChild(optionItem);
//     });

//     questionElement.appendChild(optionsList);
//     quizContainer.appendChild(questionElement);
//   });
// }

// (async function () {
//   const quizText = await fetchQuizTextFile();
//   const quiz = parseQuizText(quizText);
//   displayQuiz(quiz);
// })();
