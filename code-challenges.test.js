// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

// PSEUDOCODE
// make function that takes string
// use .replace to check string and replace designated characters 
    // use gi for global index, reduces case sensitivity errors
// create a chain of variables, .replace does not change original string
// return final variable containing original string 


describe("l33tSp34k", () => {
    it("Create a function that takes in a string and returns a coded message", () => {
    const secretCodeWord1 = "Lackadaisical"
    const secretCodeWord2 = "Gobbledygook"
    const secretCodeWord3 = "Eccentric"
      expect(l33tSp34k(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
      expect(l33tSp34k(secretCodeWord2)).toEqual("G0bbl3dyg00k")
      expect(l33tSp34k(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
  })

//   FAIL  ./code-challenges.test.js
//   l33tSp34k
//     × Create a function that takes in a string and returns a coded message (1 ms)

//   ● l33tSp34k › Create a function that takes in a string and returns a coded message

// Expected output: "L4ck4d41s1c4l"
// Expected output: "G0bbl3dyg00k"
// Expected output: "3cc3ntr1c"


// b) Create the function that makes the test pass.

const l33tSp34k = (str) => {
    let stringWithA = str.replace(/a/gi, "4")
    let stringWithE = stringWithA.replace(/e/gi, "3")
    let stringWithI = stringWithE.replace(/i/gi, "1")
    let stringWithO = stringWithI.replace(/o/gi, "0")
    return stringWithO
  }

//   PASS  ./code-challenges.test.js
//   l33tSp34k
//     √ Create a function that takes in a string and returns a coded message (3 ms)

// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

//PSEUDOCODE
// use .filter with .includes as parameter that takes a letter variable  
// add .toUpperCase to cover case sensitivity. 



describe("returnItemsOfLetter", () => {
    it("returns items in array that contain letter input", () => {
    const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
    const letterA = "a"
    const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
    const letterE = "e"
        expect(returnItemsOfLetter(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
        expect(returnItemsOfLetter(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
  })

//   FAIL  ./code-challenges.test.js
//   returnItemsOfLetter
//     × returns items in array that contain letter input

//   ● returnItemsOfLetter › returns items in array that contain letter input

// // Expected output: ["Apple", "Banana", "Orange"]
// // Expected output: ["Cherry", "Blueberry", "Peach"]

// // b) Create the function that makes the test pass.

const returnItemsOfLetter = (arr, letter) => {
    return arr.filter(val => {
      return val.includes(letter) || val.includes(letter.toUpperCase())
    })
  }
const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
const letterA = "a"
const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
const letterE = "e"

// PASS  ./code-challenges.test.js
// returnItemsOfLetter
//   √ returns items in array that contain letter input (3 ms)

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

//PSEUDOCODE
// create function that takes an array
// if any 3 values match and the remaining two values match each other, return true
  // anything else is false

describe("fullHouse", () => {
    it("if any 3 values match and the remaining two values match each other, return true.", () => {
    const hand1 = [5, 5, 5, 3, 3]
    const hand2 = [5, 5, 3, 3, 4]
    const hand3 = [5, 5, 5, 5, 4]
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
    })
  })

// Expected output: true
// Expected output: false
// Expected output: false

// FAIL  ./code-challenges.test.js
// fullHouse
//   × if any 3 values match and the remaining two values match each other, return true. (1 ms)

// ● fullHouse › if any 3 values match and the remaining two values match each other, return true.

// b) Create the function that makes the test pass.

const fullHouse = (arr) => {
    if (arr[0] === arr[1,2] && arr[3] === arr[4] || 
        arr[0] === arr[2,3] && arr[1] === arr[4] ||
        arr[0] === arr[3,4] && arr[1] === arr[2])
        return true
    else{
        return false
    }
 }

//  PASS  ./code-challenges.test.js
//   fullHouse
//     √ if any 3 values match and the remaining two values match each other, return true. (3 ms)


// PASS  ./code-challenges.test.js
// l33tSp34k
//   √ Create a function that takes in a string and returns a coded message (2 ms)
// returnItemsOfLetter
//   √ returns items in array that contain letter input
// fullHouse
//   √ if any 3 values match and the remaining two values match each other, return true.

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.476 s, estimated 1 s
// Ran all test suites.
// Done in 1.41s.