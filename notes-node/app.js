console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
}
const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 't'
}

const argv = yargs
    .command('add', 'Add new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List of notes')
    .command('read', 'Raeding a note', {
        title: titleOptions
    })
    .command('remove', 'Removing a note', {
        title: titleOptions
    })
    .help()
    .argv;

var command = argv._[0];

if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s)`);
    allNotes.forEach(note => console.log(`title: ${note.title}, body: ${note.body}`));
} else if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note added successfully', note);
    } else {
        console.log('Note', argv.title + ' is already there!');
    }
} else if (command === 'read') {
    var note = notes.readNote(argv.title);
    if (note.length) {
        console.log('Note: ', note);
    } else {
        console.log('Note not found');
    }
} else if (command === 'remove') {
    var note = notes.removeNote(argv.title);
    if (note) {
        console.log('Note removed');
    } else {
        console.log('Note not found');
    }
} else {
    console.log('Command not recognized');
}