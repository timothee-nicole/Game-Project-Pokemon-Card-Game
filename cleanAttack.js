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

// Function to display Ennemy card in the Arena (battleScope Ennemy div)
function EnnemyDisplayCard() {
    const newDiv = document.createElement("div");
    newDiv.innerHTML =
        `<div id=${ennemyPlayer.cards.type} type="text" class="player">
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

//.ondrop = EnnemyDisplayCard;
// Function  for spec attack with strenght and weaknesses
export function attackSpe(playerOne, playerTwo) {
    if (playerOne[0].type === 'fire' && playerTwo[0].type ==='plant') {
        return playerTwo[0].hp = playerTwo[0].hp - (playerOne[0].attackType*1.2)
    }
    else if (playerOne[0].type === 'fire' && playerTwo.type ==='water') {
        return playerTwo[0].hp = playerTwo[0].hp - (playerOne[0].attackType*0.8)
    }
    else if (playerOne[0].type === 'water' && playerTwo.type ==='fire') {
        return playerTwo[0].hp = playerTwo[0].hp - (playerOne[0].attackType*1.2)
    }
    else if (playerOne[0].type === 'water' && playerTwo.type ==='rock') {
        return playerTwo[0].hp = playerTwo[0].hp - (playerOne[0].attackType*0.8)
    }
    else if (playerOne[0].type === 'plant' && playerTwo.type ==='rock') {
        return playerTwo[0].hp = playerTwo[0].hp - (playerOne[0].attackType*1.2)
    }
    else if (playerOne[0].type === 'plant' && playerTwo.type ==='fire') {
        return playerTwo[0].hp = playerTwo[0].hp - (playerOne[0].attackType*0.8)
    }
    else if (playerOne[0].type === 'rock' && playerTwo.type ==='water') {
        return playerTwo[0].hp = playerTwo[0].hp - (playerOne[0].attackType*1.2)
    }
    else if (playerOne[0].type === 'rock' && playerTwo.type ==='plant') {
        return playerTwo[0].hp = playerTwo[0].hp - (playerOne[0].attackType*0.8)
    }
    else {
        return playerTwo[0].hp = playerTwo[0].hp - playerOne[0].attackType
    }
};
// Function for the casual attack
export function casualAttack(playerOne, playerTwo) {
    return playerTwo[0].hp = playerTwo[0].hp - playerOne[0].attack;
};

// Function for healing
export function healing(playerOne) {
    return playerOne[0].hp = playerOne[0].hp + playerOne[0].healing;
};

// Function for the attack that steal ennemy's HP 1/2
export function stealYourEnnemy(playerOne, playerTwo) {
    playerOne[0].hp = playerOne[0].hp + (playerOne[0].thief/2);
    return playerTwo[0].hp = playerTwo[0].hp - playerOne[0].thief
};

export function randomEnnemyAttack() {
    let n = Math.floor((Math.random() * 3) + 1);
    n = 1 ?  stealYourEnnemy : n = 2 ? casualAttack : n = 3 ? attackSpe : healing;
}
function deadToNewOne(player) {
    return player.shift()
}
// Definition of the player according to the choice of the ally, and like the first of the array for the ennemy

// Function to set the turn and whosfirst in the game, the promise is used to disable ennemy from attacking before the player has choosed its attack
async function game() {
    do {
            if (allyHand[0].speed < ennemyHand[0].speed) {
                randomEnnemyAttack();

                if (allyHand[0].hp <= 0) {
                    deadToNewOne(allyHand)
                };
    
                const r = await chooseYourAction(allyHand, ennemyHand);
    
                if (ennemyPlayer.hp <= 0) {
                        deadToNewOne(ennemyHand)
                };
            }
            else {
                const r = await chooseYourAction(allyHand, ennemyHand);
                
                if (ennemyPlayer.hp <= 0) {
                        deadToNewOne(ennemyHand)
                    };
                
                randomEnnemyAttack;

                if (allyHand[0].hp <= 0){
                    deadToNewOne(allyHand)
                };
            
            }
    }
    while (allyHand.length > 0 || ennemyHand > 0)
};
// Lets Launch the game
game()