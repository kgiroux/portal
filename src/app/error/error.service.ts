import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(public snackBar: MatSnackBar) { }

  public openSnackBar(message: string, isAction: boolean, actionText: string) {
    if (isAction) {
      this.snackBar.open(message, actionText, {
        duration: 5000,
        horizontalPosition: 'right',
        verticalPosition: 'top'
      });
    } else {
      this.snackBar.open(message, null, {
        duration: 5000,
        horizontalPosition: 'right',
        verticalPosition: 'top'
      });
    }
  }
}
