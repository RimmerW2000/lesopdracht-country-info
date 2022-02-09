import axios from 'axios';
// Opdracht Plan bedenken:
//     Alle landen in een lijst
// naam, vlag, hoeveelheid inwoners
//
// Axios dependency toevoegen
// Importen
//
// Async en try catch block
// API aanroepen met wait
//Ophalen van de data:
// 1. Het request zelf (endpoint voor naam)
// GET 'https://restcountries.com/v2/all?fields=name,region,flags,population'
// 2. Asynchrone functie (async/await)
// 3. Een try and catch maken.
// 4. Maak een variabele die als waarde het resultaat van de endpoint krijgt (await axios.get)
// 5. Maak een container/anker in je html
// 6. Haal deze binnen in je javascript file
// 7. Maak een nieuw element waar je alle data in wilt opslaan
// 8. Zet de data die je nodig hebt in dit element.
// 9. Append dit element aan je container/anker
//10. map door de array van het resultaat
//11. voeg dit toe aan je element



// async function allTheCountries() {

    // const countryUnorderedList = document.getElementById(" countryList")
    //
    // const countryList = document.createElement("li")

//     try {
//         const result = await axios.get('https://restcountries.com/v2/all');
//         console.log(result.data);
//     const countries = result.data
//         // result.data.sort((a, b) => {
//         //     return a.population - b.population;
//         // })
//
//         getAllCountries(countries)
//
//
//
//     } catch(e) {
//         console.error(e);
//     }
// }
//
//  allTheCountries();
//
//
// function getAllCountries(countries){
//     const countryUnorderedList = document.getElementById("countryList")
//
//     countries.map((allTheCountries) => {
//     const countryList = document.createElement("li");
//
//
//
//     countryList.innerHTML = `
//         <img src="${allTheCountries.flag}"/>
//         <h3>${allTheCountries.name}</h3>
//         <p> Has a population of ${allTheCountries.population}</p>
//         `
//     countryUnorderedList.appendChild(countryList);
//     })
// }


// End point voor All begruiken https://restcountries.com/v3.1/all
//     response terug in variabele
//
// loop over object met map functie per element een aantal velden eruit halen
//
// opbouwen van het element in innerHTML
//
// Tonen

async function getCountries() {
    try {
        const result = await axios.get('https://restcountries.com/v2/all')
        console.log(result.data)

        result.data.sort((a, b) => {
            return a.population - b.population;
        })

        getAllCountries(result.data)

    } catch (e) {
        console.error(e)
    }
}

getCountries();


function getAllCountries(countries) {
    const countryUnorderedList = document.getElementById("countryList");
    countries.map((allCountries) => {

        const countryList = document.createElement('li');
        countryList.innerHTML = `
            <img src="${allCountries.flag}" class="flag"/>          
            <h3 class="${allCountries.region}">${allCountries.name}</h3>
            <p>has a population of ${allCountries.population} people</p>
        `
        countryUnorderedList.appendChild(countryList);
    })
}



