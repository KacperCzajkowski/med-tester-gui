import {Component} from '@angular/core';
import {TestsResultService} from "../../../shared/service/tests-result.service";
import {PatientDetails} from "../../../shared/api/patient-details";
import {MatDialog} from "@angular/material/dialog";
import {
  EditSingleTestModalComponent,
  SingleTestDialogStatus
} from "./edit-single-test-modal/edit-single-test-modal.component";
import {SingleTest} from "../../../shared/api/single-test";
import {filter, map, switchMap, take, tap} from "rxjs/operators";
import {BehaviorSubject} from "rxjs";
import {TestsResultEditDetails} from "../../../shared/api/tests-result-edit-details";
import {TestsResultStatus} from "../../../shared/api/tests-result-status";
import {AcceptRemovingTestDialogComponent} from "./accept-removing-test-dialog/accept-removing-test-dialog.component";
import {Router} from "@angular/router";
import {TestTemplateService} from "../../../shared/service/test-template.service";
import {AddTemplateComponent} from "./add-template/add-template.component";

@Component({
  selector: 'app-edit-tests-result',
  templateUrl: './edit-tests-result.component.html',
  styleUrls: ['./edit-tests-result.component.scss']
})
export class EditTestsResultComponent {
  refresh$ = new BehaviorSubject<boolean>(true);

  testsResult$ = this.refresh$.asObservable().pipe(
    switchMap(() => this.testsResultService.getTestResult()),
    tap((value: TestsResultEditDetails) => this.resultsArray$.next(value.results))
  );

  resultsArray$ = new BehaviorSubject<SingleTest[]>([]);

  constructor(
    private readonly testsResultService: TestsResultService,
    private readonly matDialog: MatDialog,
    private readonly router: Router,
    private readonly templateService: TestTemplateService
  ) {
  }

  getKeysToPrint(details: PatientDetails): any {
    return Object.entries(details);
  }

  openModal(): void {
    this.templateService.getAllTestTemplates().pipe(
      switchMap(templates => this.matDialog.open(AddTemplateComponent, {
        width: "500",
        data: templates
      }).afterClosed()),
      take(1),
      switchMap(value => this.templateService.addTemplateToTest(value))
    ).subscribe(() => this.refresh$.next(true));
  }

  reactOnSingleTestResultChange($event: SingleTest, index: number) {
    const results = this.resultsArray$.value;
    results[index] = $event;

    this.testsResultService.saveTests({
      status: TestsResultStatus.InProgress,
      results: results
    }).pipe(
      take(1)
    ).subscribe(() => this.refresh$.next(true));
  }

  removeTest(i: number): void {
    const ref = this.matDialog.open(AcceptRemovingTestDialogComponent);

    ref.afterClosed().pipe(
      take(1),
      filter(value => value),
      map(() => {
        const array = this.resultsArray$.value;

        array.splice(i, 1);

        return array;
      }),
      switchMap(value => this.testsResultService.saveTests({
        status: TestsResultStatus.InProgress,
        results: value
      })),
      take(1)
    ).subscribe(() => this.refresh$.next(true));
  }

  save(): void {
    this.testsResultService.saveTests({
      status: TestsResultStatus.Done,
      results: this.resultsArray$.value
    }).pipe(
      take(1)
    ).subscribe(() => this.router.navigate(['/panel/lab-worker/main']));
  }
}
