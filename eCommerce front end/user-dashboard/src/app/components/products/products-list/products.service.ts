import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // private baseUrl:string = "http://localhost:8080/phase2-backend-restapi/ProductController";

  private baseUrl:string = "http://localhost:8282/customer/products/viewAll";

  constructor(public httpClient: HttpClient) { }

  loadAllProductDetails(): Observable<Products[]>{
    return this.httpClient.get<Products[]>(this.baseUrl);
  }

  deleteProductById(id:any):Observable<any>{
    return this.httpClient.delete(this.baseUrl+"/"+id);
  }
}
