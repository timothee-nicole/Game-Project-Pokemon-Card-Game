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
}
function shuffleTheDecks() {
    shuffle(allyDeck);
    console.log (allyDeck[0], allyDeck[1], allyDeck[2], allyDeck[3], allyDeck[4])
    return allyDeck
}


shuffler.addEventListener("click", shuffleTheDecks)
console.log("The player Deck >>> ", allyDeck)

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
    return countClickPickedCard
    }
    else 
    {
       console.log("You Cannot Get more than 5 cards you bitch")
    };
};

const theChosenOne = document.getElementById("picked1")

cardPicker.onclick = function(){
    countClickPickedCard++;
}

// pour les fleches console.dir($0)
// redéfinir hand et deck

//let countClickOnDeckFiveCard = 0
//cardOfDeck.onclick = function(){
//    countClick++;
//}

function bringForward() {
    console.log('Why the hell did you click me ?')

}



//EVENT


//function clickForEachCardInGame () {
//    document.addEventListener("click", bringForward)
//}

cardPicker.addEventListener("click", fiveNewCards);
// Events on click with the cards in your hands

// probleme liste à mettre un for each (pareil pour tous ce qui n'est pas juste un objet)

//cardOfDeck.forEach(clickForEachCardInGame);


