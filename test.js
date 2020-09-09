import {fiveNewCards} from "./clean.js"
const cardPicker = document.getElementById("pickACard");
cardPicker.addEventListener("click", () => {
    const newCard = fiveNewCards();
    newCard.ondrag = dragstart_handler;
});
const allyBattleSpot = document.querySelector("#target")
allyBattleSpot.addEventListener("drop", drop_handler);

// function to start the drag of the card
function dragstart_handler(ev) {
    console.log(ev);
    ev.preventDefault();
    ev.dataTransfer.setData("text/html", ev.target.outerHTML);
    ev.dataTransfer.dropEffect = "move";
};
// Function to drop the card in the battleScope Ally Div
function drop_handler(ev) {
    ev.preventDefault();
    const newCard = fiveNewCards();
    console.log(ev, ev.target);
    ev.target.appendChild(newCard);
};