function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS); // cant be overridden object
      try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();

  const myConcat = (arr1, arr2) => {
    return arr1.concat(arr2);
  }; // concat is smushing both arrays to each other 
  
  console.log(myConcat([1, 2], [3, 4, 5]));

  const increment = (number, value = 1) => number + value;  // it will add 1 if value is not specified


  const sum = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
    return total;
  } // sum is able to take any number of arguments and return their sum

    const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
    let arr2;
    arr2 = [...arr1];  // copying the array
    console.log(arr2);


    const LOCAL_FORECAST = {
        yesterday: { low: 61, high: 75 },
        today: { low: 64, high: 77 },
        tomorrow: { low: 68, high: 80 }
      };
      const { today: {low: lowToday, high: highToday} } = LOCAL_FORECAST;
      

// swapping the values
let a = 8, b = 6;
[a , b] = [b , a];


function removeFirstTwo( list ) {
    const [a, b, ...newList] = list; 
    return newList;
  }
  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sourceWithoutFirstTwo = removeFirstTwo(source); // slicing first 2 elements without using .slice


  const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    const failureItems = [];
    for ( let i = 0; i < arr.length; i++ ){
        failureItems.push(`<li class="text-warning">${arr[i]}</li>`); // Template literals - backticks
    }
    return failureItems;
  }
  const failuresList = makeList(result.failure); 



const bicycle = {
  gear: 2,
  setGear(newGear) { return this.gear = newGear; }
}; // function in object
bicycle.setGear(3);
console.log(bicycle.gear);



class Vegetable { 
  constructor(name){
    return this.name = name;
  }
}
const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'



class Thermostat{
  constructor( fahr ){
    this._fahr = fahr;
  }
  //getter
  get temperature(){
    return (5 / 9) * (this._fahr - 32);
  };
  //setter
  set temperature(celc){
    return this._fahr = (celc * 9.0) / 5 + 32;
  }
}
const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius


const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
makeServerRequest.then ( (result) => {
  console.log(result);
}) // seeing result
.catch( error => {
  console.log(error);
}); // error


//! REGEX
let myString = "Hello, World!";
let myRegex = /Hello/;
let result1 = myRegex.test(myString); // .test() feature

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // finding the word "Waldo" you can add more string by adding | operator
let result2 = waldoRegex.test(waldoIsHiding);

let myString1 = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // by adding i to it its avoding the uppercase lowercase issues 
let result3 = fccRegex.test(myString);


let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result4 = extractStr.match(codingRegex); // .match() method


let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; 
let result5 = twinkleStar.match(starRegex); // for repeated words


let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result6 = unRegex.test(exampleStr);


let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; // all the vowels
let result7 = quoteSample.match(vowelRegex); 

let quoteSample1 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; // all the letter between a-z
let result8 = quoteSample.match(alphabetRegex); 

let difficultSpelling = "Mississippi";
let myRegex1 = /s+/g; // if you want to find all the s letters in the sentence, * means => 0 or more times + was 1 or more times and i dont need /ig
let result9 = difficultSpelling.match(myRegex);

let text = "<h1>Winter is coming</h1>";
let myRegex2 = /<.*?>/;  // . = for any character, * is from 0 to more, ? =
let result10 = text.match(myRegex);

// ^ => searches for the first word of the string, $ => end of the string !!! ^ must be in the beggining of the regex and $ must be last one

let quoteSample3 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // short hand of all the words and numbers, All must be "g" flag
// if you make it \W it will inlcudes nonalphanumeric numbers (%, .4 ...)
let resultt = quoteSample.match(alphabetRegexV2).length;

// \d => shothad of [0-9], \D => means ^[0-9]


// Usernames can only use alphanumeric characters.
// The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
// Username letters can be lowercase and uppercase.
// Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; 
let Result = userCheck.test(username);

// \s => whitespace finder also needs "g" flag , \S => searches for non-whitespaces
// you can specify the lower and upper number by using => {} first value in starting to last is second vaule, you can make it for one match by using one value

// A positive lookahead will look to make sure the element in the search pattern is there, 
// but won't actually match it. A positive lookahead is used as (?=...) where the ... is the required part that is not matched.

// On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. 
// A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there. The rest of the pattern
//  is returned if the negative lookahead part is not present.

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6,})(?=\w*\d{2})/; // match passwords that are greater than 5 characters long, and have two consecutive digits
let result_ = pwRegex.test(sampleWord);

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // selecting words for replacing method 
let replaceText = "$3 $2 $1"; // the queue of the strings
let result_2 = str.replace(fixRegex, replaceText);


let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g;
let result_3 = hello.replace(wsRegex,""); // to replace the whole string

