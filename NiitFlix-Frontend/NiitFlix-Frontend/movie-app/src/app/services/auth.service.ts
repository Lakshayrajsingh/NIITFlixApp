import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  IsloggedIn(){
    
    return !!localStorage.getItem('jwt');
    
  }
  loggingOut() {
    localStorage.clear();
  this.router.navigate(['/home']);
  }
}
