const baseURL = "https://fiercelypierce.github.io/wdd230/";
const linksURL = "data/links.json";

async function getLinks() {
  const response = await fetch(baseURL + linksURL);
  const data = await response.json();
  displayLinks(data);
}

function displayLinks(data) {
  const links = data.links;
  const list = document.querySelector(".lessonlink");
  links.forEach(link => {
    let item = document.createElement("li");
    let anchor = document.createElement("a");
    anchor.setAttribute("href", link.url);
    anchor.textContent = link.title;
    item.appendChild(anchor);
    list.appendChild(item);
  });
}

getLinks();