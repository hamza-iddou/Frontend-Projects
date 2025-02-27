const questions = [
    {
        question: "Who was the first President of the United States?",  // changed 'questions' to 'question'
        answers:[
            {text: "Abraham Lincoln", correct: false},
            {text: "Thomas Jefferson", correct: false},
            {text: "George Washington", correct: true},
            {text: "Franklin D. Roosevelt", correct: false}
        ]
    },
    {
        question: "What is the capital city of Japan?",  // changed 'questions' to 'question'
        answers:[
            {text: "Osaka", correct: false},
            {text: "Kyoto", correct: false},
            {text: "Hiroshima", correct: false},
            {text: "Tokyo", correct: true}
        ]
    },
    {
        question: "Who wrote the play “Romeo and Juliet”?",  // changed 'questions' to 'question'
        answers:[
            {text: "Jane Austen", correct: false},
            {text: "Mark Twain", correct: false},
            {text: "Charles Dickens", correct: false},
            {text: "William Shakespeare", correct: true}
        ]
    },
    {
        question: "What is the chemical symbol for water?",  // changed 'questions' to 'question'
        answers:[
            {text: "CO2", correct: false},
            {text: "H2O", correct: true},
            {text: "O2", correct: false},
            {text: "H2", correct: false}
        ]
    },
    {
        question: "What is the largest planet in our solar system?",  // changed 'questions' to 'question'
        answers:[
            {text: "Jupiter", correct: true},
            {text: "Earth", correct: false},
            {text: "Saturn", correct: false},
            {text: "Neptune", correct: false}
        ]
    },
    {
        question: "What gas do plants absorb from the air for photosynthesis?",  // changed 'questions' to 'question'
        answers:[
            {text: "Oxygen", correct: false},
            {text: "Nitrogen", correct: false},
            {text: "Carbon Dioxide", correct: true},
            {text: "Hydrogen", correct: false}
        ]
    },
    {
        question: "What is the main programming language used for web development?",  // changed 'questions' to 'question'
        answers:[
            {text: "C++", correct: false},
            {text: "HTML", correct: true},
            {text: "Java", correct: false},
            {text: "Python", correct: false}
        ]
    },
    {
        question: "Which company developed the iPhone?",  // changed 'questions' to 'question'
        answers:[
            {text: "Apple", correct: true},
            {text: "Samsung", correct: false},
            {text: "Google", correct: false},
            {text: "Microsoft", correct: false}
        ]
    },
    {
        question: "What does '/HTTP/' stand for in web development?",  // changed 'questions' to 'question'
        answers:[
            {text: "Hyper Transfer Text Protocol", correct: false},
            {text: "HyperText Transfer Protocol", correct: true},
            {text: "Hyper Terminal Text Protocol", correct: false},
            {text: "Hyper Transport Transfer Protocol", correct: false}
        ]
    },
    {
        question: "In which year did World War II end?",  // changed 'questions' to 'question'
        answers:[
            {text: "1940", correct: false},
            {text: "1950", correct: false},
            {text: "1945", correct: true},
            {text: "1939", correct: false}
        ]
    },
    {
        question: "Who was the famous queen of Egypt?",  // changed 'questions' to 'question'
        answers:[
            {text: "Cleopatra", correct: true},
            {text: "Elizabeth I", correct: false},
            {text: "Victoria", correct: false},
            {text: "Catherine", correct: false}
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
    resetState();  // corrected function name from restState to resetState
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionsElement.innerHTML = questionNo + ". " + currentQuestion.question;  // corrected property name from 'questions' to 'question'

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

function resetState() {  // corrected function name from restState to resetState
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
    resetState();  // corrected function name from restState to resetState
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
