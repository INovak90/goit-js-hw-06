const inputEl = document.querySelector("#name-input");
const userNameEl = document.querySelector("#name-output");
inputEl.addEventListener("input", function (event) {
  event.currentTarget.value === ""
    ? (userNameEl.textContent = "Anonymous")
    : (userNameEl.textContent = event.currentTarget.value);
});
