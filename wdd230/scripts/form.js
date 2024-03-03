const p = document.querySelector("#password");
const c = document.querySelector("#confirmation");
const message = document.querySelector("#formmessage");
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

c.addEventListener("focusout", checkSame);

document.addEventListener("DOMContentLoaded", function () 
{
	function handleSubmit(event) {
		event.preventDefault();

		let formt = event.target;
		let formData = new FormData(formt);
	}

	const form = document.querySelector("form");
	form.addEventListener("submit", handleSubmit);
});

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function checkSame() 
{
	if (p.value !== c.value) {
		message.textContent = "Passwords DO NOT MATCH!";
		message.style.visibility = "show";
		c.style.backgroundColor = "#fff0f3";
        p.value = "";
		c.value = "";
		p.focus();
	} else {
		message.style.display = "none";
		c.style.backgroundColor = "#fff";
		c.style.color = "#000";
	}
}

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}