const button =  document.querySelectorAll('.choice')

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

button.forEach(button => {
    button.addEventListener('click', () => {
        console.log('Bouton cliqué')
    })
})