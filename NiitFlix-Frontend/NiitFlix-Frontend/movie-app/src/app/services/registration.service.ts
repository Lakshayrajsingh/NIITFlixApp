import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {private url:string;

  constructor(private httpconnection:HttpClient) {
    this.url="http://localhost:7777/register-user1";
   }

  addReg(regData:any):Observable<any>{
    console.log(regData);
    return this.httpconnection.post(this.url, regData);
  } 
}
