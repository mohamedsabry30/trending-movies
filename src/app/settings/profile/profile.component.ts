import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  userName: string = '';
  email: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userName = this.authService.currentUser._value.username;
    this.email = this.authService.currentUser._value.email;
    console.log(this.authService.currentUser);
  }
}
