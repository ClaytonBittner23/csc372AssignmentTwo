//selects all the cards in the page
const cards  = document.querySelectorAll(".event-card");

//Creates a set for the saved cards
const savedCards = new Set();

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


//Adding the button to each event card, if button is clicked, switch to remove event
cards.forEach(card => {
    const button = document.createElement("button");

    button.type = "button";
    button.textContent = "Save Event";

    card.appendChild(button);

    button.addEventListener("click", () => {
        if (savedCards.has(card)){
            savedCards.delete(card);
            button.textContent = "Save Event"
        }
        else{
            savedCards.add(card);
            button.textContent = "Remove Event";
        }
    });
});



