let currentQuestion = 0;
let completed = 0;
let waiting = 0;

const questions = section1;

loadQuestion();

function loadQuestion(){

document.querySelector(".questionNo").innerHTML =
"கேள்வி " + (currentQuestion+1) + " / 10";

document.getElementById("question").innerHTML =
questions[currentQuestion].question;

let optionHTML="";

questions[currentQuestion].choices.forEach((choice,index)=>{

optionHTML+=`
<div class="option">
<label>
<input type="radio"
name="answer"
value="${index}">
${choice}
</label>
</div>
`;

});

document.getElementById("options").innerHTML=optionHTML;

document.getElementById("reference").innerHTML=
"📖 " + questions[currentQuestion].reference;

updateProgress();

}

function updateProgress(){

let percent=((currentQuestion)/10)*100;

document.getElementById("bar").style.width=percent+"%";

}

document.querySelector(".wait").onclick=function(){

waiting++;

nextQuestion();

}

document.querySelector(".submit").onclick=function(){

let ans=document.querySelector("input[name='answer']:checked");

if(!ans){

alert("முதலில் ஒரு பதிலைத் தேர்வு செய்யுங்கள்");

return;

}

completed++;

nextQuestion();

}

function nextQuestion(){

currentQuestion++;

if(currentQuestion<10){

loadQuestion();

}

else{

alert("🎉 பிரிவு 1 முடிந்தது");

window.location="dashboard.html";

}

}
