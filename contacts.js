const fs = require('fs');

const addContact = (fullname, phone, email) => {
    const contacts = loadContacts()
    const duplicateContact = contacts.find(c => c.fullname == fullname)

    if(!duplicateContact){
        contacts.push({fullname, phone, email})
        saveContacts(contacts)
        console.log('contact saved!');
    }else{
        console.log('contact already exists!');
    }
}

const loadContacts = () => {
    try{
        const dataBuffer = fs.readFileSync('contacts.json')
        return JSON.parse(dataBuffer.toString()) 
    } catch(err) {
        console.log(err)
        return []
    }
}

const saveContacts = (data) => {
    try{
        fs.writeFileSync('contacts.json', JSON.stringify(data))
        console.log('file saved');
    }catch{
        console.log('I can\'t read this file!');
    }
}

module.exports = {
    addContact
}