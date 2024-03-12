const linksURL = "data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data);
}

function displayLinks(weeks) {
  const links = weeks.lessons;
  // Get the container element where links will be displayed
  const container = document.getElementById("linksContainer");
  // Loop through each week
  links.forEach((weekObj) => {
      const weekHeading = document.createElement("h4");
      weekHeading.textContent = "Lesson " + weekObj.lesson;

      const linkList = document.createElement("ul");
      linkList.classList.add("lessonlinks");

      weekObj.links.forEach((link) => {
          const listItem = document.createElement("li");
          const linkElement = document.createElement("a");
          linkElement.href = link.url;
          linkElement.textContent = link.title;
          listItem.appendChild(linkElement);
          linkList.appendChild(listItem);
      });
      container.appendChild(weekHeading);
      container.appendChild(linkList);
  });
}

getLinks();