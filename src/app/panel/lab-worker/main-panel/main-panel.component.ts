import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { UsersService } from "../../../shared/service/users.service";
import { TestsResultService } from "../../../shared/service/tests-result.service";
import { Router } from "@angular/router";
import { filter, switchMap, take } from "rxjs/operators";
import { of } from "rxjs";
import { StartNewTestModalComponent } from "../start-new-test-modal/start-new-test-modal.component";

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.scss']
})
export class MainPanelComponent {
  constructor(
    private readonly matDialog: MatDialog,
    private readonly usersService: UsersService,
    private readonly testsResultService: TestsResultService,
    private readonly router: Router
  ) {
  }

  startNewTest(): void {
    this.testsResultService.checkIfAnyResultIsInProgress().pipe(
      take(1),
      switchMap(value => {
        if (!value) {
          const ref = this.matDialog.open(StartNewTestModalComponent, {minWidth: 600});

          return ref.afterClosed().pipe(
            filter(value => value !== undefined),
            switchMap(value => this.testsResultService.createNewLabByPesel(value))
          );
        } else {
          return of(undefined);
        }
      }),
      take(1),
    ).subscribe(() => {
      this.router.navigate(['/panel/lab-worker/edit']);
    });
  }
}
