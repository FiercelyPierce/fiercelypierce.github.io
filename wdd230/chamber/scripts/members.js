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
  const newSection = document.createElement("section");
  newSection.classList.add("memberLinks");

  links.forEach((memberObj) => {
    const memberHeading = document.createElement("h3");
    memberHeading.textContent = memberObj.membership + " Member";

    const memberName = document.createElement("p");
    memberName.textContent = "Name: " + memberObj.name;
    const memberAddress = document.createElement("p");
    memberAddress.textContent = "Address: " + memberObj.address;
    const memberPhone = document.createElement("p");
    memberPhone.textContent = "Phone: " + memberObj.phone;
    const memberWebsite = document.createElement("a");
    memberWebsite.href = memberObj.website;
    memberWebsite.textContent = "Website: " + memberObj.website;
    const memberImage = document.createElement("img");
    memberImage.src = memberObj.image;

    container.appendChild(title);
    container.appendChild(newSection);
    newSection.appendChild(memberHeading);
    newSection.appendChild(memberName);
    newSection.appendChild(memberAddress);
    newSection.appendChild(memberPhone);
    newSection.appendChild(memberWebsite);
    newSection.appendChild(memberImage);
  });
}

getLinks();