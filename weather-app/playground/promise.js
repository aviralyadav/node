var asynAdd = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(()=>{
			if(typeof a === 'number' && typeof b === 'number') {
				resolve(a+b);
			} else {
				reject('Arguments must be numbers');
			}
		}, 2000);
	});
}; 

asynAdd(5,'7').then((res)=>{
	console.log('Result', res);
	return asynAdd(res, 18);//, (errm)=>{console.log(errm)});
}).then((newres)=>{console.log('shoulf be 30:', newres)})
.catch((errm)=>{
	console.log(errm);
});


/* var somepromise = new Promise((resolve, reject) => {
	setTimeout(()=>{
		//resolve('Success');
		reject('fail');
	}, 2000);
});

somepromise.then((message)=>{console.log(message)}, (err)=>{console.log(err)}); */