import { Component, Input, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { SyncReportData } from 'src/app/shared/models/sync-report-data.model';

@Component({
  selector: 'app-sync-report',
  templateUrl: './sync-report.component.html',
  styleUrls: ['./sync-report.component.scss'],
})
export class SyncReportComponent implements OnInit {

  @Input() syncReportData: Array<SyncReportData>;

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  public dismissModal(): void {
    this.modalController.dismiss();
  }
}
