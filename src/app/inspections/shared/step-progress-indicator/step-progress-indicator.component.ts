import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-step-progress-indicator',
  templateUrl: './step-progress-indicator.component.html',
  styleUrls: ['./step-progress-indicator.component.scss'],
})
export class StepProgressIndicatorComponent implements OnInit, AfterViewInit {

  @ViewChild('percent') percentage: ElementRef;
  @ViewChild('steps') steps: ElementRef;

  @Input() stepCount: number;
  @Input() currentStep: number;

  public stepCountArray: Array<number> = [];
  // private currentStep = 1;

  constructor() { }

  ngOnInit() {
    this.buildCountArray();
  }

  ngAfterViewInit(): void {
    // Reduce current step to
    // adapt to JS counting.
    this.currentStep--;

    /* Array.prototype.forEach.call(this.steps.nativeElement.children, (e) => {
      e.addEventListener('click', (x) => {
        this.progress(Number(x.target.id));
      });
    }); */

    this.progress(this.currentStep);
  }

  public progress(stepNum: number): void {
    let stepCount = this.stepCount;
    stepCount--;
    const pp = 100 / stepCount * stepNum;

    // Move progress line.
    this.percentage.nativeElement.style.width = `${pp}%`;

    // Fill progress circle.
    Array.prototype.forEach.call(this.steps.nativeElement.children, (e) => {
      if (Number(e.id) === stepNum) {
        e.classList.add('selected');
        e.classList.remove('completed');
      }
      if (Number(e.id) < stepNum) {
        e.classList.add('completed');
      }
      if (Number(e.id) > stepNum) {
        e.classList.remove('selected', 'completed');
      }
    });
  }

  private buildCountArray(): void {
    for (let i = 0; i < this.stepCount; i++) {
      this.stepCountArray.push(i);
    }
  }

}
