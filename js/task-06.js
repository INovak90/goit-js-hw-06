const userNameInput = document.querySelector("#validation-input");
userNameInput.addEventListener("focus", function () {
  userNameInput.classList = "";
});

userNameInput.addEventListener("blur", function (event) {
  event.currentTarget.value.length >= userNameInput.dataset.length
    ? userNameInput.classList.add("valid")
    : userNameInput.classList.add("invalid");
});
