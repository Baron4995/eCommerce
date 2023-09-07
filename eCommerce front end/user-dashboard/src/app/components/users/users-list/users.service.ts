import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl:string = "http://localhost:3000/users";

  constructor(public httpClient:HttpClient) { }

  loadAllUserDetails():Observable<Users[]>{
    return this.httpClient.get<Users[]>(this.baseUrl);
  }
}
