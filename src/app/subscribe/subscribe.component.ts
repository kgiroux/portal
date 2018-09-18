import { Component, OnInit } from '@angular/core';
import { ErrorService } from '../error/error.service';
import { AuthenticationService } from '../login/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  /**
   * Login
   */
  private _login: string;
  /**
   * Email
   */
  private _email: string;
  /**
   * password
   */
  private _password: string;
  /**
   * Password confirmation
   */
  private _password_confirmation: string;

  get login(): string {
    return this._login;
  }
  set login(login: string) {
    this._login = login;
  }

  get email(): string {
    return this._email;
  }
  set email(email: string) {
    this._email = email;
  }

  get password(): string {
    return this._password;
  }
  set password(password: string) {
    this._password = password;
  }

  get password_confirmation(): string {
    return this._password_confirmation;
  }
  set password_confirmation(_password_confirmation: string) {
    this._password_confirmation = _password_confirmation;
  }

  constructor(
    private authenticationService: AuthenticationService,
    private errorService: ErrorService,
    private router: Router) { }

  ngOnInit() {
  }

  public subscription() {
    let reject = false;
    if (this.login === '' || this.login === undefined) {
      this.errorService.openSnackBar('Login non renseignée', false, null);
      reject = true;
    } else if (this.email === '' || this.email === undefined) {
      this.errorService.openSnackBar('Email non renseignée', false, null);
      reject = true;
    } else if ((this.password === '' || this.password === undefined) ||
    (this.password_confirmation === '' || this.password_confirmation === undefined)) {
      this.errorService.openSnackBar('Password ou confirmation du mot de passe non renseignée', false, null);
      reject = true;
    }
    if (!reject && this.password === this.password_confirmation) {
      const self = this;
      this.authenticationService.subscription(this.email, this.password, this.login).subscribe(
        (data) => {
          console.log(data);
        },
        (err) => {
          console.error(err);
          this.errorService.openSnackBar('Impossible de procéder à l\'inscription', false, null); },
        () => {
          self.router.navigate(['/home']);
        });
    } else {
      if (!reject) {
        this.errorService.openSnackBar('Les mots de passe ne correspondent pas', false, null);
      }
    }
  }
}