//! Basic Data Structures

function mixedNumbers(arr) {
  arr.unshift("I", 2, "three"); // adding the first lines
  arr.push(7, 'VIII', 9); // adding to end of the array
  return arr;
}
console.log(mixedNumbers(['IV', 5, 'six']));

function popShift(arr) {
  let popped = arr.pop(); // popped one is the last index of array
  let shifted = arr.shift(); // and shifted one is the first one
  return [shifted, popped];
}
console.log(popShift(['challenge', 'is', 'not', 'complete']));


const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1,4); // .splice(start, deletecount) => it starts from the [1] index and deleting till the [4]th index
console.log(arr);


function htmlColorNames(arr) {
  arr.splice(0,2,'DarkSalmon','BlanchedAlmond'); // this method is helping you to delete first 2 elements and replace it with the new ones
  return arr;
}
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

function forecast(arr) {
  let slicedArr = arr.slice(2,4);
  return slicedArr; // or arr.slice(1,4) => giving 'warm','sunny'
}
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]); // pushing to new array times value of the num parameter
    num--;
  }
  return newArr;
}
console.log(copyMachine([true, false, true], 2));


function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun']; 
  return sentence;
}
console.log(spreadOut());

function quickCheck(arr, elem) {
  if (arr.indexOf(elem) >= 0){ // returning 1 for true
    return true;
  }
    return false; // returning -1 for false
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

function filteredArray(arr, elem) {
  let newArr = [];
  for ( let i = 0 ; i < arr.length ; i++){
    let subArr = arr[i];
    if( subArr.indexOf(elem) === -1 ){ // abstracting the arrays which has the elem value
      newArr.push(subArr);
    }
  }
  return newArr;
}
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));


let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
function checkInventory(scannedItem) {
  return foods[scannedItem]; // this is the way to use 
}
console.log(checkInventory("apples"));



const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}
function countOnline(allUsers) {
  let count = 0;
  for ( let user in allUsers ){
    if ( allUsers[user].online === true ){
      count++;
    }
  }
    return count;
}
console.log(countOnline(users));


function getArrayOfUsers(obj) {
  return Object.keys(obj); // getting the key
}
console.log(getArrayOfUsers(users));


let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};
function addFriend(userObj, friend) {
  if ( userObj.data.friends === friend ){
    return `Already has ${friend} as friend`
  }
  else{
  userObj.data.friends.push(friend); 
  }
return userObj.data.friends;
}
console.log(addFriend(user, 'Pete'));

//! Object Oriented Programming
function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}
let terrier = new Dog(); // creating a new object from the Dog constructor function


function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
let myHouse = new House(4);
myHouse instanceof House; // using istanceof to check if the object is an instance of the constructor function


function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
for ( let property in canary){
  if (canary.hasOwnProperty(property)){
    ownProps.push(property);
  }
}
console.log(ownProps); // this is the way to check the own properties of the object



function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;// adding the numLegs property to the Dog constructor function
let beagle = new Dog("Snoopy");
// let ownProps = [];
let prototypeProps = [];
for ( let property in beagle){
  if (Dog.hasOwnProperty(property)){
    ownProps.push(property);
  }else{
    prototypeProps.push(property);
  }
}


Dog.prototype = {
  constructor: Dog, // this is the way to add the constructor property to the Dog prototype
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};


Dog.prototype.isPrototypeOf(beagle); // checking if the Dog prototype is the prototype of the beagle object


function Cat(name) {
  this.name = name;
}
Cat.prototype = {
  constructor: Cat,
  
};
function Bear(name) {
  this.name = name;
}
Bear.prototype = {
  constructor: Bear,
  
};
function Animal() { }
Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
}; 

let duck = Object.create(Animal.prototype); // creating a new object from the Animal prototype
let beagles = Object.create(Animal.prototype);

Dog.prototype = Object.create(Animal.prototype); // dog is inheriting the Animal prototype


Dog.prototype.constructor = Dog; // setting the constructor property of the Dog prototype to Dog
Bird.prototype.constructor = Bird;

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.bark = function() {
  console.log("Woof!");
}
Dog.prototype.constructor = Dog;


(function () {
  console.log("A cozy nest is ready");
})(); // this is the way to create an IIFE (Immediately Invoked Function Expression) 
// which is a function that runs as soon as it is defined
makeNest();


let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};

let funModule = (function() {
  return{ // creating a module pattern
    isCuteMixin:  function(obj) {
  obj.isCute = function() {
    return true;
  }; 
},
    singMixin: function(obj) {
      obj.sing = function() {
      console.log("Singing to an awesome tune");
  };
}
  };
})();


//! Functional Programming
//! Intermediate Algorithm Scriptings
