'use strict';

// Assign events to their respective elements
function loadEvents() {
	const menuToggleBtn = document.querySelector("#menu");
	const menu = document.querySelector(".navbar-main-header");
	const menuLinks = document.querySelector(".navbar-main-header a");
	
	let menuActive = false;

	menuToggleBtn.addEventListener("click", () => {
		if (menuActive) {
			menu.style.display = "none";
			menuActive = false;
		} else {
			menu.style.display = "flex";
			menuActive = true;
		}
	});

	for (let i = 0; i < menuLinks; i++) {
		menuLinks[i].addEventListener("click", () => {
			menu.style.display = "none";
			menuActive = false;
		});
	}
}

loadEvents();
