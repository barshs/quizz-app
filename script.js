const QuizData = [
    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d1",
    },
    {
        question: "Who is the President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b1",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a1",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b1",
    },
];
const questionEl = document.getElementById("question");
const quizEl = document.getElementById("quiz");
const answerE = document.querySelectorAll(".answer");
const aE= document.getElementById("a");
const bE = document.getElementById("b");
const cE = document.getElementById("c");
const dE = document.getElementById("d");
const submitE=document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
let answer = undefined;
loadQuiz();

function loadQuiz() {

    const currentQuizData = QuizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
   aE.innerText = currentQuizData.a;
    bE.innerHTML = currentQuizData.b;
    cE.innerHTML = currentQuizData.c;
    dE.innerHTML = currentQuizData.d;
        
}
function getselect()
{
    
answerE.forEach((answerel) => {
    if(answerel.checked)
    {
        answer=answerel.id;
    }
    
});
console.log(answer);
    return answer;
}
function deselect()
{
    answerE.forEach((answerel) => {
        answerel.checked=false;
        
    });
}

 submitE.addEventListener("click",()=>
 {
    const ans=getselect();
    if(ans)
    {
        if(ans==QuizData[currentQuiz].correct)
        score++;
    }
    currentQuiz++;
   
    if(currentQuiz<QuizData.length)
    { deselect();
        loadQuiz();
    
     if(currentQuiz==(QuizData.length-1))
    {  submitE.innerHTML="SUBMIT";
        
    }}
    else
    {
      quizEl.innerHTML=`<h2>YOU SCORE IS ${score} OUT OF ${QuizData.length}</h2>
      <button onclick="location.reload()">Reload</button>`;
      quizEl.style.fontWeight="bold";
      quizEl.style.padding="10px"
      quizEl.style.textAlign="center";
    }
 })

 
    
 