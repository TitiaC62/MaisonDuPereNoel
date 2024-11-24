// API Star wars


async function PersoStarWars() {
    const results = await fetch ("https://swapi.dev/api/");
    const data =  results.json();

    console.log(data)
}




   