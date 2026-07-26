import { calculateScore } from "./score.js";

let currentQuestion = 0;
let completed = 0;
let waiting = 0;

const questions = section1;
const answers = [];

loadQuestion();

function loadQuestion() {

    let q = questions[currentQuestion];

    document.querySelector(".questionNo").innerHTML =
        "கேள்வி " + (currentQuestion + 1) + " / 10";

    document.getElementById("question").innerHTML = q.question;

    let html = "";

    q.choices.forEach((choice, index) => {

        html += `
        <div class="option">
            <label>
            <input type="radio" name="answer" value="${index}">
            ${choice}
            </label>
        </div>`;
    });

    document.getElementById("options").innerHTML = html;

    document.getElementById("reference").innerHTML =
        "📖 " + q.reference;

    updateStatus();

}

document.querySelector(".submit").onclick = function () {

    let ans = document.querySelector("input[name='answer']:checked");

    if (!ans) {

        alert("ஒரு பதிலைத் தேர்வு செய்யுங்கள்");
        return;

    }

    answers[currentQuestion] = Number(ans.value);

    completed++;

    nextQuestion();

    saveAnswer(
quizId,
"section1",
currentQuestion+1,
answers[currentQuestion],
"Submitted"
);

}

document.querySelector(".wait").onclick = function () {

    answers[currentQuestion] = "WAIT";

    waiting++;

    nextQuestion();
    
saveAnswer(
quizId,
"section1",
currentQuestion+1,
"WAIT",
"Waiting"
);
}

function nextQuestion() {

    currentQuestion++;

    if (currentQuestion == 10) {

        alert("🎉 பிரிவு 1 முடிந்தது");

        window.location = "dashboard.html";

        return;

    }

    loadQuestion();

}

function updateStatus() {

    let remain = 10 - (completed + waiting);

    document.querySelector(".status").innerHTML = `
    <div>✅ Completed : ${completed}</div>
    <div>🟡 Waiting : ${waiting}</div>
    <div>⚪ Remaining : ${remain}</div>`;

    document.getElementById("bar").style.width =
        ((completed + waiting) / 10 * 100) + "%";

}
