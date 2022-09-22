// import yargs from 'yargs';

const yargs = require('yargs');

const { addContact } = require('./contacts');

yargs.command({
    command: 'create',
    aliases: ['c'],
    describe: '[create new contact]',
    builder: {
        fullname: {
            alias: 'f',
            describe: 'Person fullname',
            demandOption: true,
            type: 'string'
        },

        phone: {
            alias: 'p',
            describe: 'Person Phone Number',
            demandOption: true,
            type: 'number'
        },

        email: {
            alias: 'e',
            describe: 'Person Email Address',
            demandOption: true,
            type: 'string'
        }
    },
    handler({fullname, phone, email}){
        addContact(fullname, phone, email)
    }
})


// console.log(yargs.argv);

yargs.parse()

yargs.argv