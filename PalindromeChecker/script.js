function palindrome(str) {
  const cleanStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();  // removing non-alphanumeric characters and converting to lowercase
  return cleanStr === cleanStr.split("").reverse().join(""); // checking if the cleaned string is equal to its reverse
  }
palindrome("eye");