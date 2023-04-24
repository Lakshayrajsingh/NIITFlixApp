import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SignUpComponent } from './sign-up/sign-up.component';

@Injectable({
  providedIn: 'root'
})
export class FieldCheckerGuard implements CanDeactivate<SignUpComponent> {
  canDeactivate(
    component: SignUpComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canDeActivate();
  }
  
}
