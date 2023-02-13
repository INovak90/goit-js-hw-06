const inputEl = document.querySelector("#name-input");
const userNameEl = document.querySelector("#name-output");

inputEl.addEventListener("input", () => {
  if (inputEl.value) {
    userNameEl.textContent = inputEl.value;
  } else {
    userNameEl.textContent = "Anonymous";
  }
});
І;
