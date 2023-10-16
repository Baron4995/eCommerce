import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // private baseUrl:string = "http://localhost:3000/users";
  private baseUrl:string = "http://54.241.243.96:8181/admin/users/findAllUsers";

  constructor(public httpClient:HttpClient) { }

  loadAllUserDetails():Observable<Users[]>{
    return this.httpClient.get<Users[]>(this.baseUrl);
  }
}
