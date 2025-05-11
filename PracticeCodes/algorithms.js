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