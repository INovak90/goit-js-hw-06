// const object = {
//   counterValue: 0,
//   decrement() {
//     this.counterValue -= 1;
//   },
//   increment() {
//     this.counterValue += 1;
//   },
// };
const decrementBtn = counter.querySelector('button[data-action="decrement"]');
const incrementBtn = counter.querySelector('button[data-action="increment"]');
const valueEl = counter.querySelector(`#value`);
// decrementBtn.addEventListener("click", function () {
//   object.decrement();
//   valueEl.textContent = object.counterValue;
// });
// incrementBtn.addEventListener("click", function () {
//   object.increment();
//   valueEl.textContent = object.counterValue;
// });
let counterValue = 0;
decrementBtn.addEventListener("click", function () {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});
incrementBtn.addEventListener("click", function () {
  counterValue += 1;
  valueEl.textContent = counterValue;
});
