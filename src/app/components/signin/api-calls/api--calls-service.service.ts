import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiCallsServiceService {
  private _baseUrl: string = environment.base_url;
  private _signupUrl: string = `${this._baseUrl}/signin`;
  constructor(private http: HttpClient) {}
  signIn(request: any) {
    console.log(request);
    return this.http.post<any>(this._signupUrl, request, {
      observe: 'response',
    });
  }
}
