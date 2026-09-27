//selects all the cards in the page
const cards  = document.querySelectorAll(".event-card");


//creates a spot on the page and ties that spot to teh cards saved
const savedSpot = document.createElement("section");
savedSpot.id = "saved-cards";

const header = document.createElement("h2");
header.textContent = "Saved Events";

const savedCardList = document.createElement("div");
savedCardList.className = "saved-card-list";

savedSpot.appendChild(header);
savedSpot.appendChild(savedCardList);
document.body.appendChild(savedSpot);



