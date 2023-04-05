const slider = document.querySelector(".slider");
const btnLeft = document.querySelector(".btnLeft");
const btnRight = document.querySelector(".btnRight");
const images = document.querySelectorAll("img");
let size = images[0].clientWidth;

let counter = 1;
slider.style.transform = "translateX(" + -size * counter + "px)";

btnLeft.addEventListener("click", () => {
	if (counter <= 1) {
		slider.style.transition = "none";
	}
	if (counter <= 0) return;

	slider.style.transition = "transform 200ms ease-in-out";
	counter--;
	slider.style.transform = "translateX(" + -size * counter + "px)";
});

btnRight.addEventListener("click", () => {
	if (counter === 6) {
		slider.style.transition = "none";
		counter = 0;
	}
	if (counter >= images.length - 1) return;
	slider.style.transition = "transform 200ms ease-in-out";
	counter++;
	slider.style.transform = "translateX(" + -size * counter + "px)";
});

slider.addEventListener("transitionend", () => {
	if (images[counter].id === "lastclone") {
		slider.style.transition = "none";
		counter = images.length - 2;
		slider.style.transform = "translateX(" + -size * counter + "px)";
	}
	if (images[counter].id === "firstclone") {
		slider.style.transition = "none";
		counter = images.length - counter;
		slider.style.transform = "translateX(" + -size * counter + "px)";
	}
});

setInterval(interval, 5000);

function interval() {
	slider.style.transition = "transform 200ms ease-in-out";
	counter++;
	clearInterval();
	slider.style.transform = "translateX(" + -size * counter + "px)";
}

let list = document.querySelector(".list");
let ul = document.querySelector(".unclick");
let menu = document.querySelector(".menu");
// let listOpen = document.querySelector('.list-open')
let menustate = true;
menu.addEventListener("click", () => {
	if (menustate) {
		list.classList.add("list-open");
		menu.classList.add("open");
		menustate = false;
		window.addEventListener("click", (e) => {
			if (e.target == menu || e.target == ul) {
				return;
			}
			if (e.target != list) {
				menu.classList.remove("open");
				list.classList.remove("list-open");
				menustate = true;
			}
		});
	} else {
		menu.classList.remove("open");
		list.classList.remove("list-open");
		menustate = true;
	}
});
