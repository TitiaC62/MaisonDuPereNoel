// API Star wars


async function PersoStarWars() {
    const results = await fetch ("https://swapi.dev/api/films/1/");
    const data =  results.json();

    console.log(data)
}




   