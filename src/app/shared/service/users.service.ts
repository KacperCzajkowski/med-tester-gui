import { Injectable } from '@angular/core';
import { BasicUserInfo } from "../model/basic-user-info";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { PatientDetails } from "../api/patient-details";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private readonly httpClient: HttpClient) { }

  getUsersByQuery(query: string): Observable<BasicUserInfo[]> {
    return this.httpClient.get<BasicUserInfo[]>(`/lab-worker/users`, { params: { query: query } });
  }
}
