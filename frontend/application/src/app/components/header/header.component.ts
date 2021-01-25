import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isAuthorized = localStorage.getItem('userAuthKey') ? 1 : 0;
  constructor() { }

  ngOnInit(): void {
  }

  logout(): any {
    if (localStorage.getItem('userAuthKey')) {
      localStorage.removeItem('userAuthKey');
      this.isAuthorized = 0;
    }
  }

}
