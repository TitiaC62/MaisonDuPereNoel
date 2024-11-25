let button = document.getElementById("button");
let image = document.getElementById("image");
let pokeNumber = document.getElementById("number");
let pokeName = document.getElementById("name");

const changePokemon = async () =>{
    // Math.random => permet de prendre un chiffre en [0,1[ 
    // On multiplie par 151 pour avoir les 151 pokemon
    // Math.ceil => arrondi au dessus donc 149.99 = 150
    // On met +1 pour être sûr d'avoir un chiffre entre 1 et 151

    let randomNumber = Math.ceil(Math.random() * 150) +1;

    let requestString = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`

    let response = await fetch(requestString);
    let data = await response.json()

    image.src = data.sprites.front_default ;
    pokeNumber.textContent = `#${data.id}`;
    pokeName.textContent = data.name;

        
}

changePokemon();
button.addEventListener("click", changePokemon);
