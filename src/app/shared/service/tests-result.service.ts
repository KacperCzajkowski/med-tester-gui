import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { TestsResultEditDetails } from "../api/tests-result-edit-details";
import { SingleTest } from "../api/single-test";
import { TestsResultStatus } from "../api/tests-result-status";
import {HttpClient, HttpResponse} from "@angular/common/http";

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

  downloadPdfById(id: string): Observable<Blob> {
    // @ts-ignore
    return this.httpClient.post<Blob>(`/current-user/test/${id}/pdf`, {},  {
      responseType: 'blob' as 'json',
    });
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
