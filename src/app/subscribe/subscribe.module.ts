import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { ErrorModule } from '../error/error.module';
import { FormsModule } from '@angular/forms';
import { SubscribeComponent } from './subscribe.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ErrorModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule
  ],
  exports: [SubscribeComponent],
  declarations: [SubscribeComponent]
})
export class SubscribeModule { }
