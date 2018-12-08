import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestureRecognitionComponent } from './gesture-recognition.component';

@NgModule({
  declarations: [GestureRecognitionComponent],
  imports: [
    CommonModule
  ],
  exports: [GestureRecognitionComponent]
})
export class GestureRecognitionModule { }
