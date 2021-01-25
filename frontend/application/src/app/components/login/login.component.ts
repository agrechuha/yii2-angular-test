import {Component, OnInit} from '@angular/core';

import {Location} from '@angular/common';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    // tslint:disable-next-line:variable-name
    private _authService: AuthService,
    private location: Location,
  ) {
  }

  ngOnInit(): void {
  }

  login(email: string, password: string, rememberMe: string): void {
    email = email.trim();
    password = password.trim();
    rememberMe = rememberMe.trim();
    if (!email && !password) {
      return;
    }
    this._authService.login(email, password, Number(rememberMe)).subscribe(res => {
      if (typeof res.isSuccess !== 'undefined' && typeof res.userAuthKey !== 'undefined') {
        localStorage.setItem('userAuthKey', res.userAuthKey);
      }
      console.log(res);
      this.location.back();
    });
  }

  goBack(): void {
    this.location.back();
  }

}
