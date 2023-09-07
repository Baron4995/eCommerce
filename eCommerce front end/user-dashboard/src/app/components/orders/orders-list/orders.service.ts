import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orders } from './orders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  // private baseUrl:string = "http://localhost:3000/orders";
// private baseUrl:string = "http://localhost:8080/phase2-backend-restapi/OrdersController";
private baseUrl:string = "http://localhost:8282/customer/orders";


  constructor(public httpClient:HttpClient) { }


  // loadAllOrders(): Observable<Orders[]>{
  //   return this.httpClient.get<Orders[]>(this.baseUrl);
  // }

  placeOrder(order:Orders): Observable<any>{
    return this.httpClient.post(this.baseUrl+"/placeOrder", order, {responseType:"text"});
  }

  deleteOrderById(id:any):Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/"+id);
  }

  viewOrderByUser(email:any):Observable<any>{
    return this.httpClient.get(this.baseUrl+"/viewOrderByUser?email="+email);
  }
}
