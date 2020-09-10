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
        for (let i = 0; i < 1296; i++) { shuffle(allyDeck) }; // console.log(allyDeck)};
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
        `<div id=${allyHand[countClickPickedCard -1].type} draggable="true" type="text" class=ally${allyHand[countClickPickedCard -1].id}>
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
            `<div id=${cardToDisplay.type} type="text" class=ennemy${ennemyHand[countClickPickedCard -1].id}>
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
/*function healing(playerOne) {
    console.log(`${playerOne[0].name} has been healed`, `${playerOne[0].name} hp = ${playerOne[0].hp}`)
    return playerOne[0].hp = playerOne[0].hp + playerOne[0].healing;
};*/

// Function for the attack that steal ennemy's HP 1/2
function stealYourEnnemy(playerOne, playerTwo) {
    console.log(`${playerOne[0].name} has stolen hp to ${playerTwo[0].name}`, `${playerOne[0].name} hp = ${playerOne[0].hp} & ${playerTwo[0].name} hp = ${playerTwo[0].hp}`)
    playerOne[0].hp = playerOne[0].hp + (playerOne[0].thief/2);
    return playerTwo[0].hp = playerTwo[0].hp - playerOne[0].thief
};

// Function for the Bot to attack randomly, AI they said...
function randomEnnemyAttack(ennemyHand, allyHand) {
    console.log(`${ennemyHand[0].name} has chosen its attack`);
    let n = Math.floor(Math.random() * 2 + 1); console.log('n = ',n);
    n === 1 ? casualAttack(ennemyHand, allyHand) : n === 2 ? stealYourEnnemy(ennemyHand, allyHand) : attackSpe(ennemyHand, allyHand) // :  healing(ennemyHand);
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
            /*else if (evt.keyCode === 40) {
                success(healing(allyHand));
                //console.log('Down');
            };*/
        };
    });
};

// function for the game and the turn by turn
async function game(allyHand, ennemyHand) {
    document.querySelector(".textInput").textContent = `The game starts ! Please, choose your attack!`
    do {
            if (allyHand[0].speed < ennemyHand[0].speed) {
                console.log('Ennemy Starts')
                randomEnnemyAttack(ennemyHand, allyHand);
                document.querySelector(`#ally${allyHand[0].name}`).innerHTML = `HP.${allyHand[0].hp}`;

                if (allyHand[0].hp <= 0) {
                    document.querySelector(`#ally${allyHand[0].name}`).innerHTML = `HP.0`;
                    deadToNewOne(allyHand)
                };

                    let resultat;
                    if (allyHand.length) {
                        resultat = await chooseYourAction(allyHand, ennemyHand)
                        resultat;
                        document.querySelector(`#ennemy${ennemyHand[0].name}`).innerHTML = `HP.${ennemyHand[0].hp}`;

                        if (ennemyHand[0].hp <= 0) {
                            document.querySelector(`#ennemy${ennemyHand[0].name}`).innerHTML = `HP.0`;
                            deadToNewOne(ennemyHand)
                        
                            if (ennemyHand.length) {
                                document.querySelector(".textInput").textContent = `James' Pokemon was faster than ${allyHand[0].name}. He has attacked your ${allyHand[0].name} which is now at HP.${allyHand[0].hp}. But it seems that even if ${allyHand[0].name} partied with you, he is still able to kick the ass of James' Pokemon, and return its HP to ${ennemyHand[0].hp}. Hold on the fight can continue! Please, choose your next attack!`
                            }
                            else {
                            document.querySelector(".textInput").textContent = "Looks like you are in a bad Posture"
                            } 
                        } 
                        else {
                            document.querySelector(".textInput").textContent = `James' Pokemon was faster than your Pokemon. He has attacked your Pokemon which is now dead. But it seems that even if your Pokemons partied with you, they are still able to kick the ass of James' Pokemon, and return its HP to ${ennemyHand[0].hp}. Hold on the fight can continue with the others! Please, choose your next attack with ${allyHand[0].name}!`
                        }
                    }
            }    
            else {
                console.log('Ally starts')
                const resultat = await chooseYourAction(allyHand, ennemyHand);
                resultat;
                document.querySelector(`#ennemy${ennemyHand[0].name}`).innerHTML = `HP.${ennemyHand[0].hp}`

                if (ennemyHand[0].hp <= 0) {
                    document.querySelector(`#ennemy${ennemyHand[0].name}`).innerHTML = `HP.0`;
                    deadToNewOne(ennemyHand)
                    };

                if (ennemyHand.length) { 
                    randomEnnemyAttack(ennemyHand,allyHand);
                    document.querySelector(`#ally${allyHand[0].name}`).innerHTML = `HP.${allyHand[0].hp}`;

                
                    if (allyHand[0].hp <= 0){
                    document.querySelector(`#ally${allyHand[0].name}`).innerHTML = `HP.0`;
                    deadToNewOne(allyHand);

                        if (allyHand.length) {
                            document.querySelector(".textInput").textContent = `Your Pokemon was faster  thanJames' ${ennemyHand[0].name}. Your pokemon has attacked ${ennemyHand[0].name}  which is now at HP.${ennemyHand[0].hp}. But it seems that James trained well its {ennemyHand[0].name}, and he has killed your Pokémon. Hold on the fight cancontinue with the others! Please, choose your next attack!`
                        }
                        else {
                        document.querySelector(".textInput").textContent = "Looks like James is in a bad Posture"
                        }
                     
                    }
                    else {
                    document.querySelector(".textInput").textContent = `Your Pokemon Was faster than James ${ennemyHand[0].name}. Your pokemon has attacked ${ennemyHand[0].name}   which is now at HP.${ennemyHand[0].hp}.But it seems that James trained well its ${ennemyHand[0].name}, and he hasreturn ${allyHand[0].name} severe damages. Hold on the fight can continue! Please, choose your next attack!`
                    }
                }
            }
    }
    while (allyHand.length > 0 && ennemyHand.length > 0); // allyHand.length > 0 && ennemyHand.length === 0 || allyHand.length === 0 && ennemyHand.length > 0
    if (allyHand.length === 0) {
        document.querySelector(".textInput").innerHTML = `Dammit, you loose ! Do you want to <a href="./index.html">try again</a> or do you prefer to go back to the beach club and lie about you defeating James?`
    }
    else { document.querySelector(".textInput").innerHTML = `YEAH! YOU WIN! There are no doubt you're gonna go far on this adventure. After crying for a bunch of minutes James decided to give you his money. You earned ₽2500. You finally have enough money to date Misty!`
    };
    removeThemAll()

}   
;

function executeGame() {
    if (countClickPickedCard >= 5) {
        game(allyHand, ennemyHand)
    }
}
startGame.addEventListener("click", executeGame)  
cardPicker.addEventListener("click", onCardPickerClick)

function removeThemAll() {
startGame.removeEventListener("click", executeGame)
cardPicker.removeEventListener("click", onCardPickerClick)
}