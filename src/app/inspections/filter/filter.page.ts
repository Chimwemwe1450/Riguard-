import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { ToastService } from 'src/app/shared/services/toast.service';
import { InspectionsListService } from '../inspections-list/inspections-list.service';
import { FilteringService } from '../shared/services/filtering.service';

import { FilterParams } from 'src/app/shared/models/filter-params.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {

  public filterValues: FilterParams;

  constructor(
    private _toastService: ToastService,
    public modalController: ModalController,
    private _filteringService: FilteringService,
    private _inspectionsListService: InspectionsListService
  ) { }

  ngOnInit() {
    this.filterValues = this._filteringService.getParams();
  }

  public onSubmit(): void {
    this._filteringService.filter(this._inspectionsListService.qcps);

    this.dismissModal();
  }

  public onReset(): void {
    this._filteringService.clear();

    this._toastService.presentToast('Filter cleared.', 'primary');
  }

  public dismissModal() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
