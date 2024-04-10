import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ToastService } from 'src/app/shared/services/toast.service';
import { VisualStaticPinsService } from '../visual-static-pins.service';

@Component({
  selector: 'app-footer-visual-static',
  templateUrl: './footer-visual-static.component.html',
  styleUrls: ['./footer-visual-static.component.scss'],
})
export class FooterVisualStaticComponent implements OnInit {

  @Input() currentRoute: number;
  @Input() isFirstRoute: boolean;
  @Input() isFinalRoute: boolean;
  @Input() isFormValid: boolean;
  @Input() validationMessage: string;

  @Output() nextClicked = new EventEmitter<boolean>();

  constructor(
    private _toastService: ToastService,
    private _visualStaticPinsService: VisualStaticPinsService
  ) { }

  ngOnInit() {}

  public onSubmit(): void {
    this.nextClicked.emit(true);

    if (this.isFormValid) {
      this._visualStaticPinsService.postInspectionData();
    }
  }

  public onNext(): void {
    this.nextClicked.emit(true);

    if (this.isFormValid) {
      this._visualStaticPinsService.screenNavigation('next', this.currentRoute);
    } else {
      this._toastService.presentToast(this.validationMessage, 'danger');
    }

  }

  public onPrevious(): void {
    this._visualStaticPinsService.screenNavigation('previous', this.currentRoute);

  }

  public onExit(): void {
    this._visualStaticPinsService.screenNavigation('exit', this.currentRoute);

  }

}
