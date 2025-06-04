//! Algorithm Scripts

// Converting celcius to fahrenheit
function convertCtoF(celsius) {
    let fahrenheit = celsius * 9/5 + 32;
    return fahrenheit;
  }
  convertCtoF(30);

// reversing the word
  function reverseString(str) {
    return str.split("").reverse().join("");
  }
  reverseString('hello');

  // Factorializing a number
  function factorialize(num) {
    if ( num <= 0 ){
      return 1;
    } 
    return num * factorialize(num - 1);
   }
   
   factorialize(5);


   // Find the longest word in a string
   function findLongestWordLength(str) {
  
    let words = str.split(" ");
    let maxLength = 0; 
    
    for( let i = 0 ; i < words.length ; i++ ){
      if ( words[i].length > maxLength){
        maxLength = words[i].length;
      }
    }
    return maxLength;
  }
  findLongestWordLength('The quick brown fox jumped over the lazy dog');


  // Return largest numbers in array
  function largestOfFour(arr) {

    let numbers = [];
    
    for ( let i = 0 ; i < arr.length ; i++ ){
    let maxNumber = arr[i][0];
    
      for ( let j = 0 ; j < arr[i].length ; j++ ){
        if ( arr[i][j] > maxNumber ){
          maxNumber = arr[i][j];
        }
      }
        numbers.push(maxNumber);
    }
      return numbers;
    }
    
    largestOfFour([
      [4, 5, 1, 3],
      [13, 27, 18, 26],
      [32, 35, 37, 39],
      [1000, 1001, 857, 1]
    ]);

// confirming the last word without .endswith()
function confirmEnding(str, target) {
    let endPortion = str.slice(str.length - target.length);
    return endPortion === target;
  }
  confirmEnding('Bastian', 'n');

  // repeating string 
  function repeatStringNumTimes(str, num) {
    if ( num <= 0 ){
      return "";
    }
    
    let result = "";
  
    for ( let i = 1 ; i <= num ; i++ ){
      result += str;
    }
    return result;
  }
  repeatStringNumTimes('abc', 3);

// Truncating the string
function truncateString(str, num) {
  
    if (str.length <= num) {
      return str; // if the length is already smaller than num 
    }
  
    let words = str.split('');
    let res = '';
    
      for ( let i = 0 ; i < num ; i++) {
        res += words[i]; 
      }
    return `${res}...`;
  }
  console.log(truncateString('A-tisket a-tasket A green and yellow basket', 8));

// find keepers
function findElement(arr, func) {

for ( let i = 0 ; i < arr.length ; i++ ){
    if ( func(arr[i])){
    return arr[i];
    } 
}
return;
}
findElement([1, 2, 3, 4], num => num % 2 === 0);

// boolean finder
function booWho(bool) {
    if ( typeof bool === 'boolean' ){
      return true;
    }
      return false;
  }
booWho(null);


// Title case a sentence 
function titleCase(str) {
    let words = str.split(' ');
    let res = '';
    for( let i = 0 ; i < words.length ; i++ ){
      let word = words[i];
      if ( word.length > 0 ){
        res += word[0].toUpperCase() + word.slice(1).toLowerCase() + ' ';
        }
      }
    return res.trim();
  }
  titleCase("I'm a little tea pot");

/* second way to solve 

  function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
    .join(" ");
}
titleCase("I'm a little tea pot");
  */


// slice and splice methods
function frankenSplice(arr1, arr2, n) {
  let array = arr2.slice(); 
  for ( let i = 0 ; i < arr1.length ; i++ ){
    array.splice( n, 0, arr1[i] );
    n++;
  }
  return array;
}
frankenSplice([1, 2, 3], [4, 5, 6], 1);

//bolean and truthy values
function bouncer(arr) {
  return arr.filter( (item) => item ); // filter out falsy values
  // return arr.filter(Boolean); // another way to filter out falsy values
  }
  bouncer([7, 'ate', '', false, 9]);

