export class Users {

    constructor(public id:number, 
        public username:string,
        public fullName:string,
        public address: {
            street:string,
            city:string,
            state:string,
            country:string,
            pincode:number
        },
        public emailid:string,
        public password:string,
        public img:string,
        public contact:string){

    }
}
