const scorefield = document.querySelector('score') // 1 paso para selecciona el elemenro DOM y guardarlos
scorefield.textContent = 10

const checkButton = document.querySelector('.check')
const againButton = document.querySelector('.again')
const guessField = document.querySelector('.guess')
const highscoreField = document.querySelector('.highscore')
const messageField = document.querySelector('.message')
const numberField = document.querySelector('.number')

/**console.log(
  scorefield,
  checkButton,
  againButton,
  guessField,
  highscoreField,
  messageField,
  numberField
) */

//2 paso: crear la variable que necesitamos
let score = 20
let highscore = 0
const MAX_NUMBER = 20
const MIN_NUMBER = 1
const secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER
const number = guessFiel.value
console.log(secretNumber)
console.log(number)
//3 paso:

scorefield.textContent = 10
checkButton.addEventListener('click', function () {
  alert('hola mundi')
})
function alerta() {
  alert('Me hiciste click')
}
