import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiCallsServiceService } from './api-calls/api--calls-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  private _name: string;
  private _email: string;
  private _password: string;

  //Getters
  get name() {
    return this._name;
  }

  get email() {
    return this._email;
  }

  get password() {
    return this._password;
  }

  //Setters
  set name(payload: string) {
    this._name = payload;
  }

  set email(payload: string) {
    this._email = payload;
  }

  set password(payload: string) {
    this._password = payload;
  }

  constructor(
    private _apiCalls: ApiCallsServiceService,
    private _route: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  reset(): void {
    this.name = '';
    this.email = '';
    this.password = '';
  }

  signUp(): void {
    console.log(this.name, this.email, this.password);
    this._apiCalls
      .signUp({
        name: this._name,
        email: this._email,
        password: this._password,
      })
      .subscribe((response) => {
        console.log('Response got from server', response.status);
        if (response.status === 200) {
          this._route.navigate(['/signin'], {
            relativeTo: this._activatedRoute,
          });
        } else if (response.status === 400) {
          alert('Request format is not correct');
        } else if (response.status === 500) {
          alert('Server not responded');
        }
      });

    this.reset();
  }
}
