const membersURL = "data/members.json";

async function getSpotlightMembers() {
  const response = await fetch(membersURL);
  const data = await response.json();
  console.log(data);

  displaySpotlightMembers(data);
}

function displaySpotlightMembers(members) {
  const members = members.members;
  const container = document.getElementById("spotlightContainer");

  members.forEach((memberObj) => {
    if ((memberObj.membership === "Gold") || (memberObj.membership === "Silver")) {
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
      memberWebsite.textContent = memberObj.website;
      const memberImage = document.createElement("img");
      memberImage.src = "images/" + memberObj.image;
      memberImage.alt = memberObj.name;
      memberImage.width = "300";
      memberImage.height = "200";

      container.appendChild(memberName);
      newSection.appendChild(memberHeading);
      newSection.appendChild(memberImage);
      newSection.appendChild(memberAddress);
      newSection.appendChild(memberPhone);
      newSection.appendChild(memberWebsite);
    }
  });
}

getSpotlightMembers();
