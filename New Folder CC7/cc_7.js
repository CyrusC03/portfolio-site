document.addEventListener("DOMContentLoaded", () => {
const input = document.getElementById("cta-input");
const button = document.getElementById("update-cta");
const cta = document.getElementById("cta");

button.addEventListener("click", () => {
const newText = input.value.trim();
if (newText !== "") {
cta.textContent = newText;
}
});
});