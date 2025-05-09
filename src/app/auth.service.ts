import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // http client and its methods
import { Observable, BehaviorSubject } from 'rxjs'; // observable and its methods
import { environments } from '../environments/environments';
import { Router } from '@angular/router';
// import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  currentUser: any = new BehaviorSubject(null);

  constructor(private _HttpClient: HttpClient, private _Router: Router) {
    if (localStorage.getItem('userData') != null) {
      this.saveCurrentUser();
    }
  }

  saveCurrentUser() {
    // retrieve token:
    // let token: any = localStorage.getItem('userTocken');
    // this.currentUser = jwtDecode(token);

    let userData: any = localStorage.getItem('userData') || '';
    let token: any = JSON.parse(userData);
    this.currentUser.next(token);
  }

  regitster(formData: any): Observable<any> {
    const url = environments.baseUrl + '/auth/signup';
    // post two args(api,data)
    return this._HttpClient.post(url, formData);
  }

  login(loginData: any): Observable<any> {
    const url = environments.baseUrl + '/auth/login';
    return this._HttpClient.post(url, loginData);
  }

  logout() {
    this.currentUser.next(null);
    localStorage.removeItem('userData');
    this._Router.navigate(['/login']);
  }

  ngOnInit(): void {}
}
