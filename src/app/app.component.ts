import { Component, OnInit } from '@angular/core';

import { AppUpdateReminder } from './shared/services/app-update-reminder.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(
    private _appUpdateReminder: AppUpdateReminder
  ) {}

  ngOnInit(): void {
    this._appUpdateReminder.init();
  }
}
