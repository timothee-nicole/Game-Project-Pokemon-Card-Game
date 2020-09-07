// IMPORT
import { allTheCards } from "./list_pokemon.js";

// Holder & arrival declaration
const cardPicker = document.getElementById("pickACard");
const yourDeck = document.getElementById("fiveNewCards");
const player = document.getElementById("inHand1");

// Way to shuffle the decks to get a random hand
const shuffler = document.getElementById('shuffle');
let allyDeck = [...allTheCards];
let ennemyDeck = [...allTheCards];

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    };
};
let countClickShuffle = 0;
let allyHand = [];
let ennemyHand = [];

function shuffleAllyDeck() {
    if (countClickShuffle < 1) {
        for (let i=0; i < 100; i++) 
        {shuffle(allyDeck)}; // console.log(allyDeck)};
        allyHand = allyDeck.slice(0,5);
        console.log('Ally Hand >>> ',allyHand);
        return allyHand;
    }
    else 
    {
        console.log("You can't shuffle the card deck more than one time");
    }
};

function shuffleEnnemyDeck() {
    if (countClickShuffle < 1) {
        for (let i=0; i < 100; i++) 
        {shuffle(ennemyDeck)}; // console.log(ennemyDeck)};
        ennemyHand = ennemyDeck.slice(0,5);
        console.log('Ennemy Hand >>> ',ennemyHand);
        return ennemyHand;
    }
    else 
    {
        console.log("You can't shuffle the card deck more than one time");
    }
};

shuffler.onclick = function(){
    countClickShuffle += 0.5;
}
// Function to know which player will attack first // Have to ask teacher for help



// Function to pick the cards in your hands and add it to the html
let countClickPickedCard = 0

function fiveNewCards() {
    if (countClickPickedCard <= 5) 
    {
        const newDiv = document.createElement("div");
        console.log('you clicked it');
        newDiv.innerHTML = 
        `<div id=${allyDeck[countClickPickedCard-1].type} class="player">
            <div class="name">
                <h1>${allyDeck[countClickPickedCard-1].name}</h1>
                <h1>HP.${allyDeck[countClickPickedCard-1].hp}</h1>
            </div>
            <div class=${allyDeck[countClickPickedCard-1].type}>
            <img src=${allyDeck[countClickPickedCard-1].image}>
        </div>

        <div class="cardDescription">
            <div class="description">
                <h2>Att. spe.</h2>
                <h2>${allyDeck[countClickPickedCard-1].attackType}</h2>
            </div>

            <div class="description">
                <h2>Attaque</h2>
                <h2>${allyDeck[countClickPickedCard-1].attack}</h2>
            </div>

            <div class="description">
                <h2>Soin</h2>
                <h2>${allyDeck[countClickPickedCard-1].healing}</h2>
            </div>
            <div class="description">
                <h2>Vol de vie</h2>
                <h2>${allyDeck[countClickPickedCard-1].thief}</h2>
            </div>
        </div>  
    </div>`;
        yourDeck.appendChild(newDiv);
        return countClickPickedCard
    }
    else 
    {
       console.log("You Cannot Get more than 5 cards you bitch")
    };
};
cardPicker.onclick = function(){
    countClickPickedCard++;
}

// Function to choose the player still to work on tomorrow
let ally = [];
let ennemy = [];
// Turn 
/* function turn(clbk) {
if (ally.speed > ennemy.speed) {
    clbk(allyAttack)
}
else {
    clbk(ennemyAttack)
}}; */


// Event Listener
cardPicker.addEventListener("click", fiveNewCards);
shuffler.addEventListener("click", shuffleAllyDeck);
shuffler.addEventListener("click", shuffleEnnemyDeck);
