import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { environment } from '../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ErrorService } from '../error/error.service';
import { Router } from '@angular/router';
import {TokenPayload} from './tokenpayload';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private _login: string;

  get login(): string {
    return this._login;
  }
  set login(login: string) {
    this._login = login;
  }
  private _password: string;
  set password(password: string) {
    this._password = password;
  }
  get password(): string{
    return this._password;
  }

  constructor(
    private loginService: AuthenticationService,
    private jwtHelperService: JwtHelperService,
    private errorService: ErrorService,
    private router: Router) { }

  ngOnInit() {
  }

  /**
   * [checkAuth perform a request for trying to check the login and mdp]
   */
  public checkAuth(): void {
    const self = this;
    this.loginService.authentication(this.login, this.password).subscribe(
      (data) => {
        console.log(data);
        localStorage.setItem('access_token', data['token']);
        localStorage.setItem('payLoadContent', this.decodeToken(data['token']).userType);
      },
      (err) => {
        console.error(err);
        this.errorService.openSnackBar('Impossible d\'effectuer l\'authentication', false, null); },
      () => {
        self.router.navigate(['/dofustuff']);
      }
    );

  }

  /**
   * Decode the token for extracting list of the access.
   * @param data
   */
  private decodeToken(data: string): TokenPayload {
    const parts = data.split('.');
    try {
      return JSON.parse(atob(parts[1]));
    } catch (err) {
      throw new Error('Bad token payload encoding');
    }
  }
}
