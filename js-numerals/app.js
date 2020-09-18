const num = document.querySelector(".number");
const btn = document.querySelector(".btn");

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
  1: "Thousand ",
  2: "Million ",
  3: "Billion ",
  4: "Trillion ",
};

btn.addEventListener("click", function () {
  let number = num.value;
  conversion(number);
});

function conversion(number) {
  console.log(hundreds(number));
}

function tens(num) {
  if (num == 0) return "";
  if (num < 20) return digits[num];
  return doubleDigits[parseInt(num / 10)] + "-" + digits[num % 10];
}

function hundreds(num) {
  if (num == 0) return "";
  if (num < 100) return tens(num % 100);
  return digits[parseInt(num / 100)] + " hundred " + tens(num % 100);
}
