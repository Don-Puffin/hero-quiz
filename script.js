const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const playAgainButton = document.getElementById('playagain-btn')
const questionContainerElement = document.getElementById
('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const questionBox = document.getElementById('question-box')
const crashCard = document.getElementById('crash')
const cocoCard = document.getElementById('coco')
const crunchCard = document.getElementById('crunch')
const akuakuCard = document.getElementById('akuaku')
// const ntropyCard = document.getElementById('ntropy')
// const dingodileCard = document.getElementById('dingodile')
// const nbrioCard = document.getElementById('nbrio')
// const pinstripeCard = document.getElementById('pinstripe')
// const ukaukaCard = document.getElementById('ukauka')
// const ripperrooCard = document.getElementById('ripperroo')
// 0 - the original value of all of these counts:
let crashCount = 0
let cocoCount = 0
let crunchCount = 0
let akuakuCount = 0





let shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', startGame)
playAgainButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})





function startGame(){
    console.log('Started')
    startButton.classList.add('hidden')
    shuffledQuestions = question.sort(() => Math.random() - 0.5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hidden')
     setNextQuestion()
    }

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
   
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        button.classList.add('bg-blue-500')
        button.classList.add('p-4')
        button.classList.add('rounded-lg')
        button.classList.add('border')
        button.classList.add('border-black')
        button.classList.add('border-4')
        button.classList.add('font-bold')
        button.classList.add('items-center')
        button.classList.add('shadow-2xl')
        button.classList.add('md:h-20')
       
        button.classList.add('md:w-60')

        button.classList.add('bg-gradient-to-b')
        button.classList.add('from-yellow-500')
        button.classList.add('to-red-500')
        button.classList.add('text-center')
        questionElement.classList.add('font-bold')
        questionElement.classList.add('text-lg')






        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        button.name = index
        answerButtonsElement.appendChild(button)
        
    })
}
 
 

function resetState() {
    // clearStatusClass(document.body)
    nextButton.classList.add('hidden')
    while (answerButtonsElement.firstChild) 
    answerButtonsElement.removeChild
    (answerButtonsElement.firstChild)
}

function selectAnswer(e) { console.log(e)
    
    switch (e.target.name) {
        case '0':
            crashCount++
            break;
        case '1':
            cocoCount++
            break;
        case '2':
            crunchCount++
            break;
        case '3':
            akuakuCount++
            break;
    } 

    // let Math.max(cortexCount, nGinCount, tinyCount, oxideCount)
    // console.log(Math.max)
    // // cortexCard.classList.remove('hidden')

    console.log(Math.max(crashCount, cocoCount, crunchCount, akuakuCount))

    function displayPersonality() {
        if (crashCount >= 2) {
            crashCard.classList.remove('hidden')
        }
        if (cocoCount >=2) {
            cocoCard.classList.remove('hidden')
        }
        if (crunchCount >=2) {
            crunchCard.classList.remove('hidden')
        }
        if (akuakuCount >=2) {
            akuakuCard.classList.remove('hidden')
        }
    }
    


    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        currentQuestionIndex++
    setNextQuestion()
    } else {
        startButton.innerText ="Restart"
        startButton.classList.remove('hidden')
        questionBox.classList.add('hidden')
        displayPersonality()
        
        
    } 
    
}



const question = [
    {
        question: 'What is your favourite type of food?',
        answers: [
            {text: 'Fruit'},
            {text: 'Sweets'},
            {text: 'Meat'},
            {text: 'Vegetables'}
        ]
    },
    {
        question: 'When you meet your friends, which one are you?',
        answers: [
            {text: 'The crazy one'},
            {text: 'The smart one'},
            {text: 'The strong one'},
            {text: 'The sensible one'}
        ]
    },
    {
        question: 'Do you get along with your siblings?',
        answers: [
            {text: 'Always!'},
            {text: 'Sometimes'},
            {text: "I don't have any"},
            {text: 'No, we always fight!'}
        ]
    },
    {
        question: "What is your greatest skill?",
        answers: [
            {text: 'Athletics'},
            {text: 'Intelligence'},
            {text: 'Weight-lifting'},
            {text: 'Leadership'}
        ]
    },
    
    {
        question: "My idea of a good time is...",
        answers: [
            {text: 'Sleeping'},
            {text: 'Creating something'},
            {text: 'Working out'},
            {text: 'Solving puzzles'}
        ]
    }
]

