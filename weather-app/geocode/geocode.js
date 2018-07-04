const request = require('request');

const addressFunc = (addCode, callback) => {
    const encodedUri = encodeURIComponent(addCode);

request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedUri}`,
    json: true
}, (err, res, body) => {
    if (err) {
        callback('Unable to access google server');
    } else if (body.status === 'ZERO_RESULTS') {
        callback('Unable to find that address.')
    } else if (body.status === 'OK') {
        callback(undefined, {
            Address: body.results[0].formatted_address,
            Latitude: body.results[0].geometry.location.lat,
            Longitude: body.results[0].geometry.location.lng
        });
        
    }

});
}

module.exports = {
    addressFunc
}