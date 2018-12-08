import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectDetectionComponent } from './object-detection.component';

@NgModule({
  declarations: [ObjectDetectionComponent],
  imports: [
    CommonModule
  ],
  exports: [ObjectDetectionComponent]
})
export class ObjectDetectionModule { }
