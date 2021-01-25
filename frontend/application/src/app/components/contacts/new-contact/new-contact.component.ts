import { Component, OnInit } from '@angular/core';
import {TestService} from '../../../services/test.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent implements OnInit {

  constructor(
  // tslint:disable-next-line:variable-name
  private _testService: TestService,
  private location: Location) {}

  ngOnInit(): void {
  }


  add(name: string, src: string, phone: string, telegram: string): void {
    name = name.trim();
    src = src.trim();
    phone = phone.trim();
    telegram = telegram.trim();
    if (!name && !src && !phone && !telegram) {
      return;
    }
    this._testService.create(name, src, phone, telegram).subscribe(() => {
      this.location.back();
    });
  }

}
