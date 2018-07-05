const axios = require('axios');

const getExchangeRate = async (from, to) => {
    // return  await axios.get(`http://data.fixer.io/api/latest?access_key=a4c07a44bd26e07e9cfe2df74e4d3388`).then(res=>{
    //     const eu = 1/res.data.rates[from];
    //     const rates = res.data.rates[to]*eu;
    //     return rates;
    // })
    const response =  await axios.get(`http://data.fixer.io/api/latest?access_key=a4c07a44bd26e07e9cfe2df74e4d3388`);
    const eu = 1/response.data.rates[from];
    const rates = response.data.rates[to]*eu;
    return rates;
}

const getCountries = async countryCode => {
    // return axios.get(`https://restcountries.eu/rest/v2/currency/${countryCode}`).then(response=>{
    //     return response.data.map(country=>country.name);
    // })
    try {
        const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${countryCode}`);
    return response.data.map(contry=>contry.name);
    } catch(e) {
        throw new Error('Unable to fetch countries');
    }
    
}

// getExchangeRate('USD', 'INR').then(rate=>{
//     console.log(rate);
// })

// getCountries('CAD').then(countries=>{
//     console.log(countries);
// })

const convertCurrency = async (from ,to ,amount) => {
    const rate = await getExchangeRate(from, to);
    const countries = await getCountries(to);
    const convertedAmount = amount*rate;
    return `${amount} ${from} is worth ${convertedAmount} ${to}`;
}

convertCurrency('USD', 'INR', 100).then(message=>{
    console.log(message);
}).catch(e=>{
    console.log(e.message);
})

