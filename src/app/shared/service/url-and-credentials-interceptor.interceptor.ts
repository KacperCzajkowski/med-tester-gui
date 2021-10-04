import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class UrlAndCredentialsInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.includes('/assets/')) {
      return next.handle(request);
    }

    const updatedRequest = request.clone({
      withCredentials: true,
      url: `${environment.apiUrl}${request.url}`
    });
    return next.handle(updatedRequest);
  }
}
