import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TestTemplateService {

  constructor(private readonly httpClient: HttpClient) { }

  getAllTestTemplates(): Observable<TestTemplate[]> {
    return this.httpClient.get<TestTemplate[]>('/lab-worker/test/templates');
  }

  addTemplateToTest(templateId: string): Observable<unknown> {
    return this.httpClient.post<unknown>(`/lab-worker/test/add/${templateId}`, {});
  }
}

export interface TestTemplate {
  id: string;
  name: string;
}
