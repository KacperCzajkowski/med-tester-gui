import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { SingleTest } from "../../../../shared/api/single-test";
import { MatTable } from "@angular/material/table";
import { Indicator } from "../../../../shared/api/indicator";
import { MatDialog } from "@angular/material/dialog";
import { AddEditIndicatorModalComponent } from "./add-edit-indicator-modal/add-edit-indicator-modal.component";
import { IndicatorDialogStatus } from "./add-edit-indicator-modal/indicator-dialog-status";
import { take } from "rxjs/operators";
import {
  AddSingleTestModalComponent,
  SingleTestDialogStatus
} from "../add-single-test-modal/add-single-test-modal.component";

@Component({
  selector: 'app-single-test-result',
  templateUrl: './single-test-result.component.html',
  styleUrls: ['./single-test-result.component.scss']
})
export class SingleTestResultComponent {
  @Input()
  test!: SingleTest
  @Output()
  editedElement = new EventEmitter<SingleTest>();
  @Output()
  elementRemoved = new EventEmitter<boolean>()

  @ViewChild(MatTable) table!: MatTable<Indicator>;
  displayedColumns: string[] = ['name', 'result', 'unit', 'referenceRangeMin', 'referenceRangeMax'];

  constructor(private readonly matDialog: MatDialog) {
  }

  add(): void {
    const ref = this.matDialog.open(AddEditIndicatorModalComponent, {
      width: '500px',
      data: {
        status: IndicatorDialogStatus.Add
      }
    });

    ref.afterClosed().pipe(take(1))
      .subscribe(value => {
        this.test.indicators.push(value);
        this.refresh();
      });
  }

  refresh(): void {
    this.table.renderRows();
    this.editedElement.emit(this.test);
  }

  openEditModal(index: number): void {
    const ref = this.matDialog.open(AddEditIndicatorModalComponent, {
      width: '500px',
      data: {
        status: IndicatorDialogStatus.Edit,
        indicator: this.test.indicators[index]
      }
    });

    ref.afterClosed().pipe(take(1)).subscribe(value => {
      this.test.indicators[index] = value;
      this.refresh();
    })
  }

  editTest() {
    const ref = this.matDialog.open(AddSingleTestModalComponent, {
      width: "500",
      data: {
        status: SingleTestDialogStatus.Edit,
        name: this.test.name,
        icdCode: this.test.icdCode
      }
    });

    ref.afterClosed().pipe(
      take(1),
    ).subscribe(value => {
      this.test.name = value.name;
      this.test.icdCode = value.icdCode;

      this.refresh();
    });
  }
}
