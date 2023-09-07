
export class Orders {

    constructor(
        public orderid:number,
        public orderDate:Date,
        public orderStatus:string,
        public email:string,
        public shipmentCharges:number,
        public totalItems:number,
        public totalAmount:number,
        public pid:number,
        public title:string,
        public description:string,
        public price:number,
        public discountPercentage:number,
        public rating:number,
        public stock:number,
        public brand:string,
        public cid:number,
        public thumbnail:string,
        public qty:number
      ){}
}
