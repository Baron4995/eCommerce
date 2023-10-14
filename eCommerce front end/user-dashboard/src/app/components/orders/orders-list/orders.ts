export class Orders {

    constructor(
        public orderid?:number, 
        public orderDate?:String, 
        public orderStatus:string="pending", 
        public products?: Array<OrderProducts>, 
        public totalItems?:number, 
        public itemsSubTotal?:number, 
        public shipmentCharges?:number, 
        public totalAmount?:number, 
        public paymentStatus?:string, 
        public paymentMethodTitle?:string, 
        public email?:string,
        public pid?:number
    ){}

}

export class OrderProducts {
    constructor(
        public pid?:number, 
        public title?:string, 
        public description?:string, 
        public price?:number, 
        public discountPercentage?:number,
        public rating?:number,
        public stock?:number,
        public brand?:string,
        public cid?:number,
        public thumbnail?:string,
        public qty?:number, 
    ){}
}
