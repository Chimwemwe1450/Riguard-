import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss'],
})
export class ContentHeaderComponent implements OnInit {

  @Input() heading: string;
  @Input() stepCount: number;
  @Input() currentStep: number;

  constructor() { }

  ngOnInit() {}

}
