const num = document.querySelector(".number");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  let number = num.value;
  conversion(number);
});

function conversion(number) {
  console.log(number);
}
