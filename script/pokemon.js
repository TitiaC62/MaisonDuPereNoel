let button = document.querySelector(".button");



    // Math.random => permet de prendre un chiffre en [0,1[ 
    // On multiplie par 151 pour avoir les 151 pokemon
    // Math.ceil => arrondi au dessus donc 149.99 = 150
    // On met +1 pour être sûr d'avoir un chiffre entre 1 et 151

async function changePokemon  (element){
    const randomNumber = Math.ceil(Math.random() * 150) +1;

    let requestString = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`

    let response = await fetch(requestString);
    let data = await response.json()

    let image = document.querySelector(".image");
    let pokeNumber = document.querySelector(".number");
    let pokeName = document.querySelector(".name");

    image.src = data.sprites.front_default ;
    pokeNumber.textContent = `#${data.id}`;
    pokeName.textContent = data.name;    
}

const pokemonsEl = document.querySelectorAll("section .button");
  for (const pokemonEl of pokemonsEl) {
    changePokemon(pokemonEl.parentElement);
    pokemonEl.addEventListener("click", () => changePokemon(pokemonEl.parentElement));
  

}


  changePokemon()


