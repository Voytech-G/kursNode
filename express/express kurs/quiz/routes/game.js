function gameRoutes(app) {
  let goodAnswers = 0;
  let isGameOver = false;
  let callFriendUsed = false;
  let questionCrowdUsed = false;
  let halfUsed = false;

  const questions = [
    {
      question: "Jaki jest najlepszy język programowania na świecie?",
      answers: ["C++", "Pascal", "Java", "Python"],
      correctAnswer: 3,
    },
    {
      question: "Czu lubię podróżować?",
      answers: ["Nie", "Nie wiem", "Tak", "Mozę"],
      correctAnswer: 2,
    },
    {
      question: "Jaki jest najlepszy program na świecie?",
      answers: [
        "Liczenie na pustyni",
        "Życie przyrody",
        "Nasza ziemia",
        "Cejrowski obieżyświat",
      ],
      correctAnswer: 3,
    },
    {
      question: "Co lubisz nosić?",
      answers: ["Kurtke", "Buty", "Czapke", "Rękawice"],
      correctAnswer: 2,
    },
  ];
  app.get("/question", (req, res) => {
    if (goodAnswers === questions.length) {
      res.json({
        winner: true,
      });
    } else if (isGameOver) {
      res.json({
        loser: true,
      });
    } else {
      const nextQuestion = questions[goodAnswers];
      const { question, answers } = nextQuestion;
      res.json({
        question,
        answers,
      });
    }
  });
  app.post("/answer/:index", (req, res) => {
    if (isGameOver) res.json({ loser: true });
    const { index } = req.params;
    const actualQuestion = questions[goodAnswers];
    const isGoodAnswer = actualQuestion.correctAnswer === Number(index);
    if (isGoodAnswer) {
      goodAnswers++;
    } else {
      isGameOver = true;
    }

    res.json({
      correct: isGoodAnswer,
      goodAnswers,
    });
  });
}

module.exports = gameRoutes;
