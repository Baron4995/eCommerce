import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories } from './categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  // private baseUrl:string = "http://localhost:3000/categories";
  // private baseUrl:string = "http://localhost:8080/phase2-backend-restapi/CategoryController";
  private baseUrl:string = "http://54.176.63.95:8181/admin/category";

  constructor(public httpClient:HttpClient) { }

  loadAllCategories():Observable<Categories[]>{
    return this.httpClient.get<Categories[]>(this.baseUrl+"/findAllCategories");
  }

  storteCategory(category:Categories):Observable<any>{
    return this.httpClient.post(this.baseUrl+"/storeCategory", category);
  }

  deleteCategoryById(cid:any):Observable<string>{
    return this.httpClient.delete(this.baseUrl+"/deleteCategory?cid="+cid, {responseType:'text'});
  }

  searchCaregory(categoryNameValue:any):Observable<any>{
    return this.httpClient.post<Categories[]>(this.baseUrl+"/searchCategoryByName", {categoryName:categoryNameValue});
  }

  updateCategory(category:any){
    return this.httpClient.put(this.baseUrl+"/updateCategory", category, {responseType:'text'});
  }
}
