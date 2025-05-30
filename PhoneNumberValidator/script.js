// Telephone Number Validator
function telephoneCheck(str) {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/; // regex to validate the phone number format
  return regex.test(str); // testing the string against the regex
}