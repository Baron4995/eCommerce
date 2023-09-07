import { Component, OnInit } from '@angular/core';
import { Orders } from './orders-list/orders';
import { OrdersService } from './orders-list/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{

    orders:Array<Orders> = [];
    public count = 0;
    format = 'medium';

    constructor(public orderService:OrdersService){}

    ngOnInit(): void {
      
      this.orderService.loadAllOrders().subscribe({
        next:(result:any) => {
          // this.orders = result;
          for(let o of result){
              let order = new Orders(
                o[this.count],
                o[this.count+1],
                o[this.count+2],
                o[this.count+3],
                o[this.count+4],
                o[this.count+5],
                o[this.count+6],
                o[this.count+7],
                o[this.count+8],
                o[this.count+9],
                o[this.count+10],
                o[this.count+11],
                o[this.count+12],
                o[this.count+13],
                o[this.count+14],
                o[this.count+15],
                o[this.count+16],
                o[this.count+17]
              );
              this.orders.push(order);
          }
          console.log(this.orders);

        }, error:(error:any) => {

        }, complete:() => {
          
        }
      })
    }
}
