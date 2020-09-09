// IMPORT
import { allTheCards } from "./list_pokemon.js";

// Holder & arrival declaration
const cardPicker = document.getElementById("pickACard");
const newCardsAlly = document.getElementById("fiveNewCardsAlly");
const newCardsEnnemy = document.getElementById("fiveNewCardsEnnemy")
const startGame = document.getElementById("startGame")


// Way to shuffle the decks to get a random hand
let allyDeck = [...allTheCards];
let ennemyDeck = [...allTheCards];

// Fonction to shuffle with a count click to shuffle it only once
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    };
};
let countClickShuffle = 0;

// Array that will be filled once the the two decks have been shuffled
let allyHand = [];
let ennemyHand = [];

//Shuffle of the Ally Deck and call it to get the Hands
function shuffleAllyDeck() {
    if (countClickShuffle < 1) {
        for (let i = 0; i < 100; i++) { shuffle(allyDeck) }; // console.log(allyDeck)};
        allyHand = allyDeck.slice(0, 5);
        console.log('Ally Hand >>> ', allyHand);
        return allyHand;
    }
    else {
        console.log("You can't shuffle the card deck more than one time");
    }
};

shuffleAllyDeck()
//Shuffle of the ennemy Deck and call it to get the hands
function shuffleEnnemyDeck() {
    if (countClickShuffle < 1) {
        for (let i = 0; i < 100; i++) { shuffle(ennemyDeck) }; // console.log(ennemyDeck)};
        ennemyHand = ennemyDeck.slice(0, 5);
        console.log('Ennemy Hand >>> ', ennemyHand);
        return ennemyHand;
    }
    else {
        console.log("You can't shuffle the card deck more than one time");
    }
};

shuffleEnnemyDeck()



// Setting of count click to avoid more than 5 cards for each player
// Function to pick the cards in your hands and add it to the html
let countClickPickedCard = 0

function fiveNewCardsAlly() {
    if (countClickPickedCard <= 5) {
        const newDiv = document.createElement("div");
        // console.log('you clicked it');
        newDiv.innerHTML =
        `<div id=${allyHand[countClickPickedCard -1].type} draggable="true" type="text" class="ally${allyHand[countClickPickedCard - 1].name}">
        <div class="name">
                <h1>${allyHand[countClickPickedCard - 1].name}</h1>
                <h1 id=ally${allyHand[countClickPickedCard - 1].name}>HP.${allyHand[countClickPickedCard - 1].hp}</h1>
            </div>
            <div class=${allyHand[countClickPickedCard - 1].type}>
            <img src=${allyHand[countClickPickedCard - 1].image}>
        </div>

        <div class="cardDescription">
            <div class="description">
                <h2>Att. spe.</h2>
                <h2>${allyHand[countClickPickedCard - 1].attackType}</h2>
            </div>

            <div class="description">
                <h2>Attack</h2>
                <h2>${allyHand[countClickPickedCard - 1].attack}</h2>
            </div>

            <div class="description">
                <h2>Healing</h2>
                <h2>${allyHand[countClickPickedCard - 1].healing}</h2>
            </div>
            <div class="description">
                <h2>Life Thief</h2>
                <h2>${allyHand[countClickPickedCard - 1].thief}</h2>
            </div>
        </div> 

    </div>`;
        newCardsAlly.appendChild(newDiv);
        return newDiv
    }
    else {
        console.log("You Cannot Get more than 5 cards you bitch")
    };
};

