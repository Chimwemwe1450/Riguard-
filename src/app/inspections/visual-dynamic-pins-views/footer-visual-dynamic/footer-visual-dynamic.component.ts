import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ToastService } from 'src/app/shared/services/toast.service';
import { VisualDynamicPinsService } from '../visual-dynamic-pins.service';

@Component({
  selector: 'app-footer-visual-dynamic',
  templateUrl: './footer-visual-dynamic.component.html',
  styleUrls: ['./footer-visual-dynamic.component.scss'],
})
export class FooterVisualDynamicComponent implements OnInit {

  @Input() currentRoute: number;
  @Input() isFirstRoute: boolean;
  @Input() isFinalRoute: boolean;
  @Input() isFormValid: boolean;
  @Input() validationMessage: string;

  @Output() nextClicked = new EventEmitter<boolean>();

  constructor(
    private _toastService: ToastService,
    private _visualDynamicPinsService: VisualDynamicPinsService
  ) { }

  ngOnInit() {}

  public onSubmit(): void {
    this.nextClicked.emit(true);

    if (this.isFormValid) {
      this._visualDynamicPinsService.postInspectionData();
    }
  }

  public onNext(): void {
    this.nextClicked.emit(true);

    if (this.isFormValid) {
      this._visualDynamicPinsService.screenNavigation('next', this.currentRoute);
    } else {
      this._toastService.presentToast(this.validationMessage, 'danger');
    }

  }

  public onPrevious(): void {
    this._visualDynamicPinsService.screenNavigation('previous', this.currentRoute);

  }

  public onExit(): void {
    this._visualDynamicPinsService.screenNavigation('exit', this.currentRoute);

  }

}
