if(localStorage.getItem('visitCount')) {
    localStorage.setItem('visitCount', Number(localStorage.getItem('visitCount')) + 1);
} else {
    localStorage.setItem('visitCount', 1);
}
console.log(`This site has been visited ${localStorage.getItem('visitCount')} times.`);

document.getElementById("visitCount").textContent = localStorage.getItem('visitCount');
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

