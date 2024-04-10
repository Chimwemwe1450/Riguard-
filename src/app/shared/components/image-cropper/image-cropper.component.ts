import { Component, ElementRef, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import 'jsuites/dist/jsuites.layout.css';
import Cropper from '@jsuites/cropper';

@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.scss'],
})
export class ImageCropperComponent implements OnInit, AfterViewInit {

  // eslint-disable-next-line @typescript-eslint/ban-types
  @Input() properties: Object;
  @ViewChild('crop') crop: ElementRef;

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    Cropper(this.crop.nativeElement, this.properties);
  }

}

