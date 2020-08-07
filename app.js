const yargs = require('yargs')
const notes = require('./node.js')
const { string } = require('yargs')

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Adding a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNotes(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
       title: { 
        describe: "Note Title",
        demandOption: true,
        type: 'string' 
          }
    },
    handler: function(argv){
        notes.removeNotes(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'lists a note',
    handler: function(){
        notes.listNotes()
    }
})

yargs.command({
    command: 'Read',
    describe: 'Read a note',
    builder: {
        title : {
         describe: "read notes",
         demandOption: true,
         type: "string"
    }
},
    handler: function(argv){
        notes.readNotes(argv.title)
    }
})

yargs.parse()