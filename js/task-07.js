const fontSizeControlEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
fontSizeControlEl.value = 16;

fontSizeControlEl.addEventListener("input", (event) => {
  textEl.style.fontSize = event.currentTarget.value + `px`;
});
