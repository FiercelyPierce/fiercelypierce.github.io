const membersURL = "data/members.json";

async function getSpotlightMembers() {
  const response = await fetch(membersURL);
  const data = await response.json();

  displaySpotlightMembers(data);
}

function displaySpotlightMembers(members) {
  const spotlightMembers = members.members;
  const spotlightSection = document.querySelector(".spotlight");
  const container = document.getElementById("spotlightContainer");
  const title = document.createElement("h2");
  title.textContent = "Spotlight Members";
  const newDiv = document.createElement("div");
  newDiv.classList.add("grid");
  newDiv.id = "spotlightMembers";

  spotlightSection.appendChild(title);
  spotlightSection.appendChild(newDiv);

  spotlightMembers.forEach((memberObj) => {
    if ((memberObj.membership === "Gold") || (memberObj.membership === "Silver")) {
      const memberSection = document.createElement("div");
      const memberName = document.createElement("h3");
      memberName.textContent = memberObj.name;
      const memberHeading = document.createElement("p");
      memberHeading.textContent = memberObj.membership + " Member";
      const memberAddress = document.createElement("p");
      memberAddress.textContent = memberObj.address;
      const memberPhone = document.createElement("p");
      memberPhone.textContent = memberObj.phone;
      const memberWebsite = document.createElement("a");
      memberWebsite.href = memberObj.website;
      memberWebsite.textContent = "Website Link";
      const memberImage = document.createElement("img");
      memberImage.src = "images/" + memberObj.image;
      memberImage.alt = memberObj.name;
      memberImage.width = "300";
      memberImage.height = "200";

      newDiv.appendChild(memberSection);
      memberSection.appendChild(memberName);
      memberSection.appendChild(memberHeading);
      memberSection.appendChild(memberImage);
      memberSection.appendChild(memberAddress);
      memberSection.appendChild(memberPhone);
      memberSection.appendChild(memberWebsite);
    }
  });
}

getSpotlightMembers();
