import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orders } from './orders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  // private baseUrl:string = "http://localhost:3000/orders";
  private baseUrl:string = "http://52.87.183.49:8181/admin/orders/viewAllOrders";

  constructor(public httpClient:HttpClient) { }


  loadAllOrders(): Observable<Orders[]>{
    return this.httpClient.get<Orders[]>(this.baseUrl);
  }

}
