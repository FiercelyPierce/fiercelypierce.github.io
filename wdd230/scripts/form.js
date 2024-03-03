const p = document.querySelector("#password");
const c = document.querySelector("#confirmation");
const message = document.querySelector("#formmessage");

c.addEventListener("focusout", checkSame);

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

document.addEventListener("DOMContentLoaded", function () 
{
	function handleSubmit(event) {
		event.preventDefault();

		let formt = event.target;
		let formData = new FormData(formt);

		for (let pair of formData.entries()) {
			console.log(pair[0] + ": " + pair[1]);
		}
	}

	const form = document.querySelector("form");
	form.addEventListener("submit", handleSubmit);
});