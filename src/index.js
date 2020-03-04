/* eslint-disable space-before-function-paren */
// BORRAR
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', line => {
  const numbers = line.split(' ')
  const diceOne = parseInt(numbers[0])
  const diceTwo = parseInt(numbers[1])

  for (var i = Math.min(diceOne, diceTwo) + 1; i <= Math.max(diceTwo, diceOne) + 1; i++) {
    console.log(i)
  }

  rl.close()
})
