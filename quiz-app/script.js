const quizData = [
  {
    quetion: "Quetion number 1?",
    options: [
      {
        1: "Option numbner 1",
        2: "Option numbner 2",
        3: "Option numbner 3",
        4: "Option numbner 4",
      },
    ],
    correctAnswer: 1,
  },
  {
    quetion: "Quetion number 2?",
    options: [
      {
        1: "Option numbner 1",
        2: "Option numbner 2",
        3: "Option numbner 3",
        4: "Option numbner 4",
      },
    ],
    correctAnswer: 4,
  },
];

const currentQuetion = 1;

function loadQuiz() {
  const currentQuiz = quizData[currentQuetion];
  console.log(currentQuiz);
}
