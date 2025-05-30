// Roman Numeral Converter
function convertToRoman(num) {
  const romanNumerals = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
  ]; // defining the Roman numerals and their values
  let result = "";

  for (let [roman, value] of romanNumerals) {
    while (num >= value) {
      result += roman; // appending the Roman numeral to the result
      num -= value; // subtracting the value from num
    }
  }
  return result;
}