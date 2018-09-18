import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ErrorModule } from '../error/error.module';
import { ErrorService } from '../error/error.service';
import { FormsModule } from '@angular/forms';

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
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [JwtHelperService, ErrorService]
})
export class LoginModule { }
