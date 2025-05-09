import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms'; // form group imports
import { AuthService } from '../auth.service'; // importing service
import { Router } from '@angular/router'; // import programatic router

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  // creating form group of form controls
  registerForm = new FormGroup({
    username: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    fullName: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[A-Z][a-z0-9]{3,8}$'),
    ]),
    confirmPassword: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[A-Z][a-z0-9]{3,8}$'),
    ]),
  });

  errors: any = '';

  // adding service
  constructor(private _AuthService: AuthService, private _Router: Router) {}

  registerFormSubmit(regForm: FormGroup) {
    this._AuthService.regitster(regForm.value).subscribe(
      (response) => {
        this._Router.navigate(['/login']);
      },
      (error) => {
        console.log(error);
        this.errors = error.error.message;
      }
    );
  }

  ngOnInit(): void {}
}
