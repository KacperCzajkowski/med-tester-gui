import { Component } from '@angular/core';
import { TestsResultService } from "../../../shared/service/tests-result.service";
import { PatientDetails } from "../../../shared/api/patient-details";
import { MatDialog } from "@angular/material/dialog";
import {
  AddSingleTestModalComponent,
  SingleTestDialogStatus
} from "./add-single-test-modal/add-single-test-modal.component";
import { SingleTest } from "../../../shared/api/single-test";
import { filter, map, switchMap, take, tap } from "rxjs/operators";
import { BehaviorSubject } from "rxjs";
import { TestsResultEditDetails } from "../../../shared/api/tests-result-edit-details";
import { TestsResultStatus } from "../../../shared/api/tests-result-status";
import { AcceptRemovingTestDialogComponent } from "./accept-removing-test-dialog/accept-removing-test-dialog.component";
import { Router } from "@angular/router";

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
    private readonly router: Router
  ) {
  }

  getKeysToPrint(details: PatientDetails): any {
    return Object.entries(details);
  }

  openModal(): void {
    const dialogRef = this.matDialog.open(AddSingleTestModalComponent, {
      width: "500",
      data: {
        status: SingleTestDialogStatus.Add
      }
    });

    dialogRef.afterClosed().pipe(
      take(1),
      map(value => {
        return {
          name: value.name,
          icdCode: value.icdCode,
          indicators: []
        } as SingleTest;
      }),
      map(value => {
        this.resultsArray$.next([...this.resultsArray$.value, value]);

        return this.resultsArray$.value;
      }),
      switchMap(value => {
        return this.testsResultService.saveTests({
          status: TestsResultStatus.InProgress,
          results: value
        });
      }),
      take(1)
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
