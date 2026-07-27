let currentQuestion = 0;
let completed = 0;
let waiting = 0;
let answers = [];

loadQuestion();

function loadQuestion() {

    const q = questions[currentQuestion];

    if (!q) {
        alert("Question not found!");
        return;
    }

    document.querySelector(".questionNo").innerHTML =
        "கேள்வி " + (currentQuestion + 1) + " / " + questions.length;

    document.getElementById("question").innerHTML = q.question;

    let html = "";

    q.choices.forEach((choice, index) => {

        html += `
        <label class="option">
            <input type="radio"
                   name="answer"
                   value="${index}">
            ${choice}
        </label>
        `;

    });

    document.getElementById("options").innerHTML = html;

    updateStatus();

}

document.querySelector(".submit").addEventListener("click", function () {

    const ans = document.querySelector('input[name="answer"]:checked');

    if (!ans) {
        alert("முதலில் ஒரு பதிலை தேர்வு செய்யுங்கள்.");
        return;
    }

    answers[currentQuestion] = Number(ans.value);

    completed++;

    nextQuestion();

});

document.querySelector(".wait").addEventListener("click", function () {

    answers[currentQuestion] = "WAIT";

    waiting++;

    nextQuestion();

});

function nextQuestion() {

    currentQuestion++;

    if (currentQuestion >= questions.length) {

        localStorage.setItem("answers", JSON.stringify(answers));

        alert("🎉 பிரிவு 1 வெற்றிகரமாக முடிந்தது!");

        window.location.href = "result.html";

        return;
    }

    loadQuestion();

}

function updateStatus() {

    const remaining = questions.length - (completed + waiting);

    document.querySelector(".status").innerHTML = `
        <div>✅ Completed : ${completed}</div>
        <div>🟡 Waiting : ${waiting}</div>
        <div>⚪ Remaining : ${remaining}</div>
    `;

    const percent = ((completed + waiting) / questions.length) * 100;

    document.getElementById("bar").style.width = percent + "%";

}
