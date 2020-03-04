/* eslint-disable space-before-function-paren */
// BORRAR
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const data = []
let numberOfInputs = 0
let totalAmountOfKittens
let totalAmountOfBeds

rl.on('line', line => {
  const numbers = line.split(' ')
  const a = parseInt(numbers[0])
  const b = parseInt(numbers[1])

  // cambiar nombres

  if (a && b && !totalAmountOfKittens && !totalAmountOfBeds) {
    totalAmountOfKittens = a
    totalAmountOfBeds = b
  } else if (a && b) {
    data.push([a, b])
    numberOfInputs++
  }

  if (numberOfInputs === totalAmountOfKittens) {
    // rl.close()
    return calculateMaximumAccommodation()
  }
})

function calculateMaximumAccommodation() {
  // console.log('n & totalAmountOfBeds: ', totalAmountOfKittens, totalAmountOfBeds)
  // console.log('Data: ', data)

  let dataToUse = mergeSort(data)
  let countGuests = 0
  let bedOrder = new Array(totalAmountOfBeds)

  for (let index = 0; index < totalAmountOfBeds; index++) {
    bedOrder[index] = []
    bedOrder[index].push(dataToUse[0])
    countGuests++
    dataToUse.shift()
  }

  let bed = 0
  let countBed = 0

  while (bed < totalAmountOfBeds) {
    let indic = dataToUse.findIndex(elem => elem[0] >= bedOrder[bed][countBed][1])

    if (indic === -1) {
      bed++
      countBed = 0
    } else {
      bedOrder[bed].push(dataToUse[indic])
      dataToUse.splice(indic, 1)
      countGuests++
      countBed++
    }
  }

  console.log(countGuests)
  // console.log(bedOrder)
}

function mergeSort(unsortedArray) {
  // No need to sort the array if the array only has one element or empty
  if (unsortedArray.length <= 1) {
    return unsortedArray
  }
  // In order to divide the array in half, we need to figure out the middle
  const middle = Math.floor(unsortedArray.length / 2)

  // This is where we will be dividing the array into left and right
  const left = unsortedArray.slice(0, middle)
  const right = unsortedArray.slice(middle)

  // Using recursion to combine the left and right
  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let resultArray = []
  let leftIndex = 0
  let rightIndex = 0

  // We will concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex][1] < right[rightIndex][1]) {
      resultArray.push(left[leftIndex])
      leftIndex++ // move left array cursor
    } else if (left[leftIndex][1] === right[rightIndex][1]) {
      if (left[leftIndex][0] < right[rightIndex][0]) {
        resultArray.push(left[leftIndex])
        leftIndex++ // move left array cursor
      } else {
        resultArray.push(right[rightIndex])
        rightIndex++
      }
    } else {
      resultArray.push(right[rightIndex])
      rightIndex++ // move right array cursor
    }
  }

  // We need to concat to the resultArray because there will be one element left over after the while loop
  return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}
