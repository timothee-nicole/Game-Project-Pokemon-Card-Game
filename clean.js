// IMPORT
import { allTheCards } from "./list_pokemon.js"

// Holder & arrival declaration
const cardPicker = document.getElementById("pickACard");
const yourDeck = document.getElementById("fiveNewCards");

// Way to shuffle the decks to get a random hand
const shuffler = document.getElementById('shuffle')
let allyDeck = [...allTheCards];
let ennemyDeck = [...allTheCards];
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function shuffleAllyDeck() {
    for (let i=0; i < 100; i++) 
    {shuffle(allyDeck); console.log(allyDeck)};
    let allyHand = allyDeck.slice(0,5);
    console.log(allyHand)
    return allyHand
}
function shuffleEnnemyDeck() {
    for (let i=0; i < 100; i++) 
    {shuffle(ennemyDeck); console.log(ennemyDeck)};
    let ennemyHand = ennemyDeck.slice(0,5);
    console.log(ennemyHand)
    return ennemyHand
}


/* shuffleTheDecks(allyDeck)
console.log("The player Deck >>> ", allyDeck)
shuffleTheDecks(ennemyDeck)
console.log("The ennemy Deck >>> ", ennemyDeck) */


// Function to pick the cards in your hands and add it to the html
let countClickPickedCard = 0

function fiveNewCards() {
    if (countClickPickedCard <= 5) 
    {
        const newDiv = document.createElement("div");
        console.log('you clicked it');
        newDiv.innerHTML = 
        `<div class="deck">
            <div class=${allyDeck[countClickPickedCard-1].type} id="picked${countClickPickedCard}">
                <p>HP ${allyDeck[countClickPickedCard-1].hp}</p>
                <img src=${allyDeck[countClickPickedCard-1].image}>
            </div>
            <h1>${allyDeck[countClickPickedCard-1].name}</h1>
        </div>`;
        yourDeck.appendChild(newDiv);
        return countClickPickedCard
    }
    else 
    {
       console.log("You Cannot Get more than 5 cards you bitch")
    };
};

// Function to set the hand of both the ally and the ennemy


// Event Listener
cardPicker.addEventListener("click", fiveNewCards);
shuffler.addEventListener("click", shuffleAllyDeck);
shuffler.addEventListener("click", shuffleEnnemyDeck);