console.log(questions);
const q = questions[0];

document.getElementById("question").innerHTML = q.question;

let html = "";

q.choices.forEach(choice => {
  html += `<div class="option">${choice}</div>`;
});

document.getElementById("options").innerHTML = html;
