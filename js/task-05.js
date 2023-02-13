const inputEl = document.querySelector("#name-input");
const userNameEl = document.querySelector("#name-output");

if (inputEl.value) {
  userNameEl.textContent = inputEl.value;
}

inputEl.addEventListener("input", onInputEnterText);

function onInputEnterText(event) {
  if (event.currentTarget.value) {
    userNameEl.textContent = event.currentTarget.value;
  } else {
    userNameEl.textContent = "Anonymous";
  }
}
