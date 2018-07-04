const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.status(404).send({Error: 'Page not found', name:'Error Critical'});
});

app.get('/users', (req, res)=>{
    res.status(200).send(['avi' ,'ashu', 'ankit']);
});

app.listen(3000);

module.exports.app = app;