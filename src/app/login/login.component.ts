import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm = new FormGroup({
    username: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[A-Z][a-z0-9]{3,8}$'),
    ]),
  });

  isLoggendin: boolean = false;
  error: any = '';

  loginSub: any;

  constructor(private _AuthService: AuthService, private _Router: Router) {}

  ngOnInit(): void {
    if (this._AuthService.currentUser) {
      this.isLoggendin = true;
    } else {
      this.isLoggendin = false;
    }
  }

  loginFormSubmit(loginData: FormGroup) {
    this.loginSub = this._AuthService.login(loginData.value).subscribe({
      next: (response: any) => {
        localStorage.setItem('userData', JSON.stringify(response.user));

        this._AuthService.saveCurrentUser();
        this._Router.navigate(['/home']);
      },
      error: (error: any) => {
        this.error = error.error.message;
        console.log(error);
      },
    });
  }

  ngOnDestroy(): void {
    this.loginSub.unsubscribe();
  }
}
