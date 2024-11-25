let button = document.getElementById("button");

const changePokemon = async () =>{
    // Math.random => permet de prendre un chiffre en [0,1[ 
    // On multiplie par 151 pour avoir les 151 pokemon
    // Math.ceil => arrondi au dessus donc 149.99 = 150
    // On met +1 pour être sûr d'avoir un chiffre entre 1 et 151

    let randomNumber = Math.ceil(Math.random() * 150) +1;

    let requestString = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`

    let response = await fetch(requestString);
    let data = await response.json()

    console.log(data)

        
}

button.addEventListener("click", changePokemon);
