import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Admin } from '../model/admin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(true);

  constructor(private httpClient:HttpClient, private router:Router) { }

  get isLoggedIn():Observable<boolean>{
    
    return this.loggedIn.asObservable();

  }

  logout(){
    return this.loggedIn.next(false);
  }

  login(){
    return this.loggedIn.next(true);
  }

  // signIn(admin:Admin):boolean{
  //   if(admin.email == "admin@example.com" && admin.password == "admin123456!"){
  //     return true;
  //   }else{
  //     return false;
  //   }
  // }

  // signIn(admin:Admin):boolean{
  //   this.httpClient.post("http://localhost:8080/phase2-backend-restapi/AdminController", admin, {responseType:"text"}).subscribe({
  //     next:(data:any)=>{
  //       console.log(data);
  //     },
  //     error:(error:any)=>{
  //       console.log(error);
  //     },
  //     complete:()=>{
  //       console.log("Task completed");
  //     }
  //   })
  //   return false;
  // }

  // signIn(admin:Admin):Observable<String>{
  //   return this.httpClient.post("http://localhost:8080/phase2-backend-restapi/AdminController", admin, {responseType:'text'});
  // }

  signIn(admin:Admin):Observable<String>{
    return this.httpClient.post("http://50.18.247.45/admin/signIn", admin, {responseType:'text'});
  }

}
