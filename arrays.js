var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(){
  
}

function destructivelyRemoveElementFromBeginningOfArray() {
  return array.shift()
}

function removeElementFromBeginningOfArray() {
  return array.slice(-2)
}

function destructivelyRemoveElementFromEndOfArray() {
  return array.pop()
}

function removeElementFromEndOfArray() {
  return array.slice(0, array.length -1)
}