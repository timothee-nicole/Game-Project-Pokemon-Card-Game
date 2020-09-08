// IMPORT
import { allTheCards } from "./list_pokemon.js";

// Holder & arrival declaration
const cardPicker = document.getElementById("pickACard");
const yourDeck = document.getElementById("fiveNewCards");
const ennemyBattleSpot = document.querySelector(".battleSpot .ennemy")

// Way to shuffle the decks to get a random hand
const shuffler = document.getElementById('shuffle');
let allyDeck = { name: "foo", cards: [...allTheCards] };
let ennemyDeck = { name: "ennemy", cards: [...allTheCards] };

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
        for (let i = 0; i < 100; i++) { shuffle(allyDeck.cards) }; // console.log(allyDeck)};
        allyHand = allyDeck.cards.slice(0, 5);
        console.log('Ally Hand >>> ', allyHand);
        return allyHand;
    }
    else {
        console.log("You can't shuffle the card deck more than one time");
    }
};

function shuffleEnnemyDeck() {
    if (countClickShuffle < 1) {
        for (let i = 0; i < 100; i++) { shuffle(ennemyDeck.cards) }; // console.log(ennemyDeck)};
        ennemyHand = ennemyDeck.cards.slice(0, 5);
        console.log('Ennemy Hand >>> ', ennemyHand);
        return ennemyHand;
    }
    else {
        console.log("You can't shuffle the card deck more than one time");
    }
};


/*function shuffleDeck(deck) {
    const tmp = [];
    if (countClickShuffle < 1) {
        for (let i = 0; i < 100; i++) { shuffle(deck.cards) }; // console.log(allyDeck)};
        tmp = deck.cards.slice(0, 5);
        console.log(deck.name, tmp);
        return tmp;
    }
    else {
        console.log("You can't shuffle the card deck more than one time");
    }
};*/

shuffler.onclick = function () {
    countClickShuffle += 0.5;
}
// Function to know which player will attack first // Have to ask teacher for help



// Function to pick the cards in your hands and add it to the html
let countClickPickedCard = 0

function fiveNewCards() {
    if (countClickPickedCard <= 5) {
        const newDiv = document.createElement("div");
        console.log('you clicked it');
        newDiv.innerHTML =
            `<div id=${allyDeck.cards[countClickPickedCard - 1].type} draggable="true" type="text" class="player">
            <div class="name">
                <h1>${allyDeck.cards[countClickPickedCard - 1].name}</h1>
                <h1>HP.${allyDeck.cards[countClickPickedCard - 1].hp}</h1>
            </div>
            <div class=${allyDeck.cards[countClickPickedCard - 1].type}>
            <img src=${allyDeck.cards[countClickPickedCard - 1].image}>
        </div>

        <div class="cardDescription">
            <div class="description">
                <h2>Att. spe.</h2>
                <h2>${allyDeck.cards[countClickPickedCard - 1].attackType}</h2>
            </div>

            <div class="description">
                <h2>Attaque</h2>
                <h2>${allyDeck.cards[countClickPickedCard - 1].attack}</h2>
            </div>

            <div class="description">
                <h2>Soin</h2>
                <h2>${allyDeck.cards[countClickPickedCard - 1].healing}</h2>
            </div>
            <div class="description">
                <h2>Vol de vie</h2>
                <h2>${allyDeck.cards[countClickPickedCard - 1].thief}</h2>
            </div>
        </div> 

    </div>`;
        yourDeck.appendChild(newDiv);
        return newDiv
    }
    else {
        console.log("You Cannot Get more than 5 cards you bitch")
    };
};
cardPicker.onclick = function () {
    countClickPickedCard++;
}

// Function to choose the player still to work on tomorrow
// Turn 



// Event Listener



/* shuffler.addEventListener("click", () => ennemyHand = shuffleDeck(ennemyDeck));
shuffler.addEventListener("click", () => allyHand = shuffleDeck(allyDeck));
*/
shuffler.addEventListener("click", shuffleAllyDeck);
shuffler.addEventListener("click", shuffleEnnemyDeck);

cardPicker.addEventListener("click", () => {
    const newCard = fiveNewCards();
    newCard.ondrag = dragstart_handler;
});
const allyBattleSpot = document.querySelector("#target");
allyBattleSpot.addEventListener("drop", drop_handler)

document.onkeyup = (evt) => {
    if (evt.keyCode === 37) {
        console.log('Left')
    }
    else if (evt.keyCode === 38) {
        console.log('Up')
    }

    else if (evt.keyCode === 39) {
        console.log('Right')
    }
    else if (evt.keyCode === 40) {
        console.log('Down')
    }
};



function dragstart_handler(ev) {
    console.log(ev);
    ev.preventDefault();
    ev.dataTransfer.setData("text/html", ev.target.outerHTML);
    ev.dataTransfer.dropEffect = "move";
}

function drop_handler(ev) {
    ev.preventDefault();
    console.log(ev)
    var data = ev.dataTransfer.getData("text/html");
    ev.target.innerHTML = data;
}


let allyPlayer;
let ennemyPlayer;
function displayEnnemyCard() {
    setTimeout(() => {
        ennemyPlayer.unshift(ennemyHand[0]);
        ennemyHand.shift()
    }, 2000);
    const toRemove = document.querySelector("toRemove");
    toRemove.remove();
}

function chooseYourAction(evt) {
    return new Promise((success, failure) => {
        window.onkeyup = (evt) => {
            if (evt.keyCode === 37) {
                success(stealYourEnnemy);
                console.log('Left')
            }
            else if (evt.keyCode === 38) {
                success(attackSpe);
                console.log('Up')
            }

            else if (evt.keyCode === 39) {
                success(casualAttack);
                console.log('Right')
            }
            else if (evt.keyCode === 40) {
                success(healing);
                console.log('Down')
            };
        };
    });
};


function EnnemyDisplayCard() {
    const newDiv = document.createElement("div");
    newDiv.innerHTML =
        `<div id=${ennemyPlayer.cards.type} draggable="true" ondragstart="dragstart_handler(event)" type="text" class="player">
            <div class="name">
                <h1>${ennemyPlayer.cards.name}</h1>
                <h1>HP.${ennemyPlayer.cards.hp}</h1>
            </div>
            <div class=${ennemyPlayer.cards.type}>
            <img src=${ennemyPlayer.cards.image}>
        </div>

        <div class="cardDescription">
            <div class="description">
                <h2>Att. spe.</h2>
                <h2>${ennemyPlayer.cards.attackType}</h2>
            </div>

            <div class="description">
                <h2>Attaque</h2>
                <h2>${ennemyPlayer.cards.attack}</h2>
            </div>

            <div class="description">
                <h2>Soin</h2>
                <h2>${ennemyPlayer.cards.healing}</h2>
            </div>
            <div class="description">
                <h2>Vol de vie</h2>
                <h2>${ennemyPlayer.cards.thief}</h2>
            </div>
        </div> 

    </div>`;
    ennemyBattleSpot.appendChild(newDiv);
};
