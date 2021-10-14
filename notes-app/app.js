/* ----- Notes Application Coding ----- */ 

const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

// Customize yargs command
yargs.version('1.1.0')

// Create add command
yargs.command({
    command:'add',
    describe:'Add a new notes',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true, // Make it required
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true, //Make it required
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

// Create a remove command
yargs.command({
    command:'remove',
    describe:'Remove a notes',
    builder: {
        title:{
            describe:'Note title',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

// Create a list command
yargs.command({
    command:'list',
    describe:'List your notes',
    handler(){
        notes.listNotes()
    }
})

// Create a read command
yargs.command({
    command:'read',
    describe:'Reading a note',
    builder: {
        title:{
            describe:'Note title',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

// console.log(yargs.argv)

yargs.parse()