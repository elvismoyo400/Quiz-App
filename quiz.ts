interface Question {
    question: string;
    options: string[];
    answer: string;
}

const questions: Question[] = [
    {
        question: "Which Git command creates a local copy of a remote repository?",
        options: ["git init", "git clone", "git commit", "git merge"],
        answer: "git clone"
    },
    {
        question: "What does 'git commit' do?",
        options: [
            "Uploads changes to GitHub",
            "Saves a snapshot of staged changes to the local repository",
            "Deletes the last change",
            "Creates a new remote"
        ],
        answer: "Saves a snapshot of staged changes to the local repository"
    },
    {
        question: "What is the main purpose of a Git branch?",
        options: [
            "To compress the repository",
            "To back up the project to the cloud",
            "To work on a feature or fix in isolation",
            "To hide commit history"
        ],
        answer: "To work on a feature or fix in isolation"
    },

    {
        question: "Which HTML element is most appropriate for the main navigation links of a page?",
        options: ["<div>", "<nav>", "<span>", "<section>"],
        answer: "<nav>"
    },
    {
        question: "In CSS, what does 'display: flex' do?",
        options: [
            "Hides the element",
            "Makes text bold",
            "Turns the element into a flexible layout container",
            "Adds an animation"
        ],
        answer: "Turns the element into a flexible layout container"
    },
    {
        question: "What is the purpose of a CSS media query?",
        options: [
            "To play audio and video",
            "To apply styles based on conditions such as screen width",
            "To import images",
            "To validate HTML"
        ],
        answer: "To apply styles based on conditions such as screen width"
    },

    {
        question: "Which keyword declares a variable that cannot be reassigned in JavaScript?",
        options: ["var", "let", "static", "const"],
        answer: "const"
    },
    {
        question: "What does Array.prototype.map() return?",
        options: [
            "A new array with the results of calling a function on every element",
            "The first matching element",
            "The original array, modified in place",
            "A single combined value"
        ],
        answer: "A new array with the results of calling a function on every element"
    },
    {
        question: "What is a Promise in JavaScript?",
        options: [
            "A guarantee that code has no bugs",
            "An object representing the eventual result of an asynchronous operation",
            "A type of loop",
            "A way to declare constants"
        ],
        answer: "An object representing the eventual result of an asynchronous operation"
    },
    {
        question: "In TypeScript, what is an interface used for?",
        options: [
            "To describe the shape of an object",
            "To connect to a database",
            "To style components",
            "To run code faster"
        ],
        answer: "To describe the shape of an object"
    },

    {
        question: "Which Python structure stores unique, unordered items?",
        options: ["List", "Tuple", "Dictionary", "Set"],
        answer: "Set"
    },
    {
        question: "What does a Python dictionary store?",
        options: [
            "Only numbers",
            "Key-value pairs",
            "Only strings in order",
            "Functions only"
        ],
        answer: "Key-value pairs"
    },
    {
        question: "Which command creates a new Django project?",
        options: [
            "python manage.py runserver",
            "django-admin startproject mysite",
            "pip install django",
            "python manage.py migrate"
        ],
        answer: "django-admin startproject mysite"
    },
    {
        question: "In Django, what is the role of a view?",
        options: [
            "To define database tables",
            "To store static files",
            "To handle a request and return a response",
            "To manage Python packages"
        ],
        answer: "To handle a request and return a response"
    },

    {
        question: "Which SQL statement retrieves data from a table?",
        options: ["INSERT", "SELECT", "UPDATE", "DROP"],
        answer: "SELECT"
    },
    {
        question: "What is a primary key in a database table?",
        options: [
            "A column that uniquely identifies each row",
            "A password for the database",
            "The first column alphabetically",
            "A backup of the table"
        ],
        answer: "A column that uniquely identifies each row"
    },
    {
        question: "Which HTTP method is typically used to create a new resource in a REST API?",
        options: ["GET", "DELETE", "POST", "HEAD"],
        answer: "POST"
    },
    {
        question: "What does the HTTP status code 404 mean?",
        options: [
            "Server error",
            "Request succeeded",
            "Unauthorised access",
            "Resource not found"
        ],
        answer: "Resource not found"
    },

    {
        question: "What is the safest way to store user passwords in a database?",
        options: [
            "As plain text",
            "Encrypted with a key stored in the same table",
            "As salted, hashed values",
            "Base64 encoded"
        ],
        answer: "As salted, hashed values"
    },
    {
        question: "What attack does using parameterised queries help prevent?",
        options: ["SQL injection", "Slow page loads", "Broken CSS", "Merge conflicts"],
        answer: "SQL injection"
    },
    {
        question: "What is the main goal of unit testing?",
        options: [
            "To test the whole system at once",
            "To check small pieces of code work correctly in isolation",
            "To design the user interface",
            "To deploy the application"
        ],
        answer: "To check small pieces of code work correctly in isolation"
    },
    {
        question: "In Agile, what is a user story?",
        options: [
            "A short description of a feature from the user's perspective",
            "A bug report",
            "A database schema",
            "A deployment script"
        ],
        answer: "A short description of a feature from the user's perspective"
    },
    {
        question: "What is the purpose of a code review?",
        options: [
            "To assign blame for bugs",
            "To speed up deployment by skipping tests",
            "To improve code quality and share knowledge",
            "To rewrite the project"
        ],
        answer: "To improve code quality and share knowledge"
    },
    {
        question: "What does API stand for?",
        options: [
            "Applied Program Interface",
            "Application Programming Interface",
            "Automated Process Integration",
            "Application Protocol Index"
        ],
        answer: "Application Programming Interface"
    }
];

