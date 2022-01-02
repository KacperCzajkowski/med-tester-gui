import { Component, Inject } from '@angular/core';
import { AddEditIndicatorForm } from "./add-edit-indicator-form";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { IndicatorFormData } from "./indicator-form-data";
import { IndicatorDialogStatus } from "./indicator-dialog-status";

@Component({
  selector: 'app-add-edit-indicator-modal',
  templateUrl: './add-edit-indicator-modal.component.html',
  styleUrls: ['./add-edit-indicator-modal.component.scss']
})
export class AddEditIndicatorModalComponent {
  form: AddEditIndicatorForm;

  status = IndicatorDialogStatus;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IndicatorFormData,
    private readonly dialogRef: MatDialogRef<AddEditIndicatorModalComponent>,
  ) {
    this.form = new AddEditIndicatorForm(this.data.indicator);
  }

  submit(): void {
    this.dialogRef.close(this.form.getIndicator());
  }
}
