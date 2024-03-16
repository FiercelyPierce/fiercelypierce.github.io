const banner = document.querySelector('.banner');
const closeBanner = document.getElementById('banner-button');

closeBanner.addEventListener('click', () => {
  banner.style.display = 'none';
});