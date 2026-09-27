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
        //If the event is saved, remove the border and switch the text to Save Event, and remove it from the savedCards set
        if (savedCards.has(card)) {
            savedCards.delete(card);
            button.textContent = "Save Event";
            card.classList.remove("saved");
        }
        //If the event is not saved, add it to savedCards, switch the button to Remove Event, and add the border to it
        else {
            savedCards.add(card);
            button.textContent = "Remove Event";
            card.classList.add("saved");
        }
        showSavedEvents();
    });
});

function showSavedEvents(){
    while (savedCardList.firstChild){
        savedCardList.removeChild(savedCardList.firstChild);
    }
    //displays the message if there are no saved events
    if (savedCards.size === 0){
        const message = document.createElement("p");
        message.textContent = "No Saved Events, Please Save One!";
        savedCardList.appendChild(message);
        return;
    }
    //for each card, copy the name and date off of it and chuck it in a div
    savedCards.forEach(card => {
        const eventName = card.querySelector("h3");
        const eventDate = card.querySelector("p");

        const savedEvent = document.createElement("div");

        savedEvent.appendChild(eventName.cloneNode(true));
        savedEvent.appendChild(eventDate.cloneNode(true));

        savedCardList.appendChild(savedEvent);
    });
}

