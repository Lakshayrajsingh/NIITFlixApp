import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LogincheckerGuard implements CanActivate {

  constructor(private auth:AuthService,private router:Router){
  }
  canActivate() {
    if(this.auth.IsloggedIn())
    {
    return true;
    }
    this.router.navigate(['login']);
    return false;
    // return this.auth.logInStatus();
  }

  
}
