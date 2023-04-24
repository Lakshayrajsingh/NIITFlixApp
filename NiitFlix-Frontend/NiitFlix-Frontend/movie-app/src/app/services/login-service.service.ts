import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private httpClient:HttpClient) { }

  authAppBeBaseUrl = "http://localhost:7777/login-check";

  loginCheck(logindata:any){
    console.log(logindata);
    return this.httpClient.post(this.authAppBeBaseUrl,logindata)
  }

}