function fiveNewCardsEnnemy() {
    if (countClickPickedCard <= 5) {
        const newDiv = document.createElement("div");
        let cardToDisplay = ennemyHand[countClickPickedCard - 1]
        newDiv.innerHTML =
            `<div id=${cardToDisplay.type} type="text" class="player">
                <div class="name">
                    <h1>${cardToDisplay.name}</h1>
                    <h1 id=ennemy${cardToDisplay.name}>HP.${cardToDisplay.hp}</h1>
                </div>
                <div class=${cardToDisplay.type}>
                <img src=${cardToDisplay.image}>
            </div>

            <div class="cardDescription">
                <div class="description">
                    <h2>Att. spe.</h2>
                    <h2>${cardToDisplay.attackType}</h2>
                </div>

                <div class="description">
                    <h2>Attaque</h2>
                    <h2>${cardToDisplay.attack}</h2>
                </div>

                <div class="description">
                    <h2>Soin</h2>
                    <h2>${cardToDisplay.healing}</h2>
                </div>
                <div class="description">
                    <h2>Vol de vie</h2>
                    <h2>${cardToDisplay.thief}</h2>
                </div>
            </div> 

        </div>`;
        newCardsEnnemy.appendChild(newDiv);
    } else {
        console.log("You Cannot Get more than 5 cards you bitch")

    }
}

// Two event listener, one for the card to pick from the deck to the hands and one for dragging the newly created cards
function onCardPickerClick () {
    countClickPickedCard++;
    fiveNewCardsAlly()
    fiveNewCardsEnnemy()
}

// Fight Functions >>>
// Function  for spec attack with strenght and weaknesses
function attackSpe(playerOne, playerTwo) {
    if (playerOne[0].type === 'fire' && playerTwo[0].type ==='plant') {
        console.log(`${playerOne[0].name} has done an Att. Spe`)
        return playerTwo[0].hp = playerTwo[0].hp - (playerOne[0].attackType*1.2)
    }
    else if (playerOne[0].type === 'fire' && playerTwo.type ==='water') {
        console.log(`${playerOne[0].name} has done an Att. Spe`)
        return playerTwo[0].hp = playerTwo[0].hp - (playerOne[0].attackType*0.8)
    }
    else if (playerOne[0].type === 'water' && playerTwo.type ==='fire') {
        console.log(`${playerOne[0].name} has done an Att. Spe`)
        return playerTwo[0].hp = playerTwo[0].hp - (playerOne[0].attackType*1.2)
    }
    else if (playerOne[0].type === 'water' && playerTwo.type ==='rock') {
        console.log(`${playerOne[0].name} has done an Att. Spe`)
        return playerTwo[0].hp = playerTwo[0].hp - (playerOne[0].attackType*0.8)
    }
    else if (playerOne[0].type === 'plant' && playerTwo.type ==='rock') {
        console.log(`${playerOne[0].name} has done an Att. Spe`)
        return playerTwo[0].hp = playerTwo[0].hp - (playerOne[0].attackType*1.2)
    }
    else if (playerOne[0].type === 'plant' && playerTwo.type ==='fire') {
        console.log(`${playerOne[0].name} has done an Att. Spe`)
        return playerTwo[0].hp = playerTwo[0].hp - (playerOne[0].attackType*0.8)
    }
    else if (playerOne[0].type === 'rock' && playerTwo.type ==='water') {
        console.log(`${playerOne[0].name} has done an Att. Spe`)
        return playerTwo[0].hp = playerTwo[0].hp - (playerOne[0].attackType*1.2)
    }
    else if (playerOne[0].type === 'rock' && playerTwo.type ==='plant') {
        console.log(`${playerOne[0].name} has done an Att. Spe`)
        return playerTwo[0].hp = playerTwo[0].hp - (playerOne[0].attackType*0.8)
    }
    else {
        console.log(`${playerOne[0].name} has done an Att. Spe`)
        return playerTwo[0].hp = playerTwo[0].hp - playerOne[0].attackType
    }
};

// Function for the casual attack
function casualAttack(playerOne, playerTwo) {
    console.log(`${playerOne[0].name} has done an Att.`, `${playerOne[0].name} hp = ${playerOne[0].hp} & ${playerTwo[0].name} hp = ${playerTwo[0].hp}`)
    return playerTwo[0].hp = playerTwo[0].hp - playerOne[0].attack;
};

// Function for healing
function healing(playerOne) {
    console.log(`${playerOne[0].name} has been healed`, `${playerOne[0].name} hp = ${playerOne[0].hp}`)
    return playerOne[0].hp = playerOne[0].hp + playerOne[0].healing;
};

