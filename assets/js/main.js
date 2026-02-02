const button =  document.querySelectorAll('.choice')
const placeholderUser = document.querySelector('#placeholderUser')
const placeholderAI = document.querySelector('#placeholderAI    ')

const rules = {
    rock: {beats: 'paper'},
    paper: {beats: 'scissors'},
    scissors: {beats: 'rock'},
    result: {
        win: 'winner',
        lose: 'loser', 
        equality: 'equality'
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

button.forEach(button => {
    button.addEventListener('click', () => {
        const choice = button.dataset.choice
        run(choice)
    })
})

function getAIChoice() {
    let action = getRandomInt(3)
    switch (action) {
        case 0:
            action = 'rock'
            break;
        case 1:
            action = 'paper'
            break;
        case 2:
            action = 'scissors'
            break;
        default:
            break;
    }
    return action
}

function getResult(choiceUser) {
    const botChoice = getAIChoice()
    if (choiceUser === botChoice) {
        return rules.result.win
    } else if (rules[choiceUser].beats === botChoice) {  
        return rules.result.lose
    }  else {
        return rules.result.equality
    }
}

function displayResult(result) {
    const imgUser = placeholderUser.querySelector('img')
    const imgAI = placeholderAI.querySelector('img')

    const paraUser = placeholderUser.querySelector('p')
    const paraAI = placeholderAI.querySelector('p')

    paraUser.className = 'placeholder-p'
    paraAI.className = 'placeholder-p'

    if (imgAI && imgUser) {
        imgAI.remove()
        imgUser.remove()
    }


    if (result === 'winner') {
        paraUser.textContent = 'Winner'
        paraUser.classList.add('winner')

        paraAI.textContent = 'Loser'
        paraAI.classList.add('loser')

    } else if (result === 'loser') {
        paraUser.textContent = 'Loser'
        paraUser.classList.add('loser')

        paraAI.textContent = 'Winner'
        paraAI.classList.add('winner')
    } else {
        paraUser.textContent = 'Equality'
        paraUser.classList.add('equality')

        paraAI.textContent = 'Equality'
        paraAI.classList.add('equality')
    }
}

function run(choiceUser) {
    const result = getResult(choiceUser)
    displayResult(result)
}
