const questions=[
    {
        question:"which is the markup language?",
        ans:[
                {text:"css",correct:"false"},
                {text:"html",correct:"true"},
                {text:"javascript",correct:"false"},
                {text:"node.js",correct:"false"},    
        ]
    },
    {
        question:"which is the database language?",
        ans:[
                {text:"SQL",correct:"true"},
                {text:"c++",correct:"false"},
                {text:"javascript",correct:"false"},
                {text:"node.js",correct:"false"},    
        ]
    },
    {
        question:"CSS stand for?",
        ans:[
                {text:"css",correct:"false"},
                {text:"cascading style sheet",correct:"true"},
                {text:"cascading sheet style",correct:"false"},
                {text:"computer style sheet",correct:"false"},    
        ]
    },
    {
        question:"which is the block element?",
        ans:[
                {text:"span",correct:"false"},
                {text:"table",correct:"false"},
                {text:"div",correct:"true"},
                {text:"li",correct:"false"},    
        ]
    },
    {
        question:"javascript is the backend language or fronted..",
        ans:[
                {text:"fronted",correct:"false"},
                {text:"both ",correct:"true"},
                {text:"backend",correct:"false"},
                {text:"neither backend or fronted",correct:"false"},    
        ]
    },
    {
        question:"html is the....",
        ans:[
                {text:"structure ",correct:"true"},
                {text:"html",correct:"false"},
                {text:"javascript",correct:"false"},
                {text:"node.js",correct:"false"},    
        ]
    },
    {
        question:"who is the father of c?",
        ans:[
                {text:"denis richie",correct:"true"},
                {text:"dennis doe",correct:"false"},
                {text:"newton",correct:"false"},
                {text:"denial smith",correct:"false"},    
        ]
    },
    {
        question:"js stands for",
        ans:[
                {text:"css",correct:"false"},
                {text:"html",correct:"false"},
                {text:"javascript",correct:"true"},
                {text:"node.js",correct:"false"},    
        ]
    },
    {
        question:"SQL stands for.....",
        ans:[
                {text:"structure query link",correct:"false"},
                {text:"structure queue language",correct:"false"},
                {text:"javascript",correct:"false"},
                {text:"structured query language",correct:"true"},    
        ]
    }
];

let question=document.querySelector("#question");
let ansopt=document.getElementById("ansopt");
let nextques=document.querySelector(".next-ques");

let score=0;
let currquesno=0;
function Startquiz(){
    score=0;
    currquesno=0;
    currquesno.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currques=  questions[currquesno];
    let questionNo=  currquesno+1;
    question.innerHTML = questionNo +". "+ currques.question;

    currques.ans.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        ansopt.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectans);
    });
}

 function resetState(){
    nextques.style.display="none";
    while(ansopt.firstChild){
        ansopt.removeChild(ansopt.firstChild);
    }
 }

 function selectans(e){
    const selectedbtn=e.target;
    const iscorrect=selectedbtn.dataset.correct === "true";
    if(iscorrect){
        selectedbtn.classList.add("correct");
        score++;
    }
    else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(ansopt.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextques.style.display="block";
 }
 nextques.addEventListener("click",()=>{
    if(currquesno<questions.length){
handlednextQues();
    }
    else{
        Startquiz();
    }
 })

function showscore(){
    resetState();
    question.innerHTML=`you scored ${score} out of ${questions.length}`;
    nextques.innerHTML="Play Again";
    nextques.style.display="block";
}

 function handlednextQues(){
    currquesno++;
    if(currquesno<questions.length){
        showQuestion();
    }
else{
    showscore();
} 
}

Startquiz();