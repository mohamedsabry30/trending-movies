import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  isLoggedin: boolean = false;

  constructor(private _AuthService: AuthService) {
    // console.log('local storage initial is', localStorage.getItem('userData'));
    // console.log(
    //   '_AuthService.currentUser.getValue',
    //   _AuthService.currentUser.getValue()
    // );
  }

  ngOnInit(): void {
    this._AuthService.currentUser.subscribe({
      next: (token: any) => {
        if (token) {
          this.isLoggedin = true;
        } else {
          this.isLoggedin = false;
        }
      },
    });
  }

  goLogout() {
    this._AuthService.logout();
  }
}

// old
// constructor(private _AuthService: AuthService) {
//   _AuthService.currentUser.subscribe(() => {
//     if (_AuthService.currentUser.getValue() != null) {
//       this.isLoggedin = true;
//     } else {
//       this.isLoggedin = false;
//     }
//   });
// }
