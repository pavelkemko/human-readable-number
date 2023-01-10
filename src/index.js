module.exports = function toReadable (number) {
  const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const hundreds = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
  const secondTen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',];

  let stringNumber = String(number);
  let numberLength = stringNumber.length;
  let firstNumber = Number(stringNumber[0]);
  let secondNumber = Number(stringNumber[1]);
  let thirdNumber = Number(stringNumber[2]);

  if (numberLength < 2) {
    return `${units[firstNumber]}`;
  } else if (numberLength === 2 && firstNumber === 1) {
    return `${secondTen[secondNumber]}`;
  } else if (numberLength === 2 && firstNumber > 1 && secondNumber > 0) {
    return `${tens[firstNumber]} ${units[secondNumber]}`;
  } else if (numberLength === 2 && firstNumber > 1 && secondNumber === 0) {
    return `${tens[firstNumber]}`;
  } else if (numberLength === 3 && secondNumber > 1 && thirdNumber > 0) {
    return `${hundreds[firstNumber]} ${tens[secondNumber]} ${units[thirdNumber]}`;
  } else if (numberLength === 3 && secondNumber === 1) {
    return `${hundreds[firstNumber]} ${secondTen[thirdNumber]}`
  } else if (numberLength ===3 && secondNumber === 0 && thirdNumber === 0) {
    return `${hundreds[firstNumber]}`;
  } else if (numberLength === 3 && secondNumber === 0 && thirdNumber > 0) {
    return `${hundreds[firstNumber]} ${units[thirdNumber]}`;
  } return `${hundreds[firstNumber]} ${tens[secondNumber]}`;
}