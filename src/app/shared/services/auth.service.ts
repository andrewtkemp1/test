import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRequest, LoginResponse } from '../interfaces/auth.interface';

@Injectable()
export default class AuthService {
  private baseURL = 'https://gotlivedata.io/api/v1/login';
  constructor(private http: HttpClient) { }

  login(loginParams: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.baseURL, loginParams);
  }
}
