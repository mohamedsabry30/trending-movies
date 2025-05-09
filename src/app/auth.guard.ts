import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private _AuthService: AuthService, private _Router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // let userData: any = localStorage.getItem("userData") || "";
    // let token: any = JSON.parse(userData);
    // this._AuthService.currentUser.next(token);
    // if (token.email) {
    //   return true;
    // } else {
    //   this._Router.navigate(["/login"]);
    //   return false;
    // }

    if (this._AuthService.currentUser.getValue() != null) {
      return true;
    } else {
      this._Router.navigate(['/login']);
      return false;
    }
  }
}

// import { CanActivateFn } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };
