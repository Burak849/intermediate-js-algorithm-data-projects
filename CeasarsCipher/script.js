// Ceasar Cipher
function rot13(str) {
  return str.split("").map(char => {
    const code = char.charCodeAt(0);
    if (code >= 65 && code <= 90) { // checking if the character is an uppercase letter
      return String.fromCharCode(((code - 65 + 13) % 26) + 65); // applying the ROT13 transformation
    }
    return char; // returning the character as is if it is not an uppercase letter
  }).join("");
}
