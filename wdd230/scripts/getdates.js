if(localStorage.getItem('visitCount')) {
    localStorage.setItem('visitCount', Number(localStorage.getItem('visitCount')) + 1);
} else {
    localStorage.setItem('visitCount', 1);
}

document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
document.getElementById("visitCount").textContent = localStorage.getItem('visitCount');
