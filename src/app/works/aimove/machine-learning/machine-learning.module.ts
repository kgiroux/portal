import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MachineLearningComponent } from './machine-learning.component';
import {MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatListModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [MachineLearningComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [MachineLearningComponent]
})
export class MachineLearningModule { }
