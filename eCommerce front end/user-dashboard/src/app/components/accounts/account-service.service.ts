import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  // baseUrl:string = "http://localhost:8080/phase2-backend-restapi/AccountController";
  baseUrl:string = "http://localhost:8282/customer/accounts";

  constructor(public httpClient:HttpClient) { }

  findBalance(emailid:any):Observable<any>{
    return this.httpClient.get(this.baseUrl+"/findBalance?email="+emailid);
  }
}
