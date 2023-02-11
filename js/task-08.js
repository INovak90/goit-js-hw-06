const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const mailValue = formElements.email.value;
  const passwordValue = formElements.password.value;
  onValidatingForm(mailValue, passwordValue);
}
function onValidatingForm(mail, password) {
  if (mail && password !== "") {
    const formData = {
      mail,
      password,
    };
    form.reset();
    console.log(formData);
  } else {
    return alert("Всі поля повинні бути заповнені.");
  }
}
