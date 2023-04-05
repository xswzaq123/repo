const btn = document.querySelector("button");
const show = document.querySelector(".form");
const form = document.querySelector("form");
const close = document.querySelector("#close");

btn.addEventListener("click", runEvent);
close.addEventListener("click", closeEvent);
function runEvent() {
	form.classList.add("show");
	show.style.visibility = "visible";
}
function closeEvent() {
	form.classList.remove("show");
	show.style.visibility = "hidden";
}
