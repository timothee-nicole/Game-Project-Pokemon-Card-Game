// Imports de fichier et api
import { Pokemon } from "./list.js";
console.log(Pokemon)

// Holder & arrival declaration
const cardPicker = document.getElementById("pickACard");
const yourDeck = document.getElementById("fiveNewCards");

// Function of what appears 
let countClickPickedCard = 0
cardPicker.onclick = function(){
    countClickPickedCard++;
}
let pokemonImageMatch = [
    {name: 'Florisard' ,
    image: './images/image1.png'},
    {name: 'Dracofeu' ,
    image: "./images/image2.png"},
    {name: 'Tortank' ,
    image: './images/image3.png'},
    {name: 'Papillusion' ,
    image: "./images/image4.png"},
    {name: 'Dardagnan' ,
    image: './images/image5.png'},
    {name: 'Roux Carnage' ,
    image: "./images/image6.png"},
    {name: 'Rapacedepic' ,
    image: './images/image7.png'},
    {name: 'Arbok' ,
    image: "./images/image8.png"},
    {name: 'pikachu' ,
    image: './images/image9.png'},
    {name: 'Sablero' ,
    image: "./images/image10.png"},
    {name: 'NidoQueen' ,
    image: './images/image11.png'},
    {name: 'NidoKing' ,
    image: "./images/image12.png"},
    {name: 'Feunard' ,
    image: './images/image13.png'},
    {name: 'Triopineur' ,
    image: "./images/image14.png"},
    {name: 'Prince of Persian',
    image: './images/image15.png'},
    {name: 'Arcanin',
    image: "./images/image16.png"},
    {name: 'Tartare de Puf',
    image: './images/image17.png'},
    {name: "Elec'Thor ",
    image: "./images/image18.png"},
    {name: "Arti'Gourdin",
    image: './images/image19.png'},
    {name: 'Sulfura',
    image: "./images/image20.png"},
                                                                
    
]




function fiveNewCards() {
    if (countClickPickedCard <= 5) 
    {
    const newDiv = document.createElement("div");
    console.log('you clicked it');

    newDiv.innerHTML = `<div id="picked${countClickPickedCard}" class="deck"> <p class="pokemonName"></p> <img src="./images/image${Math.round((Math.random()*35)+1)}.png"></div>`;

    console.log(cardPicker)
    yourDeck.appendChild(newDiv);
    console.log(countClickPickedCard)

    return countClickPickedCard
    }
    else 
    {
       console.log("You Cannot Get more than 5 cards you bitch")
    };
};


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


