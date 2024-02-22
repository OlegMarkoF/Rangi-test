// получаем список кнопок
const buttons = document.querySelectorAll(".item");
const button = Array.from(buttons);

function buttonActive() {
  const current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
}

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", buttonActive);
}