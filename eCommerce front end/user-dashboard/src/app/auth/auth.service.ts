import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(true);
  // private baseUrl:string = "http://localhost:8080/phase2-backend-restapi/UserController";
  // private baseUrl2:string = "http://localhost:8080/phase2-backend-restapi/UserSignInController";
  private baseUrl:string = "http://localhost:8282/customer";


  constructor(public httpClient:HttpClient) { }

  get isLoggedIn():Observable<boolean>{
    return this.loggedIn.asObservable();
  }

  logout(){
    return this.loggedIn.next(false);
  }

  login(){
    return this.loggedIn.next(true);
  }

  // signIn():Observable<User[]>{
  //   return this.httpClient.get<User[]>("http://localhost:3000/users");
  // }

  signIn(user:any):Observable<any>{
    return this.httpClient.post(this.baseUrl+"/signIn", user, {responseType:"text"});
  }

  signUp(user:any):Observable<any> {
    // return this.httpClient.post("http://localhost:3000/users", user);
    return this.httpClient.post(this.baseUrl+"/signUp", user, {responseType:"text"});
  }
}
