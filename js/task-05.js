const inputEl = document.querySelector("#name-input");
const userNameEl = document.querySelector("#name-output");
inputEl.value = userNameEl.textContent;
inputEl.addEventListener("input", function (event) {
  if (event.currentTarget.value) {
    userNameEl.textContent = event.currentTarget.value;
  } else {
    userNameEl.textContent = "Anonymous";
  }
});
