const request = require('request');

var geocodeAddress = (address) => {
	const encodedUri = encodeURIComponent(address);
	return new Promise((resolve, reject)=>{
		request({
			url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedUri}`,
			json: true
		}, (err, res, body) => {
			if (err) {
				reject('Unable to access google server');
			} else if (body.status === 'ZERO_RESULTS') {
				reject('Unable to find that address.')
			} else if (body.status === 'OK') {
				var location = {
					Address: body.results[0].formatted_address,
					Latitude: body.results[0].geometry.location.lat,
					Longitude: body.results[0].geometry.location.lng
				};
				resolve(location);
				
			}

		});
	});
};

geocodeAddress('00000000')
.then((location)=>{ 
	console.log(JSON.stringify(location, undefined, 2))
}, (err)=>{
	console.log(err)
});