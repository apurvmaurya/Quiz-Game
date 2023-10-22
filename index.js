const slide = document.querySelector(".slide");
const next = document.querySelector(".next");
const start = document.querySelector(".start");
const startBtn = document.querySelector(".startBtn");
let current = 0;

const questions = [
  {
    que: "2+2",
    options: [2, 4],
    ans: 1,
  },
  {
    que: "2+7",
    options: [8, 9],
    ans: 1,
  },
  {
    que: "11%5",
    options: [1, 2],
    ans: 0,
  },
  {
    que: "33/11",
    options: [3, 5],
    ans: 0,
  },
  {
    que: "10*5",
    options: [50, 55],
    ans: 0,
  },
];

const loadQue = function (question) {
  current++;
  const html = `<div class="que">
    <p>${question.que}</p>
  </div>
  <div class="options">
    <div class="choices" data-opt = "0"><p data-opt = 0>${question.options[0]}</p></div>
    <div class="choices" data-opt = "1"><p data-opt = 1>${question.options[1]}</p></div>
  </div>`;
  slide.innerHTML = html;
  document.querySelectorAll(".choices").forEach((choice) => {
    choice.addEventListener("click", function (e) {
      if (e.target.closest(".choices").dataset.opt == question.ans)
        e.target.closest(".choices").style.backgroundColor = "green";
      else e.target.closest(".choices").style.backgroundColor = "red";
    });
  });
};

const handleNext = function () {
  if (current === questions.length) {
    slide.innerHTML = `<h1>Thanks for Playing...</h1>`;
    next.innerHTML = "";
    return;
  }
  loadQue(questions[current]);
};

startBtn.addEventListener("click", function () {
  start.innerHTML = "";
  next.innerHTML = `<button class="nextBtn" onClick="handleNext()">Next</button> `;
  loadQue(questions[0]);
});
