import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from 'src/app/model/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartData = new BehaviorSubject<Cart[]>([]);

  constructor() { }

  get getCart(){
    return this.cartData.asObservable();
  }

  addDataInCart(product:any){
    this.getCart.subscribe({
      next:(data:any)=>{
        let result = data.find((p:any)=>p.title==product.title);
        if(result == undefined){
          data.push(product);
          // this.cartData.next(data);
          alert("Item added to cart! :)");
          console.log(data);
        }
      },
      error:(error:any)=>{

      },
      complete:()=>{

      }
    })
  }

  removeDataInCart(product:any, index:any){
    this.getCart.subscribe({
      next:(data:any)=>{
        data.splice(index, 1);
        // this.cartData.next(data);
        alert("Item Removed :(");
      },
      error:(error:any)=>{

      },
      complete:()=>{

      }
    })
  }
}
