const banner = document.querySelector('.banner');
const currentDay = new Date().getDay();

if ((currentDay === 1) || (currentDay === 2) || (currentDay === 3)){
  const label = document.createElement('label');

  const p = document.createElement('p');
  const input = document.createElement('input');

  banner.appendChild(label);
  label.setAttribute('for', 'banner-button');
  banner.appendChild(p);
  p.textContent = 'Join us for the Chamber of Commerce Meet and Greet on Wednesday at 7:00 PM!';
  label.appendChild(input);
  input.setAttribute('type', 'button');
  input.setAttribute('value', '❌');

  label.addEventListener('click', () => {
    banner.style.display = 'none';
  });
}