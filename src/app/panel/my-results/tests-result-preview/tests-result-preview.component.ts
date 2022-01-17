import { Component, OnInit } from '@angular/core';
import { TestsResultService } from "../../../shared/service/tests-result.service";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { map, switchMap, tap } from "rxjs/operators";
import { PatientDetails } from "../../../shared/api/patient-details";

@Component({
  selector: 'app-tests-result-preview',
  templateUrl: './tests-result-preview.component.html',
  styleUrls: ['./tests-result-preview.component.scss']
})
export class TestsResultPreviewComponent {
  testsResult$ = this.activatedRoute.paramMap.pipe(
    map((paramMap: ParamMap) => paramMap.get('id') ?? ''),
    switchMap(id => this.testsResultService.getTestResultPreview(id))
  );

  constructor(
    private readonly testsResultService: TestsResultService,
    private readonly activatedRoute: ActivatedRoute
  ) { }

  getKeysToPrint(details: any): any {
    return Object.entries(details);
  }
}
