const fs = require('fs')

const getNotes = function () {
    return 'Your notes...'
}

const addNotes = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
}

const removeNotes = function(title){
    const notes = loadNotes()
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title
    })
    if(notes.length > notesToKeep.length)
    { 
      console.log("Notes Removed")
      saveNotes(notesToKeep)
    } else {
        console.log("Notes not removed")
    }
    
}

const listNotes = function(){
    const notes= loadNotes()
    notes.forEach((note) => {
        console.log(note.title)
    })
}

const readNotes = function(title) {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if(note){
        console.log(note.title)
        console.log(note.body)
    } else {
        console.log("not found")
    }
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}
