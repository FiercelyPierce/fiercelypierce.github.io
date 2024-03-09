const baseURL = "https://fiercelypierce.github.io/wdd230/";
const linksURL = "data/links.json";

async function getLinks() {
  const response = await fetch(baseURL + linksURL);
  const data = await response.json();
  displayLinks(data);
}

function displayLinks(weeks) {
  weeks.forEach(week => {
    let header = document.createElement("h4");
    let list = document.createElement("ul");
    let item = document.createElement("li");
    let anchor = document.createElement("a");
    header.textContent = week.lesson;
    anchor.setAttribute("href", week.links.url);
    anchor.textContent = week.links.title;
    item.appendChild(anchor);
    list.appendChild(item);
  });
}

getLinks();