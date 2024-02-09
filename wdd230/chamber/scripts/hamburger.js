
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#hamburger');
const navigationLink = document.querySelector('header a');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
	navigationLink.classList.toggle('active');
});