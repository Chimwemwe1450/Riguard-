import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-progress-indicator',
  templateUrl: './progress-indicator.component.html',
  styleUrls: ['./progress-indicator.component.scss'],
})
export class ProgressIndicatorComponent implements OnInit, AfterViewInit, OnChanges {

  @ViewChild('myCircle') progressCircle: ElementRef;
  @ViewChild('progressInput') input: ElementRef;

  @Input() percentage: number;

  // Progress completion svg
  // circle attribute values.
  public radius: number;
  public circumference: number;

  private viewInitialized = false;

  constructor() { }

  ngOnChanges(): void {
    if (this.viewInitialized) {
      this.setProgress(this.percentage);
    }
  }

  ngAfterViewInit(): void {
    this.viewInitialized = true;

    this.radius = this.progressCircle.nativeElement.r.baseVal.value;
    this.circumference = this.radius * 2 * Math.PI;

    this.progressCircle.nativeElement.style.strokeDasharray = `${this.circumference} ${this.circumference}`;
    this.progressCircle.nativeElement.style.strokeDashoffset = `${this.circumference}`;

    this.setProgress(this.percentage);
  }

  ngOnInit() {}

  /* public inputChange(): void {
    if (+this.input.nativeElement.value < 101 && +this.input.nativeElement.value > -1) {
      this.setProgress(+this.input.nativeElement.value);
    }
  } */

  private setProgress(percent: number): void {
    const offset = this.circumference - percent / 100 * this.circumference;
    this.progressCircle.nativeElement.style.strokeDashoffset = offset.toString();
  }

}
