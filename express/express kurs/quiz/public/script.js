const question = document.querySelector("#question");
const gameBoard = document.querySelector("#game-board");
const h2 = document.querySelector("h2");
function fillQuestionElements(data) {
  if (data.winner === true) {
    gameBoard.style.display = "none";
    h2.innerText = "Wygrana!";
    return;
  }
  if (data.loser === true) {
    gameBoard.style.display = "none";
    h2.innerText = "Przegrałeś, spróbuj ponownie.";
    return;
  }
  question.innerText = data.question;
  //pętla for in zwraca string
  for (const i in data.answers) {
    const answerEl = document.querySelector(`#answer${Number(i) + 1}`);
    answerEl.innerText = data.answers[i];
  }
}

function showNextQuestion() {
  fetch("/question", {
    method: "GET",
  })
    .then((data) => data.json())
    .then((data) => fillQuestionElements(data));
}

showNextQuestion();

const goodAnswersSpan = document.querySelector("#good_answers");

function handleAnswerFeedback(data) {
  goodAnswersSpan.innerText = data.goodAnswers;
  showNextQuestion();
}

function sendAnswer(answerIndex) {
  fetch(`/answer/${answerIndex}`, {
    method: "POST",
  })
    .then((data) => data.json())
    .then((data) => handleAnswerFeedback(data));
}

const buttons = document.querySelectorAll(".answerBtn");
for (const button of buttons) {
  button.addEventListener("click", (event) => {
    const answerIndex = event.target.dataset.answer;
    sendAnswer(answerIndex);
  });
}

const tipDiv = document.querySelector("#tip");

function handleFriendsAnswer(data) {
  tipDiv.innerText = data.text;
}

function callFriend() {
  fetch("/help/friend", {
    method: "GET",
  })
    .then((data) => data.json())
    .then((data) => handleFriendsAnswer(data));
}
document.querySelector("#callFriend").addEventListener("click", callFriend);

function handleHalfOnHalfAnswer(data) {
  if (typeof data.text === "string") {
    tipDiv.innerText = data.text;
  } else {
    for (const button of buttons) {
      if (data.answersToRemove.indexOf(button.innerText) > -1) {
        button.innerText = "";
      }
    }
  }
}

function halfOnHalf() {
  fetch("/help/half", {
    method: "GET",
  })
    .then((data) => data.json())
    .then((data) => handleHalfOnHalfAnswer(data));
}
document.querySelector("#halfHalf").addEventListener("click", halfOnHalf);

function handleQuestionCrowdAnswer(data) {
  if (typeof data.text === "string") {
    tipDiv.innerText = data.text;
  } else {
    data.chart.forEach((percent, index) => {
      buttons[index].innerText =
        buttons[index].innerText + ": " + percent + "%";
    });
  }
}

function questionCrowd() {
  fetch("/help/crowd", {
    method: "GET",
  })
    .then((data) => data.json())
    .then((data) => handleQuestionCrowdAnswer(data));
}
document
  .querySelector("#questionCrowd")
  .addEventListener("click", questionCrowd);
