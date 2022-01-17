import { Component, OnInit } from '@angular/core';
import { TestsResultService } from "../../../shared/service/tests-result.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-all-results',
  templateUrl: './all-results.component.html',
  styleUrls: ['./all-results.component.scss']
})
export class AllResultsComponent {
  testsResults$ = this.testsResultService.getAllUserTestsResult();

  displayedColumns: string[] = [
    'id',
    'labWorker',
    'labName',
    'createdAt',
    'testsCount'
  ];

  constructor(
    private readonly testsResultService: TestsResultService,
    private readonly router: Router
  ) { }

  openResult(id: string) {
    this.router.navigate(['/panel/my-results', id]);
  }
}
