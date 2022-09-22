// import yargs from 'yargs';

const yargs = require('yargs');

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
        console.log(fullname, phone, email);
    }
})


// console.log(yargs.argv);

yargs.parse()

console.log(yargs.argv);