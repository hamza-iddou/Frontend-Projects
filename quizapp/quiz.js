
const questions = [
    {
        questions: "whats the birthday of hamza?",
        answers:[
            {text :"20-04-2004", correct: false},
            {text :"20-08-2004", correct: false},
            {text :"18-04-2004", correct: true},
            {text :"18-08-2004", correct: false}
        ]
    },
    {
        questions: "whats is the most important thnig in hamza's life?",
        answers:[
            {text :"Gym", correct: false},
            {text :"Ps5", correct: false},
            {text :"Phone", correct: false},
            {text :"Laptop/Pc", correct: true}
        ]
    },
    {
        questions: "what is the name of the mother of hamzaiddou?",
        answers:[
            {text :"khadija", correct: false},
            {text :"jmiaa", correct: false},
            {text :"aicha", correct: false},
            {text :"Fatima", correct: true}
        ]
    },
    {
        questions: "if u had girl with him what the name he will chose for her? ",
        answers:[
            {text :"fatima", correct: false},
            {text :"ritaj", correct: true},
            {text :"laila", correct: false},
            {text :"hiba", correct: false}
        ]
    },
    {
        questions: "what he will choose?",
        answers:[
            {text :"Msamen", correct: true},
            {text :"bghrir", correct: false},
            {text :"l7archa", correct: false},
            {text :"batbot", correct: false}
        ]
    },
    {
        questions: "whats his favorite footballteam?",
        answers:[
            {text :"Real Madrid", correct: false},
            {text :"PSG", correct: false},
            {text :"Fc Barcelone", correct: true},
            {text :"Raja", correct: false}
        ]
    },
    {
        questions: "What is the most thing he dislike?",
        answers:[
            {text :"Homosexual people", correct: false},
            {text :"People With Low IQ", correct: true},
            {text :"Rca Fans", correct: false},
            {text :"Gaming", correct: false}
        ]
    },
    {
        questions: "What Hamza he will choose \n 1. Buy expensive Car like Mercedes or luxury car idon't know \n2.Travel to aContry as visit? ",
        answers:[
            {text :"1", correct: false},
            {text :"2", correct: true}
        ]
    },
    {
        questions: "he like Dogs or Cats",
        answers:[
            {text :"Cats", correct: true},
            {text :"Dogs", correct: false},
            {text :"In General he like animals", correct: true},
            {text :"none of them", correct: false}
        ]
    },
    {
        questions: "What is the most fav anime for him ? ",
        answers:[
            {text :"Demonslayer", correct: false},
            {text :"Naruto", correct: true},
            {text :"GreatTeacher", correct: false},
            {text :"Attack on titan", correct: false}
        ]
    },
    {
        questions: "Do you think That iLove you ? ",
        answers:[
            {text :"Yes", correct: true},
            {text :"No", correct: false},
        ]
    },
];

const questionsElement = document.getElementById("question");
const answers = document.getElementById("answer-buttons");
const next = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    next.innerHTML = "Next";
    next.style.display = "none";
    showQuestion();
}

function showQuestion() {
    restState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionsElement.innerHTML = questionNo + ". " + currentQuestion.questions;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answers.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function restState() {
    next.style.display = "none";
    while (answers.firstChild) {
        answers.removeChild(answers.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answers.children).forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
    });

    next.style.display = "block";
}

function showScore() {
    restState();
    questionsElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    next.innerHTML = "Restart Quiz";
    next.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

next.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
