
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#hamburger');
const navigationLink = document.querySelector('header a');
const applyButton = document.querySelector('.call-to-action');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
	navigationLink.classList.toggle('active');
});