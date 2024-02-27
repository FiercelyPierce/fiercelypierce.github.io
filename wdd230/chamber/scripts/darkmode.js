const modeButton = document.querySelector("#dark-switch input");
const actionButton = document.querySelector(".card a");
const main = document.querySelector("main");
const body = document.querySelector("body");
const header = document.querySelector("header");
const aside = document.querySelector("aside");

modeButton.addEventListener("click", () => {
	if (modeButton.checked) {
		// Dark mode
		body.style.backgroundColor = "#333333";
		body.style.setProperty("--primary-color", "#333333");
		header.style.color = "white";
		aside.style.backgroundColor = "#333333";

		main.style.backgroundColor = "#333333";
		main.style.setProperty("--primary-color", "#485696");
		actionButton.style.backgroundColor = "#E7E7E7";
		actionButton.style.color = "black";
	} else {
		// Light mode
		body.style.backgroundColor = "white";
		body.style.setProperty("--primary-color", ""); // Reset --primary-color to default
		header.style.color = "black";
		aside.style.backgroundColor = "#485696";

		main.style.backgroundColor = "white";
		main.style.setProperty("--primary-color", ""); // Reset --primary-color to default
		actionButton.style.backgroundColor = "#485696";
		actionButton.style.color = "white";
	}
});