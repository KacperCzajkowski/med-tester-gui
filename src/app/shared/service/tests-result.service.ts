import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { TestsResultEditDetails } from "../api/tests-result-edit-details";
import { SingleTest } from "../api/single-test";
import { TestsResultStatus } from "../api/tests-result-status";

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

  getTestResult(): Observable<TestsResultEditDetails> {
    return this.httpClient.get<TestsResultEditDetails>('/lab-worker/details');
  }

  saveTests(request: SaveSingleTestsRequest): Observable<unknown> {
    return this.httpClient.post<unknown>('/lab-worker/test', request);
  }

  getAllUserTestsResult(): Observable<UserResult[]> {
    return this.httpClient.get<UserResult[]>('/current-user/results');
  }

  getTestResultPreview(id: string): Observable<FullTestsResultDetails> {
    return this.httpClient.get<FullTestsResultDetails>(`/current-user/results/${id}`);
  }
}

export interface UserResult {
  id: string;
  labWorkerFullName: string;
  labName: string;
  createdAt: string;
  testsCount: number;
}

export interface SaveSingleTestsRequest {
  status: TestsResultStatus;
  results: SingleTest[];
}

export interface FullTestsResultDetails {
  id: string;
  createdAt: string;
  updatedAt: string;
  labWorkerDetails: LaboratoryWorkerDetails;
  results: SingleTest[];
}

export interface LaboratoryWorkerDetails {
  labWorkerId: string;
  fullName: string;
  labName: string;
  labId: string;
}
