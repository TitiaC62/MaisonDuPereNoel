// API Star wars
let button = document.getElementById("button");
let image = document.getElementById("image");
let PeopleGender = document.getElementById("gender");
let PeopleName = document.getElementById("name");

async function PersoStarWars() {
    let randomNumber = Math.ceil(Math.random()*82) + 1;

    let results = await fetch (`https://swapi.dev/api/people/${randomNumber}`);
    let data = await results.json();

    console.log(data)

    image.textContent = data.films;
    PeopleGender.textContent = data.gender;
    PeopleName.textContent =data.name;
}



PersoStarWars();
button.addEventListener("click", PersoStarWars);

