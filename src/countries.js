import axios from "axios";

async function getCertainCountry(name) {
    const containerResults = document.getElementById("results")
    const errorMessage = document.getElementById("error-message")

    errorMessage.innerHTML = "";
    containerResults.innerHTML = "";

    try {

        const result = await axios.get(`https://restcountries.com/v2/name/${name}`)
        console.log(result.data)
        const countries = result.data[0]

        containerResults.innerHTML =`

        <img src="${countries.flag}" width="100px" />
            <h3>${countries.name}</h3>
            <p>${countries.name} is situated in ${countries.subregion} and has a population of ${countries.population}</p>
            <p>The capital is ${countries.capital} ${getCurrencies(countries.currencies)}</p>
            <p> ${getLanguages(countries.languages)}</p>
`
    }
    catch (e) {
        console.error(e);
        errorMessage.innerHTML = `
         <p>${name} does not exist, try again.</p>
        `
    }

}

function  getLanguages(languages) {
    if (languages.length === 3) {
        return `They speak ${languages[0].name} , ${languages[1].name} and ${languages[2].name} `
    }
    if (languages.length === 2) {
        return `They speak ${languages[0].name} and ${languages[1].name}`
    } else {
        return `They speak ${languages[0].name}`
    }
}



function getCurrencies(currencies){
    if (currencies.length === 2){
        return `and you can pay with ${currencies[0].name} and ${currencies[1].name}`
    }else{
        return `and you can pay ${currencies[0].name}`
    }
}

const searchForm = document.getElementById("search-form")
searchForm.addEventListener("submit",searchingCountries )

function searchingCountries(e){
    e.preventDefault()

    const inputField = document.getElementById("search-country")

    getCertainCountry(inputField.value)

}

