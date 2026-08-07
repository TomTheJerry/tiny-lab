const questions = [
    {
        category: "General Knowledge",
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Berlin"],
        answer: "Paris"
    },
    {
        category: "Science",
        question: "What is H2O commonly known as?",
        choices: ["Oxygen", "Water", "Hydrogen"],
        answer: "Water"
    },
    {
        category: "History",
        question: "Who was the first President of the United States?",
        choices: ["George Washington", "Thomas Jefferson", "Abraham Lincoln"],
        answer: "George Washington"
    },
    {
        category: "Geography",
        question: "Which is the largest ocean on Earth?",
        choices: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean"],
        answer: "Pacific Ocean"
    },
    {
        category: "Literature",
        question: "Who wrote 'Romeo and Juliet'?",
        choices: ["William Shakespeare", "Charles Dickens", "Mark Twain"],
        answer: "William Shakespeare"
    }
];

function getRandomQuestion(questions) {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

function getRandomComputerChoice(choices) {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

const selectedQuestion = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(selectedQuestion.choices);

function getResults(selectedQuestion, computerChoice) {
    if (computerChoice === selectedQuestion.answer) {
        return "The computer's choice is correct!";
    } else {
        return `The computer's choice is wrong. The correct answer is: ${selectedQuestion.answer}`;
    }

}

console.log(selectedQuestion);
console.log(computerChoice);
console.log(getResults(selectedQuestion, computerChoice));