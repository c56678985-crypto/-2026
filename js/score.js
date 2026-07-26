export function calculateScore(questions, answers){

let score = 0;

questions.forEach((q,index)=>{

if(answers[index]===undefined){

return;

}

if(answers[index]=="WAIT"){

return;

}

if(answers[index]===q.answer){

score += 2;

}else{

score -= 0.5;

}

});

return score;

}
