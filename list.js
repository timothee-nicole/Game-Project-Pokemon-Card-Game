// All Pokemon Will have these characteristics and functions
export class Pokemon {
    constructor(info) {
       this.name = info.name;
       this.image = info.image;
       this.type = info.type;
       this.hp = info.hp;
       this.attackType = info.attackType;
       this.attack = info.attack;
       this.healing = info.healing;
       this.thief = info.thief;
       this.speed = info.speed;
    }

    elementAttack() {
        this.attackType[0];
        this.attackType[1];
    };
    casualAttack() {
        return this.attack;
    };
    receiveHealing() {
        return this.hp+this.healing;
    };

    receiveDamage(damage) {
            this.hp-damage  
    };
    stealHP() {
        return this.hp+(0.5*this.thief)
    }
}

/*
class BattleRound {
    pokemonAlly
    pokemonEnnemy 

    displayYourPokemon(pokemonAlly) {
        
    };

    displayEnnemyPokemon(pokemonEnnemy) {
        
    };

    starting (speedAlly, speedEnnemy) {
        if (speedAlly > speedEnnemy || speedAlly === speedEnnemy) {
            this.pokemonAlly.start
        }
        else {
            this.pokemonEnnemy.start
        }
    }
}
*/
