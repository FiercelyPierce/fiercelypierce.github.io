const linksURL = "data/members.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data);
}

function displayLinks(members) {
  const links = members.members;
  const container = document.getElementById("linksContainer");
  const title = document.createElement("h2");
  title.textContent = "Members";
  const membersSection = document.createElement("section");
  membersSection.classList.add("grid");

  container.appendChild(title);
  container.appendChild(membersSection);

  links.forEach((memberObj) => {
    const newSection = document.createElement("section");
    const memberName = document.createElement("h3");
    memberName.textContent = memberObj.name;
    const memberHeading = document.createElement("p");
    memberHeading.textContent = memberObj.membership + " Member";
    const memberAddress = document.createElement("p");
    memberAddress.textContent = "Address: " + memberObj.address;
    const memberPhone = document.createElement("p");
    memberPhone.textContent = "Phone: " + memberObj.phone;
    const memberWebsite = document.createElement("a");
    memberWebsite.href = memberObj.website;
    memberWebsite.textContent = "Website: " + memberObj.website;
    const memberImage = document.createElement("img");
    memberImage.src = "images/" + memberObj.image;
    memberImage.alt = memberObj.name;
    memberImage.width = "300";
    memberImage.height = "200";

    membersSection.appendChild(newSection);
    newSection.appendChild(memberName);
    newSection.appendChild(memberHeading);
    newSection.appendChild(memberImage);
    newSection.appendChild(memberAddress);
    newSection.appendChild(memberPhone);
    newSection.appendChild(memberWebsite);
  });
}

getLinks();