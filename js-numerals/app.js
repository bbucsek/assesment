// Ruleset: https://www.grammarbook.com/numbers/numbers.asp
// Rule 2a: Hyphenate all compound numbers from twenty-one through ninety-nine.
// Rule 6: The simplest way to express large numbers is usually best.
// Rule 8a: When writing out a number of three or more digits, the word and is not necessary.

const digits = {
  0: "",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
};

const doubleDigits = {
  2: "twenty",
  3: "thirty",
  4: "forty",
  5: "fifty",
  6: "sixty",
  7: "seventy",
  8: "eighty",
  9: "ninety",
};
const aboveHundred = {
  0: "",
  1: "thousand",
  2: "million",
  3: "billion",
  4: "trillion",
  5: "quadrillion",
};

function app() {
  const num = document.querySelector(".input-number");
  const btn = document.querySelector(".btn");

  btn.addEventListener("click", function () {
    let number = num.value;
    let numberString = convertNumber(number);
    console.log(numberString);
    alert(numberString);
  });
}

export default function convertNumber(number) {
  let numberList = Array.from(number.toString()).map(Number);
  let writtenNumber;
  if (number < 10000 && number > 1000 && numberList[1] != 0) {
    writtenNumber = getRuleSixResult(numberList);
  } else {
    writtenNumber = conversion(number);
  }
  return writtenNumber;
}

function getRuleSixResult(numberList) {
  let firstTwo = `${numberList[0]}${numberList[1]}`;
  let lastTwo = parseInt(`${numberList[2]}${numberList[3]}`); //parseInt to avoid passing numbers like 01
  let writtenNumber = `${tens(firstTwo)} hundred ${tens(lastTwo)}`;
  return writtenNumber;
}

function tens(num) {
  if (num == 0) return "";
  if (num < 20) return digits[num];
  let lastDigits = digits[num % 10] == 0 ? "" : "-" + digits[num % 10];
  return doubleDigits[parseInt(num / 10)] + lastDigits;
}

function hundreds(num) {
  if (num == 0) return "";
  if (num < 100) return tens(num % 100);
  return digits[parseInt(num / 100)] + " hundred " + tens(num % 100);
}

function conversion(num) {
  if (num == 0) return "zero";
  let c = 0;
  let wrd = "";
  let h;
  while (num > 0) {
    h = num % 1000;
    if (h != 0) {
      wrd = `${hundreds(h)} ${aboveHundred[c]} ${wrd}`;
    }
    num = parseInt(num / 1000);
    c = c + 1;
  }
  return wrd.trim();
}

