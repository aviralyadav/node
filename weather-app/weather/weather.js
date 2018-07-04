const request = require('request');

const getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/14c532b14b01d1e22b96503609de677c/${lat},${lng}`,
        json: true
    }, (err, res, body) => {
        if(err) {
            callback('Server is not connected forecast.io');
        } else if(res.statusCode === 400) {
            callback('Could not fetched weather');
        } else if(res.statusCode === 200) {
            callback(undefined, {
                Temperature: body.currently.temperature
            })
        }
    });
}

module.exports = {
    getWeather
}