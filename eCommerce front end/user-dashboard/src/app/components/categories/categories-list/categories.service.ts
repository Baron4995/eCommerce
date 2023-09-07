import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories } from './categories';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private baseUrl:string = "http://localhost:3000/categories";

  constructor(public httpClient:HttpClient) { }

  loadAllCategories():Observable<Categories[]>{

    return this.httpClient.get<Categories[]>(this.baseUrl);

  }

  
}
