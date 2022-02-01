import { Component, OnInit } from '@angular/core';
import { TestsResultService } from "../../../shared/service/tests-result.service";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import {map, switchMap, take, tap} from "rxjs/operators";
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

  downloadPdf(): void {
    this.activatedRoute.paramMap.pipe(
      map((paramMap: ParamMap) => paramMap.get('id') ?? ''),
      switchMap(id => this.testsResultService.downloadPdfById(id)),
      take(1),
    ).subscribe(value => this.downLoadFile(value, 'application/pdf'));
  }

  downLoadFile(data: any, type: string) {
    let blob = new Blob([data], { type: type});
    let url = window.URL.createObjectURL(blob);
    let pwa = window.open(url);
    if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
      alert( 'Please disable your Pop-up blocker and try again.');
    }
  }
}
