// API Star wars

let image = document.querySelector(".image");
let PeopleGender = document.querySelector(".gender");
let PeopleName = document.querySelector(".name");

async function PersoStarWars() {
    let randomNumber = Math.ceil(Math.random()*82) + 1;

    let results = await fetch (`https://swapi.dev/api/people/${randomNumber}`);
    let data = await results.json();

    console.log(data)

    image.src = data.films;
    PeopleGender.textContent = data.gender;
    PeopleName.textContent =data.name;
}



PersoStarWars();
button.addEventListener("click", PersoStarWars);

