import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  invalidLogin = false;

  constructor(private router: Router) { }

  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['admin-manage']);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}
