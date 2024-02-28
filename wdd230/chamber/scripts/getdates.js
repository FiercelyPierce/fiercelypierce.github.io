if (typeof localStorage !== 'undefined') {
  const lastVisit = localStorage.getItem('lastVisit');
  const currentDate = new Date();

  if (!lastVisit) {
    document.getElementById("sidebarVisit").textContent = "Welcome! Let us know if you have any questions.";
  } else {
    const timeDiff = currentDate - new Date(lastVisit);
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    if (daysDiff < 1) {
      document.getElementById("sidebarVisit").textContent = "Back so soon! Awesome!";
    } else {
      const message = `You last visited ${daysDiff} ${daysDiff === 1 ? 'day' : 'days'} ago.`;
      document.getElementById("sidebarVisit").textContent = message;
    }
  }
  localStorage.setItem('lastVisit', currentDate);
}

document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
