import { Component, OnInit } from '@angular/core';
import { OrdersInfo } from 'src/app/model/orderInfo';
import { Orders } from './orders-list/orders';
import { OrdersService } from './orders-list/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{

    // orders:Array<any> = [];
    // orders?:Array<Array<any>> = [];
    orders?:Array<OrdersInfo> = [];
    dateInfo:Date = new Date;
    user:any;
    count = 0;
    formatDate:string = 'medium';

    constructor(public orderService:OrdersService){}

    ngOnInit(): void {
      let obj = sessionStorage.getItem("user");
      console.log(obj);
      if(obj != null){
        this.user = JSON.parse(obj);
      }
      console.log(this.user.emailid);
      this.orderService.viewOrderByUser(this.user.emailid).subscribe({
        next:(result:any) => {
          // this.orders = result
          
          for(let order of result){
            let orderInfo = new OrdersInfo(
              order[this.count],
              order[this.count+1],
              order[this.count+2],
              order[this.count+3],
              order[this.count+4],
              order[this.count+5],
              order[this.count+6],
              order[this.count+7],
              order[this.count+8],
              order[this.count+9],
              order[this.count+10],
              order[this.count+11],
              order[this.count+12],
              order[this.count+13],
              order[this.count+14],
              order[this.count+15],
              order[this.count+16],
              order[this.count+17],
            );

            this.orders.push(orderInfo);
          }
          console.log(result);
        }, error:(error:any) => {
          console.log(error);
        }, complete:() => {
          
        }
      })
    }

    // deleteOrder(id:any){
    //   let flagDelete = confirm("Do you want to delete this product?");
  
    //   if(flagDelete){
    //     this.orderService.deleteOrderById(id).subscribe({
       
    //       next:(result:any) => {
    //         console.log(result);
    //       }, error:(error:any) => {
    //         console.log("Error");
    //       }, complete:() => {
    //         this.orderService.loadAllOrders();
    //         console.log(id);
    //         console.log(`Product ${id} deleted`);
    //       }
    //     })
    //   }else{
    //     alert("Product didn\'t delete")
    //   }
    // }
}
