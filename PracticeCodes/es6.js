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