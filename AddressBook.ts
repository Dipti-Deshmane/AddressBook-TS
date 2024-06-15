import Contact from "./Contact";

class AddressBook{

    private contacts:Contact[]=[];

    addContact(contact:Contact):void{
        this.contacts.push(contact);
    };

    listContacts():void{
        this.contacts.forEach((contact)=>{
            console.log(contact.getDetails());
        });
    };

};

export default AddressBook;