const QUESTIONS_PER_SESSION = 10;

function getElement<T extends HTMLElement>(selector: string): T {
    const element = document.querySelector<T>(selector);
    if (element === null) {
        throw new Error(`Could not find ${selector} in the HTML.`);
    }
    return element;
}

const homeBox = getElement<HTMLElement>(".home-box");
const quizBox = getElement<HTMLElement>(".quiz-box");
const resultBox = getElement<HTMLElement>(".result-box");
const startButton = getElement<HTMLButtonElement>(".start-quiz-btn");
const questionNumber = getElement<HTMLElement>(".question-number");
const questionText = getElement<HTMLElement>(".question-text");
const optionContainer = getElement<HTMLDivElement>(".option-container");
const previousButton = getElement<HTMLButtonElement>(".previous-button");
const nextButton = getElement<HTMLButtonElement>(".next-button");
const answersIndicator = getElement<HTMLDivElement>(".answers-indicator");
const answerReview = getElement<HTMLDivElement>(".answer-review");
const resultScore = getElement<HTMLElement>(".result-score");
const resultMessage = getElement<HTMLElement>(".result-message");
const restartButton = getElement<HTMLButtonElement>(".restart-button");

let currentQuestionIndex = 0;
let sessionQuestions: Question[] = [];
const selectedAnswers: string[] = [];

function shuffleArray<T>(items: T[]): T[] {
    const shuffledItems = [...items];
    for (let index = shuffledItems.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [shuffledItems[index], shuffledItems[randomIndex]] = [shuffledItems[randomIndex], shuffledItems[index]];
    }
    return shuffledItems;
}

function startQuiz(): void {
    if (questions.length < QUESTIONS_PER_SESSION) {
        throw new Error(`Quiz requires at least ${QUESTIONS_PER_SESSION} questions.`);
    }

    const shuffledQuestions = shuffleArray(questions);
    sessionQuestions = [];

    for (let index = 0; index < QUESTIONS_PER_SESSION; index += 1) {
        const question = shuffledQuestions[index];
        sessionQuestions.push({
            question: question.question,
            options: shuffleArray(question.options),
            answer: question.answer
        });
    }

    currentQuestionIndex = 0;
    selectedAnswers.length = 0;
    homeBox.hidden = true;
    resultBox.hidden = true;
    quizBox.hidden = false;
    showQuestion();
}

