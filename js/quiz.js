let currentQuestion = 0;

function loadQuestion() {

    const q = questions[currentQuestion];

    document.getElementById("question").innerHTML = q.question;

    let html = "";

    q.choices.forEach((choice, index) => {

        html += `
        <label class="option">
            <input type="radio" name="answer" value="${index}">
            ${choice}
        </label>
        `;

    });

    document.getElementById("options").innerHTML = html;

}

loadQuestion();

document.querySelector(".submit").addEventListener("click", function () {

    const ans = document.querySelector('input[name="answer"]:checked');

    if (!ans) {
        alert("முதலில் ஒரு பதிலை தேர்வு செய்யுங்கள்");
        return;
    }

    currentQuestion++;

    if (currentQuestion >= questions.length) {

        alert("🎉 அனைத்து கேள்விகளும் முடிந்தது!");

        window.location.href = "result.html";

        return;
    }

    loadQuestion();

});

document.querySelector(".wait").addEventListener("click", function () {

    currentQuestion++;

    if (currentQuestion >= questions.length) {

        alert("🎉 அனைத்து கேள்விகளும் முடிந்தது!");

        window.location.href = "result.html";

        return;
    }

    loadQuestion();

});
