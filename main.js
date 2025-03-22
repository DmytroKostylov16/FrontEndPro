const phoneBook = {
    contacts: [{name: 'Alice', phone: '+380931234567', email: 'alice@mail.com'},
               {name: 'Alex', phone: '+380971234567', email: 'alex@mail.com'},
               {name: 'Mark', phone: '+380981234567', email: 'mark@mail.com'}],
    getContactInfo(name) {
        const contact = this.contacts.find(contact => contact.name === name);
        if (contact) {
            return `Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`;
        } else {
            return `Contact with name ${name} not found.`;
        }
    },
    addContact(name, phone, email) {
        this.contacts.push({
            name: name,
            phone: phone,
            email: email
        })
        return `${name} added.`
    },
}

console.log(phoneBook.getContactInfo('Alice'));
console.log(phoneBook.addContact('Kate', '+380938889567', 'kate@mail.com'));
console.log(phoneBook.getContactInfo('Alex'));
console.log(phoneBook.contacts);
console.log(phoneBook.addContact('John', '+380934455067', 'john@mail.com'));
console.log(phoneBook.contacts);