import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TestsResultService {
  constructor(private readonly httpClient: HttpClient) { }

  checkIfAnyResultIsInProgress(): Observable<boolean> {
    return this.httpClient.get<{}>('/lab-worker/check').pipe(
      map(result => Object.keys(result).length !== 0),
    );
  }

  createNewLabByPesel(value: string): Observable<unknown> {
    return this.httpClient.post<unknown>('/lab-worker/test/create', { userPesel: value });
  }
}
