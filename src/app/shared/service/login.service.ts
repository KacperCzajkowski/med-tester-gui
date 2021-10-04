import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginProperties } from '../model/login-properties';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { LoggedUser } from '../model/logged-user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private readonly httpClient: HttpClient) { }

  login(properties: LoginProperties): Observable<{}> {
    return this.httpClient.post<{}>('/login', properties);
  }

  isLoggedIn(): Observable<boolean> {
    return this.httpClient.get<LoggedUser>('/login-status').pipe(
      map(value => !!value),
      catchError(() => of(false)),
    );
  }

  logout(): Observable<{}> {
    return this.httpClient.post('/logout', {});
  }
}
