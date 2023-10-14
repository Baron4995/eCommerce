import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/model/cart';
import { AccountServiceService } from '../accounts/account-service.service';
import { Orders } from '../orders/orders-list/orders';
import { OrdersService } from '../orders/orders-list/orders.service';
import { Products } from '../products/products-list/products';
import { CartService } from './cart service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  
  product:Array<Products> = [];
  cart:Array<Cart> = [];
  totalPrice:number = 0;
  user:any;
  cartFlag:boolean;
  bankBalance:any;
  b1:any;
  paymentFlag:boolean;
  flagBalance:boolean;
  cartEmpty:boolean;

  constructor(public cartService:CartService, private router:Router, private route:ActivatedRoute, public orderService:OrdersService,
              public accountService:AccountServiceService){}

  ngOnInit(): void {
    let obj = sessionStorage.getItem("user");
    if(obj != null){
      this.user = JSON.parse(obj);
    }
    this.cartService.getCart.subscribe({
      next:(data:any)=>{
        this.cart=data;
        this.calculate();
      },
      error:(error:any)=>{

      },
      complete:()=>{

      }
    })

    if(this.cart.length > 0){
      this.cartEmpty = false;
      this.cartFlag = true;
    }else{
      this.cartEmpty = true;
      this.cartFlag = false;
    }

    this.accountService.findBalance(this.user.emailid).subscribe({
      next:(data:any)=>{
        this.bankBalance = eval(data);
      },
      error:(error:any)=>{
        console.log(error);
      },
      complete:()=>{
        console.log("Account balance retrived");
      }
    })
  }

  increment(cart:any, i:number){
    this.cart[i].qty = eval(cart.qty)+1;
    this.calculate();
  }

  decrement(cart:any, i:number){
    this.cart[i].qty = eval(cart.qty)-1;
    this.calculate();
  }

  addToWishlist(product:any){
    console.log(product);
  }

  removeProduct(cart:any, i:number){
    this.cartService.removeDataInCart(cart, i);
    this.calculate();
    window.location.reload();
  }

  calculate():void{
    this.totalPrice = this.cart.reduce((previousValue:any, currentValue:any)=>{
      return previousValue + currentValue.qty * currentValue.price;
    }, 0)
  }

  backToProducts(){
    this.router.navigate(["/products"], {relativeTo:this.route});
  }

  

  proceedToPayment(){
    if(this.cart.length === 0){
      this.paymentFlag = false;
      alert("You have no items your the cart");

    }else{
      this.paymentFlag = true;
      this.cartFlag = false;
      if(this.totalPrice >= this.bankBalance){
        this.b1 = "Insuficient Amount";
        this.flagBalance = true;
      }else{
        this.b1 = "Make a Payment";
        this.flagBalance = false;
      }
    }
    // this.cart.splice(0, this.cart.length);
  }

  makeAPayment(){
    let orderDeatils = new Orders();
      // orderDeatils.orderDate = new Date().toISOString().substring(0, 18);
      orderDeatils.products = [...this.cart]; //copying cart array into products. This is called spread operator.
      orderDeatils.totalItems = this.cart.length;
      orderDeatils.shipmentCharges = 100;
      orderDeatils.totalAmount = this.totalPrice;
      orderDeatils.email = this.user.emailid;
      orderDeatils.pid = orderDeatils.products[0].pid;

    this.orderService.placeOrder(orderDeatils).subscribe({
      next:(data:any)=>{
        console.log(data);
        alert("Order placed");
      },
      error:(error:any)=>{
        console.log(error);
      },
      complete:()=>{
        this.router.navigate(["/orders"], {relativeTo:this.route})
      }
    })
    this.cart.splice(0, this.cart.length);
    this.totalPrice = 0;
    this.cartFlag = false;
    this.paymentFlag = false;
  }

}