function showQuestion(): void {
    const currentQuestion = sessionQuestions[currentQuestionIndex];
    questionNumber.textContent = `Question ${currentQuestionIndex + 1} of ${sessionQuestions.length}`;
    questionText.textContent = currentQuestion.question;
    optionContainer.replaceChildren();
    previousButton.disabled = currentQuestionIndex === 0;
    nextButton.disabled = selectedAnswers[currentQuestionIndex] === undefined;
    nextButton.textContent = currentQuestionIndex === sessionQuestions.length - 1 ? "See Results" : "Next";

    for (const option of currentQuestion.options) {
        const optionButton = document.createElement("button");
        optionButton.type = "button";
        optionButton.className = "option-button";
        optionButton.textContent = option;
        if (selectedAnswers[currentQuestionIndex] === option) {
            optionButton.classList.add("selected");
        }
        optionButton.setAttribute("aria-pressed", String(selectedAnswers[currentQuestionIndex] === option));
        optionButton.addEventListener("click", () => selectAnswer(option));
        optionContainer.append(optionButton);
    }
}

function selectAnswer(selectedOption: string): void {
    selectedAnswers[currentQuestionIndex] = selectedOption;
    const optionButtons = optionContainer.querySelectorAll<HTMLButtonElement>(".option-button");
    for (const button of optionButtons) {
        const isSelected = button.textContent === selectedOption;
        button.classList.toggle("selected", isSelected);
        button.setAttribute("aria-pressed", String(isSelected));
    }
    nextButton.disabled = false;
}

function renderIndicators(): void {
    answersIndicator.replaceChildren();
    for (let index = 0; index < sessionQuestions.length; index += 1) {
        const isCorrect = selectedAnswers[index] === sessionQuestions[index].answer;
        const indicator = document.createElement("span");
        indicator.textContent = isCorrect ? "✓" : "×";
        indicator.classList.add(isCorrect ? "correct" : "incorrect");
        indicator.setAttribute("aria-label", `Question ${index + 1}: ${isCorrect ? "correct" : "incorrect"}`);
        answersIndicator.append(indicator);
    }
}

function showResults(): void {
    quizBox.hidden = true;
    resultBox.hidden = false;
    renderIndicators();
    let score = 0;

    answerReview.replaceChildren();
    for (let index = 0; index < sessionQuestions.length; index += 1) {
        const question = sessionQuestions[index];
        const selectedAnswer = selectedAnswers[index];
        const isCorrect = selectedAnswer === question.answer;
        if (isCorrect) {
            score += 1;
        }

        const reviewItem = document.createElement("div");
        reviewItem.className = "review-item";

        const reviewQuestion = document.createElement("p");
        reviewQuestion.className = "review-question";
        reviewQuestion.textContent = `Question ${index + 1}: ${question.question}`;

        const yourAnswer = document.createElement("p");
        yourAnswer.className = isCorrect ? "review-correct" : "review-incorrect";
        yourAnswer.textContent = `Your answer: ${selectedAnswer}`;

        const correctAnswer = document.createElement("p");
        correctAnswer.textContent = `Correct answer: ${question.answer}`;

        reviewItem.append(reviewQuestion, yourAnswer, correctAnswer);
        answerReview.append(reviewItem);
    }

    resultScore.textContent = `You scored ${score} out of ${sessionQuestions.length}.`;
    const percentage = score / sessionQuestions.length;
    if (percentage === 1) {
        resultMessage.textContent = "Perfect score! Excellent work.";
    } else if (percentage >= 0.7) {
        resultMessage.textContent = "Great job. You know your stuff!";
    } else if (percentage >= 0.4) {
        resultMessage.textContent = "Good effort. A little more practice will help.";
    } else {
        resultMessage.textContent = "Keep practicing—you'll improve with every try.";
    }
}

function goToNextQuestion(): void {
    if (selectedAnswers[currentQuestionIndex] === undefined) {
        return;
    }
    if (currentQuestionIndex === sessionQuestions.length - 1) {
        showResults();
        return;
    }
    currentQuestionIndex += 1;
    showQuestion();
}

function goToPreviousQuestion(): void {
    if (currentQuestionIndex === 0) {
        return;
    }

    currentQuestionIndex -= 1;
    showQuestion();
}

startButton.addEventListener("click", startQuiz);
previousButton.addEventListener("click", goToPreviousQuestion);
nextButton.addEventListener("click", goToNextQuestion);
restartButton.addEventListener("click", startQuiz);