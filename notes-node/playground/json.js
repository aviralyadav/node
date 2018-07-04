const fs = require('fs');

var obj = {
    title: 'Aviral',
    body: 25
}

var stringObj = JSON.stringify(obj);
var noteStringObj = fs.writeFileSync('notes.json', stringObj);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);