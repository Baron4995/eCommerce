export class Products {

    constructor(public id:number, 
        public title:string, 
        public description:string, 
        public price:number, 
        public discountPercentage:number,
        public rating:number,
        public stock:number,
        public brand:string,
        public category:string,
        public thumbnail:string,
        public categories:string[]){

    }
}
