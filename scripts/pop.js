let pop = document.getElementById("pop");
let form = document.querySelector("form");

function openPop() {
  pop.classList.add("open-pop");
}

function closePop() {
  pop.classList.remove("open-pop");
  form.reset();
}

function validateForm() {
    event.preventDefault();
    if (form.checkValidity()) {
        openPop();
    }
}