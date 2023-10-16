import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // private baseUrl:string = "http://localhost:3000/products";
  // private baseUrl:string = "http://localhost:8080/phase2-backend-restapi/ProductController";
  private baseUrl:string = "http://54.176.63.95:8181/admin/product";

  constructor(public httpClient: HttpClient) { }

  // loadAllProductDetails(): Observable<Products[]>{
  //   return this.httpClient.get<Products[]>(this.baseUrl);
  // }

  loadAllProductDetails(): Observable<Products[]>{
    return this.httpClient.get<Products[]>(this.baseUrl+"/findAllProducts");
  }

  // deleteProductById(pid:any):Observable<string>{
  //   return this.httpClient.delete(this.baseUrl+"?pid="+pid, {responseType:'text'});
  // }

  deleteProductById(pid:any):Observable<string>{
    return this.httpClient.delete(this.baseUrl+"/deleteProduct?pid="+pid, {responseType:'text'});
  }

  // storeProduct(product:Products):Observable<any>{
  //   return this.httpClient.post(this.baseUrl, product);
  // }

  storeProduct(product:Products):Observable<any>{
    return this.httpClient.post(this.baseUrl+"/storeProduct", product);
  }

  updateProduct(product:any):Observable<string>{
    return this.httpClient.put(this.baseUrl+"/updateProduct", product, {responseType:"text"});
  }
}
