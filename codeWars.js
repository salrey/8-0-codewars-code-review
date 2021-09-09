// 8.1 Cohort codeWars


//--------------NEW KATA------------------

function none(arr, fun){
  return arr.every((element) => !fun(element));
}

//--------------NEW KATA------------------

// function sortArray(array) {
//   // Create an array of odd numbers and sort them
//   let oddNum = []
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2) {
//       oddNum.push(array[i])
//     }
//   }
//   oddNum.sort((a,b) => a - b)

//   // Loop through array and if it's an odd number, replace as you go through the sorted odd num array
//   let i = 0
//   let j = 0
//   while (i < array.length) {
//     if (array[i] % 2) {
//       array[i] = oddNum[j]
//       j++
//     }
//     i++
//   }
//   return array
// }


// console.log(sortArray([7, 1]))
// console.log(sortArray([5, 8, 6, 3, 4]))

//--------------NEW KATA------------------

// function firstNonConsecutive (arr) {
//   let result = arr.find((element, i) => { 
//     if (i > 0) {
//       return arr[i-1] !== element - 1 
//     }
//   })
//   if (result === undefined) {
//     return null
//   }
//   return result
// }

// console.log(firstNonConsecutive([1,2,3,4,6,7,8]))
// console.log(firstNonConsecutive([-6,-5,-4,-3,-2,-1,1,2,3]))

//--------------NEW KATA------------------

// function reverse(str){
//   return str.split(" ").map((word, index) => {
//     if (index % 2) {
//       word = word.split("").reverse().join("") 
//     }
//     return word
//   }).join(" ").trim()
// }

// console.log(reverse("Reverse this string, please!"))

//--------------NEW KATA------------------

// function isSameLanguage(list) {
//   const currentLanguage = list[0].language   
//   return list.every((person) => currentLanguage === person.language)
// }

// const list = [
//   { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
//   { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
//   { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
// ];

// console.log(isSameLanguage(list))

//--------------NEW KATA------------------

// function gooseFilter (birds) {
//   const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//   return birds.filter((element) => !geese.includes(element))
// };

// console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// ))

//--------------NEW KATA------------------

// function findMagic (arr) {
//   return Number(arr.filter((element,index) => element === index)) || -1
// }

// console.log(findMagic([-20,-10,2,10,20]))

//--------------NEW KATA------------------

// function numObj(s){
//   return s.map((element) => element = {[element]: String.fromCodePoint(element)})
// }

// console.log(numObj([118,117,120]))

//--------------NEW KATA------------------

// let myArr = [1,2,3,4,5]

// let myFilteredArr = myArr.filter((elem) => elem < 4)

// let sum = 0

// myFilteredArr.forEach((elem) => sum += elem)

// console.log(sum)

//--------------NEW KATA------------------

// function lefty () {
//   return "left";
// }

// function righty () {
//   return "right";
// }

// function go (direction) {
//   return direction === "right" ? righty() : lefty;
// }

// console.log(go('right'))

//--------------NEW KATA------------------

// let str = "hello world!"

// function reverseWords(str){
//   const list = str.split(" ");
//   const middle = list.length / 2;
//   for (let i = 0; i < middle; i++) {
//     const oppositeHalf = list[list.length - 1 - i];
//     const firstHalf = list[i];
//     list[list.length - 1 - i] = firstHalf;
//     list[i] = oppositeHalf;
//   };
//   str = list.join(" ");

//   return str
// }

// OR
// function reverseWords(str) {
//   return str.split(" ").reverse().join(" ");
// }

// console.log(reverseWords(str))

//--------------NEW KATA------------------

// const questions = [{
//   question: "What's the currency of the USA?",
//   choices: ["US dollar", "Ruble", "Horses", "Gold"],
//   corAnswer: 0,
//   usersAnswer: null
// }, {
//   question: "Where was the American Declaration of Independence signed?",
//   choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
//   corAnswer: 0,
//   usersAnswer: null
// }];

//   questions.forEach((question) => question.usersAnswer);

//--------------NEW KATA------------------

// function twoSort(strings) {
//   let firstAlphabetically = strings[0];
//   for (const string of strings) {
//     if (string < firstAlphabetically) {
//       firstAlphabetically = string;
//     }
//   };

//   return firstAlphabetically.split("").join("***");

// };

// OR return s.sort().slice(0,1)[0].split('').reduce((x, y, z=>x + '***' +y)

//--------------NEW KATA------------------

//console.log(Math.ceil(Math.random() * (1, 2, 4)))


  // this will return NaN - 
  // if (Number.isNaN(Object.values({ firstName: "Francisco", lastName: "Carrillo", age: 28 }))) {
  //   return NaN
  // } else {

  // }

  // console.log(Math.max(...Object.values({ firstName: "10", lastName: "5", age: 28 })))

//  let object = { firstName: "hello", lastName: "bye", age: 28 }

// console.log(values(Math.floor(Math.random() * 3)))

// console.log(Math.max(Number.parseInt(...[1,2,4])))

// console.log(object[Object.keys(object)[Math.floor(Math.random()*Object.keys(object).length)]])


// console.log(Math.min(10, -10, 0, 100));