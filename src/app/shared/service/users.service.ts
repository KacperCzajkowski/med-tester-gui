import { Injectable } from '@angular/core';
import { BasicUserInfo } from "../model/basic-user-info";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private readonly httpClient: HttpClient) { }

  getUsersByQuery(query: string): Observable<BasicUserInfo[]> {
    return this.httpClient.get<BasicUserInfo[]>(`/lab-worker/users`, { params: { query: query } });
  }

  add(details: any): Observable<unknown> {
    return this.httpClient.post<unknown>('/lab-worker/create', {
      email: details.email,
      roles: details.role,
      firstName: details.firstName,
      lastName: details.lastName,
      pesel: details.pesel,
      gender: details.gender
    });
  }

  getUserDetails(): Observable<UserDetails> {
    return this.httpClient.get<UserDetails>('/current-user/details');
  }
}

export interface UserDetails {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  pesel: string;
  gender: string;
  labDetails: LaboratoryDetails | null;
}

export interface LaboratoryDetails {
  laboratoryId: string;
  laboratoryName: string;
  laboratoryCreatedAt: string;
}
