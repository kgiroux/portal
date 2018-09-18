import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { environment } from '../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ErrorService } from '../error/error.service';
import { Router } from '@angular/router';
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
    const encryptedHeader: string =
      this.loginService.performEncryption(this.login + ':' +
      this.loginService.performEncryption(this._password, environment.login.protocol), 'base64');
    const self = this;
    console.log(encryptedHeader);
    localStorage.setItem('access_token', 'Basic ' + encryptedHeader);
    this.loginService.authentification('Basic ' + encryptedHeader).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.error(err);
        this.errorService.openSnackBar('Impossible d\'effectuer l\'authentification', false, null); },
      () => {
        self.router.navigate(['/home']);
      }
    );

  }
}
