const baseURL = "https://fiercelypierce.github.io/wdd230/";
const linksURL = "data/links.json";

async function getLinks() {
  const response = await fetch(baseURL + linksURL);
  const data = await response.json();
  console.log(data);
}

getLinks();