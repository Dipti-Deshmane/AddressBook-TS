class Contact{
    private firstName : string;
    private lastName : string;
    private address :string;
    private city : string;
    private zip : number;
    private contact :number;
    private email : string | number;


    constructor(firstName : string,lastName:string,address:string,city:string,zip:number,contact:number,email:string|number){
        this.firstName=firstName;
        this.lastName=lastName;
        this.address=address;
        this.city=city;
        this.zip=zip;
        this.contact=contact;
        this.email=email;
    }
    getDetails():string{
    return `${this.firstName} ${this.lastName} - ${this.address}, ${this.city}, ${this.zip} ,${this.contact}, ${this.email}`;
    }
}

export default Contact;