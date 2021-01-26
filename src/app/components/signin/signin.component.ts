import { Component, OnInit } from '@angular/core';
import { ApiCallsServiceService } from './api-calls/api--calls-service.service';
import { StateManagerService } from '../../global-services/state-manager.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private _apiCallService: ApiCallsServiceService,
    private _stateManager: StateManagerService,
    private _route: Router
  ) {}

  ngOnInit(): void {}

  SignIn(): void {
    console.log({
      email: this.email,
      password: this.password,
    });

    this._stateManager.loader.next(true);
    this._apiCallService
      .signIn({
        email: this.email,
        password: this.password,
      })
      .subscribe(
        (response) => {
          this._stateManager.loader.next(false);
          console.log(response.statusText, response.status);
          if (response.status === 200) {
            console.log(response.body);

            if (window) {
              localStorage.setItem('token', response.body.token);
              this._stateManager.isSignedIn.next(true);
              this._route.navigate(['/']);
            }
            // this._stateManager.isSignedIn = true;
          }
        },
        (error: HttpErrorResponse) => {
          console.log(error.status);
          this._stateManager.loader.next(false);
          if (error.status === 404) {
            alert('User not found');
          }
          if (error.status === 403) {
            alert('Password is not correct');
          }
          if (error.status === 500) {
            alert('Server didn`t responded');
          }
        },
        () => {
          console.log('Completed');
          this._stateManager.loader.next(false);
        }
      );
  }
}
