import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {SignupService} from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    // tslint:disable-next-line:variable-name
    private _signupService: SignupService,
    private location: Location,
  ) { }

  ngOnInit(): void {
  }

  add(username: string, email: string, password: string): void {
    username = username.trim();
    email = email.trim();
    password = password.trim();
    if (!username && !email && !password) {
      return;
    }
    this._signupService.create(username, email, password).subscribe(res => {
      console.log(res);
      // this.location.back();
    });
  }

  goBack(): void {
    this.location.back();
  }

}
