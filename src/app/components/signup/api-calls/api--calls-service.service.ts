import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiCallsServiceService {
  private _baseUrl: string = environment.base_url;
  private _signupUrl: string = `${this._baseUrl}/signup`;
  constructor(private http: HttpClient) {}
  signUp(request: any) {
    return this.http.post<any>(this._signupUrl, request, {
      observe: 'response',
    });
  }
}
