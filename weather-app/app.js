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

geocode.addressFunc(argv.a, (errMsg, result) => {
    if(errMsg) {
        console.log(errMsg);
    } else {
        console.log(result.Address);
        weather.getWeather(result.Latitude, result.Longitude, (err, results) => {
            if(err) {
                console.log(err);
            } else {
                console.log(`Temperature is now ${results.Temperature}`);
            }
        });
    }
});