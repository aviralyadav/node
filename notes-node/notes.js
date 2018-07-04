console.log('Starting notes.js');
const fs = require('fs');

var fetchNotes = () => {   ///// fetching notes
    try {
        var noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    } catch (e) {
        return [];
    }
}

var saveNotes = notes => {  ///// saving notes
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {     ////adding note
    var notes = fetchNotes();
    var note = {
        title,
        body
    }
    var duplicateNote = notes.filter(note => note.title === title);
    if (duplicateNote.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
}

var getAll = () => {
    return fetchNotes();
}

var readNote = title => {
    var notes = fetchNotes();
    var note = notes.filter(note=>note.title === title);
    return note;
}

var removeNote = (title) => {
    var notes = fetchNotes();
    var removedNote = notes.filter(note=>note.title !== title);
    saveNotes(removedNote);
    return notes.length !== removedNote.length; 
}

module.exports = {
    getAll,
    addNote,
    readNote,
    removeNote
}