const axios = require('axios');

const yargs = require('yargs');
const weather = require('./weather/weather');
const geocode = require('./geocode/geocode');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

const encodedUri = encodeURIComponent(argv.a);
const geocodeUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedUri}`;

axios.get(geocodeUrl)
    .then((response) => {
        if (response.data.status === 'ZERO_RESULTS') {
            throw new Error('Unable to find address');
        }
        
        var lat = response.data.results[0].geometry.location.lat;
        var lng = response.data.results[0].geometry.location.lng;
        var weatherUrl = `https://api.darksky.net/forecast/14c532b14b01d1e22b96503609de677c/${lat},${lng}`;
        console.log(response.data.results[0].formatted_address);
        return axios.get(weatherUrl);
        
    })
    .then((response)=>{
        console.log(`Temperatur is currently ${response.data.currently.temperature}`);
    })
    .catch(e => {
        if (e.code === 'ENOTFOUND') {
            console.log('Server not connected!');
        }
        else {
            console.log(e.message);
        }
    });

// geocode.addressFunc(argv.a, (errMsg, result) => {
//     if(errMsg) {
//         console.log(errMsg);
//     } else {
//         console.log(result.Address);
//         weather.getWeather(result.Latitude, result.Longitude, (err, results) => {
//             if(err) {
//                 console.log(err);
//             } else {
//                 console.log(`Temperature is now ${results.Temperature}`);
//             }
//         });
//     }
// });