// Function for the attack that steal ennemy's HP 1/2
function stealYourEnnemy(playerOne, playerTwo) {
    console.log(`${playerOne[0].name} has stolen hp to ${playerTwo[0].name}`, `${playerOne[0].name} hp = ${playerOne[0].hp} & ${playerTwo[0].name} hp = ${playerTwo[0].hp}`)
    playerOne[0].hp = playerOne[0].hp + (playerOne[0].thief/2);
    return playerTwo[0].hp = playerTwo[0].hp - playerOne[0].thief
};

// Function for the Bot to attack randomly, AI they said...
function randomEnnemyAttack(ennemyHand, allyHand) {
    console.log(`${ennemyHand[0].name} has chosen its attack`);
    let n = Math.floor(Math.random() * 3 + 1); console.log('n = ',n);
    n === 1 ? casualAttack(ennemyHand, allyHand) : n === 2 ? stealYourEnnemy(ennemyHand, allyHand) : n === 3 ? attackSpe(ennemyHand, allyHand) : healing(ennemyHand);
}

// Function to replace dead pokemon
function deadToNewOne(player) {
    console.log(`${player[0].name} is dead`);
    return player.shift()
}

function chooseYourAction(allyHand, ennemyHand) {
    return new Promise((success, failure) => {
        window.onkeyup = (evt) => {
            console.log(evt);
            if (evt.keyCode === 37) {
                success(stealYourEnnemy(allyHand, ennemyHand));
                //console.log('Left');
            }
            else if (evt.keyCode === 38) {
                success(attackSpe(allyHand, ennemyHand));
                //console.log('Up');
            }

            else if (evt.keyCode === 39) {
                success(casualAttack(allyHand, ennemyHand));
                //console.log('Right');
            }
            else if (evt.keyCode === 40) {
                success(healing(allyHand));
                //console.log('Down');
            };
        };
    });
};

// function for the game and the turn by turn
async function game(allyHand, ennemyHand) {
    do {
            if (allyHand[0].speed < ennemyHand[0].speed) {
                console.log('Ennemy Starts')
                randomEnnemyAttack(ennemyHand, allyHand);
                document.querySelector(`#ally${allyHand[0].name}`).innerHTML = `HP.${allyHand[0].hp}`;

                if (allyHand[0].hp <= 0) {
                    document.querySelector(`#ally${allyHand[0].name}`).innerHTML = `HP.0`;
                    deadToNewOne(allyHand)
                };
    
                const resultat = await chooseYourAction(allyHand, ennemyHand);
                resultat;
                document.querySelector(`#ennemy${ennemyHand[0].name}`).innerHTML = `HP.${ennemyHand[0].hp}`;
     
                console.log(resultat);
                if (ennemyHand[0].hp <= 0) {
                    document.querySelector(`#ennemy${ennemyHand[0].name}`).innerHTML = `HP.0`;
                        deadToNewOne(ennemyHand)
                } else {'ennemy is still alive'}
            }
            else {
                console.log('ally starts')
                const resultat = await chooseYourAction(allyHand, ennemyHand);
                resultat;
                document.querySelector(`#ennemy${ennemyHand[0].name}`).innerHTML = `HP.${ennemyHand[0].hp}`

                if (ennemyHand[0].hp <= 0) {
                    document.querySelector(`#ennemy${ennemyHand[0].name}`).innerHTML = `HP.0`;
                    deadToNewOne(ennemyHand)

                    };
                randomEnnemyAttack(ennemyHand,allyHand);
                document.querySelector(`#ally${allyHand[0].name}`).innerHTML = `HP.${allyHand[0].hp}`;

                
                if (allyHand[0].hp <= 0){
                    document.querySelector(`#ally${allyHand[0].name}`).innerHTML = `HP.0`;
                    deadToNewOne(allyHand)
                };
            
            }

    }
    while (allyHand.length > 0 || ennemyHand.length > 0)
};

function executeGame() {
    game(allyHand, ennemyHand)
}
startGame.addEventListener("click", executeGame)  
cardPicker.addEventListener("click", onCardPickerClick)




