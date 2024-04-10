import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { UtWallService } from '../ut-wall.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { InspectionsListService } from '../../inspections-list/inspections-list.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { SyncStatsService } from 'src/app/shared/services/sync-stats.service';
import { DataStorageService } from 'src/app/shared/services/data-storage.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { FilteringService } from '../../shared/services/filtering.service';

import { ConnectionStatusHelper } from 'src/app/shared/classes/connection-status-helper';

@Component({
  selector: 'app-footer-ut-wall',
  templateUrl: './footer-ut-wall.component.html',
  styleUrls: ['./footer-ut-wall.component.scss'],
})
export class FooterUtWallComponent implements OnInit {

  @Input() currentRoute: number;
  @Input() isFirstRoute: boolean;
  @Input() isFinalRoute: boolean;
  @Input() isFormValid: boolean;
  @Input() validationMessage: string;

  @Output() nextClicked = new EventEmitter<boolean>();

  public connection = new ConnectionStatusHelper();

  constructor(
    private _utWallService: UtWallService,
    private _inspectionsListService: InspectionsListService,
    private _authService: AuthService,
    private _toastService: ToastService,
    private _alertService: AlertService,
    private _syncStatsService: SyncStatsService,
    private _dataStorage: DataStorageService,
    private _loadingService: LoadingService,
    private _filteringService: FilteringService
  ) { }

  ngOnInit() {}

  public async onSubmit(): Promise<void> {
    this.nextClicked.emit(true);

    if (this.isFormValid) {
      this._utWallService.setFormAsComplete();
      this._utWallService.storePreviousData();

      await this._loadingService.presentLoading('Submitting Inspection...')
        .then(async () => {
          // Check connection.
          if (this.connection.status.connected) {
            // submit inspection.
            await this._utWallService.postInspectionData()
            .then((res: boolean) => {

              if (res) {
                this._toastService.presentToast('Submission Successful', 'primary');

                this._inspectionsListService.removeQcp();
                this._filteringService.filter(this._inspectionsListService.qcps);
                this._utWallService.screenNavigation('exit', this.currentRoute);

              } else {
                this.runIncrement();
                this.storeInspection('Submission failed, inspection stored.');

                this._inspectionsListService.removeQcp();
                this._filteringService.filter(this._inspectionsListService.qcps);
              }

            })
            .catch(() => {
              console.log('Post failed');
            });

          } else {
            // or store inspection.
            this._alertService.presentAlert(
              'No Internet Connection',
              'Completed inspection will be stored. Proceed to store this inspection?',
              'Yes',
              'Cancel',
              async () => {
                const inspection = await this._dataStorage.lookupInspectionData(this._inspectionsListService.currentQcp.cqmId);

                if (inspection) {
                  if ('complete' in inspection['data']) {
                    if (!inspection['data'].complete) {
                      console.log('incrementation should be done.');
                      this._syncStatsService.incrementAwaitingSync();
                    }
                  } else {
                    console.log('incrementation should be done.');
                    this._syncStatsService.incrementAwaitingSync();
                  }
                } else {
                  console.log('no stored insp. increment.');
                  this._syncStatsService.incrementAwaitingSync();
                }

                this.storeInspection('Inspection Stored');
                this._inspectionsListService.removeQcp();
                this._filteringService.filter(this._inspectionsListService.qcps);
              },
              async () => {
                this._toastService.presentToast('Inspection not stored.', 'warning');
              });
          }
        });
      this._loadingService.dismissLoading();

    } else {
      this._toastService.presentToast(this.validationMessage, 'warning');
    }
  }

  public onNext(): void {
    this.nextClicked.emit(true);

    if (this.isFormValid) {
      this._utWallService.screenNavigation('next', this.currentRoute);
    } else {
      this._toastService.presentToast(this.validationMessage, 'danger');
    }
  }

  public onPrevious(): void {
    this._utWallService.screenNavigation('previous', this.currentRoute);

  }

  public onExit(): void {
    this.storeInspection('Inspection Stored');
  }


  private storeInspection(message: string): void {
    this._utWallService.storeInspectionData(this.currentRoute)
      .then(res => {
        console.log('inspection stored: ', res);
        this._toastService.presentToast(message, 'primary');
        this._utWallService.screenNavigation('exit', this.currentRoute);
      })
      .catch(error => {
        console.log('inspection storage failed: ', error);
      });
  }

  private async runIncrement(): Promise<void> {
    const inspection = await this._dataStorage.lookupInspectionData(this._inspectionsListService.currentQcp.cqmId);

    if (inspection) {
      if ('complete' in inspection['data']) {
        if (!inspection['data'].complete) {
          console.log('incrementation should be done.');
          this._syncStatsService.incrementAwaitingSync();
        }
      } else {
        console.log('incrementation should be done.');
        this._syncStatsService.incrementAwaitingSync();
      }
    } else {
      console.log('no stored insp. increment.');
      this._syncStatsService.incrementAwaitingSync();
    }
  }

}