// where do I belong
  function getIndexToIns(arr, num) {
    arr.sort( (a, b) => a - b ); // sorting the array for ascending
    for ( let i = 0 ; i < arr.length ; i++ ){
        if ( arr[i] >= num ){
          return i;
      }
  }
    return arr.length;
  }
  getIndexToIns([40, 60], 50);
  

function mutation(arr) {

  const firstWord = arr[0].toLowerCase();
  const secondWord = arr[1].toLowerCase();
  
  for ( let i = 0 ; i < secondWord.length; i++) {
      if (firstWord.indexOf(secondWord[i]) < 0) return false;
    }
    return true;
  }
  mutation(['hello', 'hey']);

  // chunking the array
  function chunkArrayInGroups(arr, size) {
    const newArr = [];
    for (let i = 0 ; i < arr.length ; i += size ){
      newArr.push(arr.slice(i , i + size));
    }
    return newArr;
  }
  chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);

// slasher
function destroyer(arr, ...valsToRemove) {
  return arr.filter(item => !valsToRemove.includes(item));
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// where do the sources go
// This function filters the collection based on the source object
function whatIsInAName(collection, source) {
  const keys = Object.keys(source);

  return collection.filter( obj => {
    return keys.every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
  });
}
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

// Spinal Tap Case
function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2"); // regex to add space between lowercase and uppercase letters
  return str.trim().toLowerCase().split(/(?:_| )+/).join("-"); // regex to split by spaces and underscores
}
spinalCase('This Is Spinal Tap');

// Pig Latin
function translatePigLatin(str) {
const consonants =  /^[aeiou]/i;

if (consonants.test(str)) {
    return str + "way";
  }

  const consonantsCluster = str.match(/^[^aeiou]+/i)[0];
  return str.slice(consonantsCluster.length) + consonantsCluster + "ay";
}

translatePigLatin("consonant");

// Search and Replace
function myReplace(str, before, after) {
  const isCapitalized = before.charAt(0) === before.charAt(0).toUpperCase();
  const newAfter = isCapitalized 
                    ? after.charAt(0).toUpperCase() + after.slice(1) 
                    : after.charAt(0).toLowerCase() + after.slice(1)
  return str.replace(before, newAfter);
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

// DNA Pairing
function pairElement(str) {
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  }; // defining the pairs of DNA
  return str.split("").map(letter => [letter, pairs[letter]]); // it will map the pairs and return as array
}
pairElement("GCG");

// Missing letters
function fearNotLetter(str) {
  for ( let i = 0 ; i < str.length ; i++ ){
    const char = str.charCodeAt(i); // charCode means the unicode value of the character
    if ( char !== str.charCodeAt(0) + i ){ // if the unicode value is not equal to the first character unicode value + i
      return String.fromCharCode( char - 1 ); // it will return the unicode value of the character - 1
    }
}
  return;
}
fearNotLetter("abce");


// sorted union of arrays 
function uniteUnique(...arrays) {
  const unique = []; // this will hold the unique values

  for (let arr of arrays) {
    for (let value of arr) { 
      if (!unique.includes(value)) {
        unique.push(value); // if the value is not already in the unique array, it will be added
      }
    }
  }
  return unique;
}
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1]); 

// Convert HTML Entities
function convertHTML(str) {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  }; // defining the HTML entities
  return str
    .split("")
    .map(entity => htmlEntities[entity] || entity)
    .join(""); // it will map the entities and return as string
}
convertHTML("Dolce & Gabbana");

// Sum Fibonacci Numbers 
function sumFibs(num) {
  let firtFib = 0;
  let secFib = 1;
  let thirdFib = 1;
  let sum = 0;

  while (secFib <= num) {
    sum += secFib; // adding the second Fibonacci number to the sum if it is less than or equal to num
    if (thirdFib <= num) sum += thirdFib; // adding the third Fibonacci number to the sum if it is less than or equal to num
    [firtFib, secFib] = [secFib + thirdFib, thirdFib + (secFib + thirdFib)]; // updating the Fibonacci numbers
    thirdFib = firtFib + secFib; // calculating the next Fibonacci number
  }
  return sum;
}

