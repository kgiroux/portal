import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {ErrorService} from './error/error.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private errorService: ErrorService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const url = state.url;
    const check = this.checkAccess();
    return true;
  }

  /**
   * Method that will check if we can access to a particular page
   */
  private checkAccess(): boolean {
    try {
      const payLoad  = JSON.parse(localStorage.getItem('payLoadContent'));
      return true;
    } catch (error) {
      console.log('Can\'t not access to this page');
      this.errorService.openSnackBar('Can\'t access to this page', false, null);
    }
    return false;
  }
}
