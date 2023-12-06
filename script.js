document.addEventListener("DOMContentLoaded", () => {
	function toggleMenu() {
		const menu = document.querySelector(".menu-links");
		const icon = document.querySelector(".hamburger-icon");
		menu.classList.toggle("open");
		icon.classList.toggle("open");
	}

	let isDarkMode = false;

	const toggleDarkMode = () => {
		isDarkMode = !isDarkMode;
		document.body.classList.toggle("dark-mode", isDarkMode);
	};

	const darkModeButton = document.querySelector(".switch-btn");
	darkModeButton.addEventListener("click", toggleDarkMode);
});