// isPrime function to check if a number is prime we will use this function in sumPrimes
function isPrime(n) {
  if (n < 2) return false; // numbers less than 2 are not prime
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false; // if n is divisible by any number other than 1 and itself, it is not prime
  }
  return true; // if no divisors found, it is prime
}
// Sum All Primes
function sumPrimes(num) {
  let sum = 0;

  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i; // adding the prime number to the sum
    }
  }
  return sum;
}

// smallest common multiple
function smallestCommons(arr) {
  const [min, max] = arr.sort((a, b) => a - b); // sorting the array to get the minimum and maximum values
  const range = Array(max - min + 1).fill(0).map((_, i) => i + min);
  const gcd = (a, b) => (b === 0) ? a : gcd(b, a % b); // calculations
  const lcm = (a, b) => a * b / gcd(a, b);
  
  return range.reduce((multiple, curr) => lcm(multiple, curr)); // calculating the least common multiple of the range
}
smallestCommons([1,5]);

// Drop it
function dropElements(arr, func) {
   while (arr.length > 0 && !func(arr[0])) {
    arr.shift(); // remove the first element until the condition is met
  }
  return arr;
}
dropElements([1, 2, 3], function(n) {return n < 3; });

// Steamroller
function steamrollArray(arr) {
  return arr.reduce((flat, toFlatten) => {
    return flat.concat(Array.isArray(toFlatten) ? steamrollArray(toFlatten) : toFlatten); // recursively flatten the array
  }, []);
}

// binary agents
function binaryAgent(str) {
  return str.split(" ").map( arg => String.fromCharCode(parseInt(arg,2)) ).join(""); // for binary code
}
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");


// Everything Be True
function truthCheck(collection, pre) {
  return collection.every(obj => obj[pre]); // checks if every object in the collection has the property pre and it is truthy
}
truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");


// Arguments Optional
function addTogether(...args) {

  const [first, second] = args; // destructuring the arguments to get first and second

  if (typeof first !== "number") {
    return undefined;
  }

  if (args.length === 1) { // if only one argument is passed
    return function (second) { // it will return a function that takes the second argument
      if (typeof second !== "number") {
        return undefined;
      }
      return first + second;
    };
  }

  if (typeof second !== "number") {
    return undefined;
  }

  return first + second;
}
addTogether(2,3);

// Make a Person
const Person = function(first, last) {
  let firstName = first;
  let lastName  = last;
  this.getFirstName = function() {
    return firstName;
  };

  this.getLastName = function() {
    return lastName;
  };

  this.getFullName = function() {
    return this.getFirstName() + " " + this.getLastName();
  };

  this.setFirstName = function(first) {
    return firstName = first;
  };

  this.setLastName = function(last) {
    return lastName = last;
  };

  this.setFullName = function(first, last) {
    this.setFirstName(first);
    this.setLastName(last);
    return this.getFullName();
  };
};
const bob = new Person("Bob", "Ross");
console.log(bob.getFullName());

// Map the Debris
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const a = 2 * Math.PI; // constant for 2 * pi
  const newArrs = [];

  const getOrb = function(obj){ // function to calculate the orbital period
  const c = Math.pow(earthRadius + obj.avgAlt, 3); // calculating the cube of the sum of earth radius and average altitude
  const b = Math.sqrt(c / GM); // calculating the square root of the division of c by GM
    const orbPeriod = Math.round(a * b);
    return {name: obj.name, orbitalPeriod: orbPeriod};
  };

  for (let elem in arr) {
    newArrs.push(getOrb(arr[elem])); // pushing the result of getOrb function into newArrs
  }

  return newArrs;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);