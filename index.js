// IMPORT 
import { allTheCards } from "./list_pokemon.js"
console.log(allTheCards)
// Holder & arrival declaration
const cardPicker = document.getElementById("pickACard");
const yourDeck = document.getElementById("fiveNewCards");



// Decks copies and shuffles with buttons [THAT'S GOOOOOOOD BROOOOOO]
const shuffler = document.getElementById('shuffle')
let allyDeck = [...allTheCards];
let ennemyDeck = [...allTheCards];
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
};
let countClickShuffle = 0;

function shuffleTheDecks() {
    if (countClickShuffle < 1) {
        for (let i=0; i < 100; i++) 
        {shuffle(allyDeck); console.log(allyDeck)};
        let allyHand = allyDeck.slice(0,5);
        console.log(allyHand)
        return allyHand
    }
    else 
    {
        console.log('nop')
    }
}
shuffler.onclick = function(){
    countClickShuffle++;
}
// Function to know which player will attack first // Have to ask teacher for help
const reducer = (acc, currVal) => acc + currVal;
function defineSpeed(hand) {
    hand.reduce(reducer, 0)
    return acc
}

defineSpeed(allyHand)
defineSpeed(ennemyHand)

function whoStarts() {
    if (defineSpeed(allyHand) < defineSpeed(ennemyHand))
    {console.log('the ennemy start')}
    else {console.log('You can start')} 
};
whoStarts(); */

let allyHand = allyDeck.slice(0,65;
console.log(allyHand)
let ennemyHand = ennemyDeck.slice(0,5);


//ennemyDeck.map(toHand(ennemyHand, ennemyDeck));
console.log("Ally Hand >>> ", allyHand)
console.log("Ennemy Hand >>> ", ennemyHand)


shuffler.addEventListener("click", shuffleTheDecks);
console.log("The player Deck >>> ", allyDeck);

// Function of what appears 
let countClickPickedCard = 0


function fiveNewCards() {
    if (countClickPickedCard <= 5) 
    {
    const newDiv = document.createElement("div");
    console.log('you clicked it');


    // newDiv.innerHTML = `<div id="picked${countClickPickedCard}" class="deck"> <p class="pokemonName"></p> <img src="./images/image${Math.round((Math.random()*35)+1)}.png"></div>`;
    newDiv.innerHTML = 
    `<div class="deck">
        <div class=${allyDeck[countClickPickedCard-1].type} id="picked${countClickPickedCard}">
            <p>HP ${allyDeck[countClickPickedCard-1].hp}</p>
            <img src=${allyDeck[countClickPickedCard-1].image}>
        </div>
        <h1>${allyDeck[countClickPickedCard-1].name}</h1>
    </div>`;

    // console.log(cardPicker)
    yourDeck.appendChild(newDiv);
    // console.log(countClickPickedCard)

    }
    else 
    {
       console.log("You Cannot Get more than 5 cards you bitch")
    };
};


allyHand.push(allyDeck[countClickPickedCard-1])
console.log(allyHand)

//nconst theChosenOne = document.getElementById("picked1")

cardPicker.onclick = function(){
    countClickPickedCard++;
}


// pour les fleches console.dir($0)
//EVENT


//function clickForEachCardInGame () {
//    document.addEventListener("click", bringForward)
//}

cardPicker.addEventListener("click", fiveNewCards);